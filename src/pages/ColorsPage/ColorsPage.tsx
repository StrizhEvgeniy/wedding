import styles from './ColorsPage.module.scss'
import {CircleIcon} from "../../assets";
import clsx from "clsx";
import {useMediaQuery} from "../../lib/hooks";

export const ColorsPage = () => {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const marginLeft = isMobile ? 10 : 30
  return (
    <div className={styles.root}>
      <div className={styles.title}>Дресс-код</div>
      <div className={styles.description}>
        Мы будем благодарны, если вы будете <br/> придерживаться следующей цветовой палитры. <br/>
        Составляя её, мы вдохновлялись морским побережьем <br/> и нашим чудесным городом.
      </div>
      <div style={{marginTop: 40, marginBottom: 40}}>
        <CircleIcon className={clsx(styles.circle, styles.violet)}/>
        <CircleIcon className={clsx(styles.circle, styles.blue)} style={{marginLeft}}/>
        <CircleIcon className={clsx(styles.circle, styles.lightBlue)} style={{marginLeft}}/>
        <CircleIcon className={clsx(styles.circle, styles.green)} style={{marginLeft}}/>
        <CircleIcon className={clsx(styles.circle, styles.yellow)} style={{marginLeft}}/>
      </div>
      <div className={styles.description}>Но главное для нас, чтобы вам было удобно и хорошо <br/>
        на нашем празднике, поэтому это не обязательно.
      </div>
    </div>
  );
};