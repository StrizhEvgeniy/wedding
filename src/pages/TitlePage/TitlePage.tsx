import {Image} from "antd";
import styles from './TitlePage.module.scss'
import {useMediaQuery} from "../../lib/hooks";
import {CommonLayout} from "../../layout/CommonLayout.tsx";

export const TitlePage = () => {
  const isMobile = useMediaQuery("(max-width: 450px)")

  const width = isMobile ? '70%' : '50%'
  return (
    <CommonLayout start>
      <div className={styles.root}>
        <div className={styles.title}>{isMobile ? <>THE <br/> WEDDING <br/> DAY</> : 'THE WEDDING DAY'}</div>
        <div className={styles.names}>Евгений & Арина</div>

        <Image
          src='/title.jpg'
          width={width}
          className={styles.img}
        />
        <div className={styles.footer}><span className={styles.rightLine}>05.10.2024</span><span>16:30</span></div>
      </div>
    </CommonLayout>
  );
};