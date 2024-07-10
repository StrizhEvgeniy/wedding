
import {FC, PropsWithChildren} from "react";
import styles from './CommonLayout.module.scss'

export const CommonLayout: FC<PropsWithChildren> = ({ children }) => {

  return (
    <div className={styles.rootLayout}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}