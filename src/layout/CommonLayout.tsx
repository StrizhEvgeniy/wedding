import {CSSProperties, FC, PropsWithChildren} from "react";
import styles from './CommonLayout.module.scss'
import clsx from "clsx";

export const CommonLayout: FC<PropsWithChildren<{ start?: boolean, style?: CSSProperties }>> = ({
                                                                                                  children,
                                                                                                  start,
                                                                                                  style
                                                                                                 }) => {

  return (
    <div className={clsx(start ? styles.rootLayoutStart : styles.rootLayoutEnd)} style={style}>
      <div className={styles.content} style={style}>
        {children}
      </div>
    </div>
  )
}