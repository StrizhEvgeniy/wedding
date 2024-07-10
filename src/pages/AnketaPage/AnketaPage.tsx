import {Button, Flex, Form, Input, Radio, Select, Space} from "antd";
import {CommonLayout} from "../../layout/CommonLayout.tsx";

import style from './AnketaPage.module.scss'
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useForm} from "antd/es/form/Form";

export const AnketaPage = () => {
  const {id} = useParams()

  const [form] = useForm()
  const [willBe, setWillBe] = useState()

  const options = [{
    label: 'Игристое',
    value: 'sparkling',
  },
    {
      label: 'Красное',
      value: 'red',
    },
    {
      label: 'Белое',
      value: 'white',
    },
    {
      label: 'Водка',
      value: 'vodka',
    }, {
      label: 'Джин',
      value: 'gin',
    }, {
      label: 'Не алкоголь',
      value: 'nonAlc',
    }]

  useEffect(() => {
      void form.validateFields()
    }
    , [form, willBe])

  console.log(id)
  return (
    <CommonLayout>
      <Flex style={{height: '100%'}} justify={"space-between"} vertical>
        <div className={style.title}>Анкета гостя</div>
        <div>
          <div className={style.description}>Просим подтвердить ваше <br/> присутствие на торжестве</div>
          <div className={style.date}>Дата: 05.10.2024</div>
        </div>
        <Form layout={"vertical"} form={form}
              onFinish={(values) => console.log({...values, willBe})}>
          <Flex style={{width: '100%'}} justify='space-around'>
            <Space style={{width: '50%', marginLeft: '10%'}} direction='vertical'>
              <Form.Item label="Планируете ли вы присутствовать"
                         rules={[{required: true, message: 'Это поле обязательно заполнить'}]}>
                <Radio.Group value={willBe} onChange={(e) => setWillBe(e.target.value)}>
                  <Space direction="vertical">
                    <Radio value={true}>C Удовольствием приду!</Radio>
                    <Radio value={false}>Не смогу, я булка</Radio>
                  </Space>
                </Radio.Group>

              </Form.Item>

              <Form.Item name='name' rules={[{required: willBe, message: 'Это поле обязательно заполнить'}]}>
                <Input placeholder='Имя и Фамилия' variant='borderless'/>
              </Form.Item>

              <Form.Item label="Если вы будете не одни, заполните поле ниже:" name='sputnikName'>
                <Input placeholder='Имя и Фамилия спутника/спутницы' variant='borderless'/>
              </Form.Item>
            </Space>
            <Space style={{width: '40%', marginLeft: '10%'}} direction='vertical'>
              <Form.Item label="Выберите, что будете пить:" name='drinks'
                         rules={[{required: willBe, message: 'Выберите, как минимум один пункт'}]}>
                <Select mode={'multiple'} allowClear options={options}/>
              </Form.Item>
              <Form.Item label="Свой вариант:" name='customDrinks'>
                <Input placeholder='Что будете пить' variant='borderless'/>
              </Form.Item>
            </Space>

          </Flex>


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