import {Button, Flex, Form, Image, Input, Radio, Select, Space} from "antd";
import {CommonLayout} from "../../layout/CommonLayout.tsx";

import styles from './AnketaPage.module.scss'
import {FC, useEffect, useMemo, useState} from "react";
import {useForm} from "antd/es/form/Form";
import {useMediaQuery} from "../../lib/hooks";
import clsx from "clsx";
import axios from "axios";
import {getWelcomeById} from "../../mock/welcome.ts";

export const AnketaPage: FC<{ id?: string }> = ({id}) => {
  const [form] = useForm()
  const [willBe, setWillBe] = useState()
  const [sayTost, setSayTost] = useState()

  const isMobile = useMediaQuery("(max-width: 768px)")

  const isKnown = useMemo(() => id !== undefined, [id])

  const options = [
    {
      label: 'Игристое',
      value: 'sparkling',
    },
    {
      label: 'Вино',
      value: 'vine',
    },
    {
      label: 'Крепкое',
      value: 'machine',
    },
    {
      label: 'Не алкоголь',
      value: 'pussy',
    }
  ]

  useEffect(() => {
      void form.validateFields()
    }
    , [form, willBe])

  const submit = async (values: {
    name: string | undefined;
    companionName: string | undefined;
    drinks: string[] | undefined;
    customDrink: string | undefined;
  }) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      // @ts-expect-error: any
      const response = await axios.post('http://swift-coupling.ru/api/create/', {
        id: id ?? 'none',
        willBe,
        name: values.name ?? null,
        companionName: values.companionName ?? null,
        drinks: values.drinks ?? null,
        customDrink: values.customDrink ?? null,
        sayTost: sayTost ?? null
        // @ts-expect-error: any
      }).catch(() => console.error(response))
    } catch {
      console.log('error')
    }
  }

  return (
    <CommonLayout start={false} style={{height: 'fit-content'}}>
      <Flex style={{height: 'fit-content'}} justify={"space-between"} vertical>
        {!isKnown && <div className={styles.header} style={{marginBottom: 50}}>
          <div className={styles.title}>Анкета гостя</div>
          <Image width='60%' src='/anketa.jpg' className={styles.img}/></div>}
        {
          isKnown && <div className={styles.header}>
            <div className={styles.title}>Анкета гостя</div>
            <Image className={styles.img} width='60%' src='/anketa.jpg'/>
            <div className={styles.titleNames}>{getWelcomeById(id)}</div>
          </div>
        }

        <Form layout={"vertical"} form={form} className={styles.formRoot}
              onFinish={submit}>
          {isMobile ?
            <div className={clsx(styles.flexCenter)}><Space className={styles.leftColumn}
                                                            direction='vertical'>
              <Form.Item label="Планируете ли вы присутствовать:"
                         rules={[{required: true, message: 'Это поле обязательно заполнить'}]}>
                <Radio.Group value={willBe} onChange={(e) => setWillBe(e.target.value)}>
                  <Space direction="vertical">
                    <Radio value={true}>C Удовольствием приду!</Radio>
                    <Radio value={false}>Не смогу :(</Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>

              {
                !isKnown &&
                <Form.Item name='name' rules={[{required: willBe, message: 'Это поле обязательно заполнить'}]}>
                  <Input placeholder='Имя и Фамилия'/>
                </Form.Item>
              }

              <Form.Item
                label="Если вы будете не одни, заполните поле ниже:" name='companionName'>
                <Input placeholder='Имя и Фамилия спутника/спутницы'
                />
              </Form.Item>

              <Form.Item label="Выберите, что будете пить:" name='drinks'
                         rules={[{required: willBe, message: 'Выберите, как минимум один пункт'}]}>
                <Select mode={'multiple'} allowClear options={options} size={isMobile ? 'small' : 'middle'}
                />
              </Form.Item>
              <Form.Item label="Свой вариант:" name='customDrink'>
                <Input placeholder='Что будете пить'/>
              </Form.Item>
              <Form.Item label="Хотите ли вы сказать тост?"
                         rules={[{required: willBe, message: 'Это поле обязательно заполнить'}]}>
                <Radio.Group value={sayTost} onChange={(e) => setSayTost(e.target.value)}>
                  <Space direction="vertical">
                    <Radio value={true}>Я хочу</Radio>
                    <Radio value={false}>Нет, я не хочу</Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>
            </Space>
            </div> : <Flex style={{width: '100%'}} justify='space-around'>
              <Space className={styles.leftColumn} direction='vertical'>
                <Form.Item label="Планируете ли вы присутствовать:"
                           rules={[{required: true, message: 'Это поле обязательно заполнить'}]}>
                  <Radio.Group value={willBe} onChange={(e) => setWillBe(e.target.value)}>
                    <Space direction="vertical">
                      <Radio value={true}>C Удовольствием приду!</Radio>
                      <Radio value={false}>Не смогу :(</Radio>
                    </Space>
                  </Radio.Group>

                </Form.Item>

                {
                  !isKnown &&
                  <Form.Item name='name' rules={[{required: willBe, message: 'Это поле обязательно заполнить'}]}>
                    <Input placeholder='Имя и Фамилия'/>
                  </Form.Item>
                }

                <Form.Item
                  label="Если вы будете не одни, заполните поле ниже:" name='companionName'>
                  <Input placeholder='Имя и Фамилия спутника/спутницы'
                  />
                </Form.Item>
              </Space>
              <Space className={clsx(styles.rightColumn, isMobile && styles.smallInput)} direction='vertical'>
                <Form.Item label="Выберите, что будете пить:" name='drinks'
                           rules={[{required: willBe, message: 'Выберите, как минимум один пункт'}]}>
                  <Select mode={'multiple'} allowClear options={options} size={isMobile ? 'small' : 'middle'}
                  />
                </Form.Item>
                <Form.Item label="Свой вариант:" name='customDrink'>
                  <Input placeholder='Что будете пить'/>
                </Form.Item>
                <Form.Item label="Хотите ли вы сказать тост?"
                           rules={[{required: willBe, message: 'Это поле обязательно заполнить'}]}>
                  <Radio.Group value={sayTost} onChange={(e) => setSayTost(e.target.value)}>
                    <Space direction="vertical">
                      <Radio value={true}>Я хочу</Radio>
                      <Radio value={false}>Нет, я не хочу</Radio>
                    </Space>
                  </Radio.Group>
                </Form.Item>
              </Space>
            </Flex>
          }
          <Flex justify={'center'}>
            <Form.Item>
              <Button htmlType="submit">
                Отправить
              </Button>
            </Form.Item>
          </Flex>
        </Form>
      </Flex>
    </CommonLayout>
  );
};