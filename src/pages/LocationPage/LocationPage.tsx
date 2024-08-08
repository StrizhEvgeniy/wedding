import styles from './LocationPage.module.scss'
import {Button, Image} from "antd";
import {useMemo, useState} from "react";
import {MapModal} from "../../components/MapModal.tsx";
import {useMediaQuery} from "../../lib/hooks";

export const LocationPage = () => {
  const [opened, setOpened] = useState(false)

  const isMobile = useMediaQuery("(max-width: 768px)")

  const width = useMemo(() => isMobile ? '90%' : '50%', [isMobile])

  return (
    <div className={styles.root}>
      <div className={styles.text}>
        <div className={styles.title}>Локация</div>
        <div className={styles.description}>Шикарная площадка на берегу моря с восхитительным видом на яхты и закат
          будет основной локацией этого вечера
        </div>
        {isMobile ? <div className={styles.footer}>Сбор гостей <br/> в 16:30</div> :
          <div className={styles.footer}>Сбор гостей в 16:30</div>}
        <Button className={styles.button} onClick={() => setOpened(true)}>Как добраться</Button>
      </div>
      <Image width={width} src='location.jpeg'/>
      <MapModal title='Как добраться' open={opened} onCancel={() => setOpened(false)}/>
    </div>
  );
};