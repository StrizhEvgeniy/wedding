import {Image} from "antd";
import styles from './TitlePage.module.scss'

export const TitlePage = () => {
  return (
    <div className={styles.root} >
      <div className={styles.title}>THE WEDDING DAY</div>
      <div className={styles.names}>Евгений & Арина</div>

      <Image
        src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fgol.ru%2Fmaterials%2F19268-why-do-people-kiss&psig=AOvVaw3vAhyVD5korcwfE7ODhpxa&ust=1719319939801000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOjB-oek9IYDFQAAAAAdAAAAABAE'
        preview={false}/>
      <div className={styles.footer}><span className={styles.rightLine}>05.10.2024</span><span>16:00</span></div>
    </div>
  );
};