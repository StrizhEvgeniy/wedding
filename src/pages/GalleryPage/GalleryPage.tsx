import {Image} from "antd";
import {useState} from "react";
import {GalleryModal} from "./GalleryModal.tsx";

import styles from './GalleryPage.module.scss'
import {useMediaQuery} from "../../lib/hooks";

export const GalleryPage = () => {
  const [open, setOpen] = useState<boolean>(false)
  const isMobile = useMediaQuery("(max-width: 1150px)")
  const width = isMobile ? '35%' : '20%'
  return (
    <div className={styles.root}>
      <div className={styles.title}>Галерея</div>
      <Image onClick={() => setOpen(true)} className={styles.buttonImg} preview={false} src='/button2.png'
             width={width}/>
      <GalleryModal open={open} onCancel={() => setOpen(false)}/>
    </div>
  );
};