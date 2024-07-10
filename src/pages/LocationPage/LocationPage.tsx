import styles from './LocationPage.module.scss'
import {Button, Image} from "antd";

export const LocationPage = () => {
  return (
    <div className={styles.root}>

      <div className={styles.text}>
        <div className={styles.title}>Локация</div>
        <div className={styles.description}>Шикарная площадка на берегу моря с восхитительным видом на яхты и закат
          будет основной локацией этого вечера
        </div>
        <div className={styles.footer}>Сбор гостей в 16:00</div>
        <Button>Как добраться</Button>
      </div>
      <Image width='50%' src='location.jpeg'/>
    </div>
  );
};