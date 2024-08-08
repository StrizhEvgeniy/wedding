import {Calendar, Image} from "antd";
import dayjs from 'dayjs'

import styles from '../CalendarPage/CalendarPage.module.scss'
import {useMediaQuery} from "../../lib/hooks";
import clsx from "clsx";


export const CalendarPage = () => {

  const isMobile = useMediaQuery("(max-width: 1250px)")

  const width = isMobile ? '90%' : '50%'
  return (
    <div className={clsx(isMobile ? styles.rootCalendar : styles.root)}>

      <Image className={styles.img} width={width} src='/calendar.jpg'/>
      <div className={styles.text}>
        <div className={styles.title} style={{lineHeight: 1}}>Октябрь<br/>2024</div>
        <div className={styles.calendar}><Calendar fullscreen={false} value={dayjs('2024-10-05')}
                                                   headerRender={() => <></>}></Calendar>
        </div>
      </div>

    </div>
  );
};