import {Modal, Image} from "antd";
import {FC} from "react";
import styles from './GalleryPage.module.scss'

const images: string[] = [
  '/gallery/KATE4182.jpg',
  '/gallery/KATE4199.jpg',
  '/gallery/KATE4283.jpg',
  '/gallery/KATE4350.jpg',
  '/gallery/KATE4387.jpg',
  '/gallery/KATE4389.jpg',
  '/gallery/KATE4434.jpg',
  '/gallery/KATE4498.jpg',
  '/gallery/KATE4512.jpg',
  '/gallery/KATE4561.jpg',
  '/gallery/KATE4650.jpg',
  '/gallery/KATE5908.jpg',
  '/gallery/KATE6043.jpg',
  '/gallery/KATE6141.jpg',
  '/gallery/KATE6383.jpg',
  '/gallery/KATE6440.jpg',
  '/gallery/KATE6502.jpg',
  '/gallery/KATE5875.jpg',]

export const GalleryModal: FC<{ open: boolean, onCancel: () => void }> = ({open, onCancel}) => {
  return (
    <Modal open={open} onCancel={onCancel} closable={false} footer={<></>}>
      <div className={styles.rootModal}>
        {images.map((src) => <Image src={src} width='31.8%'/>)}
      </div>
    </Modal>
  );
};