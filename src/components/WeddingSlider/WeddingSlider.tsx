import Marquee from "react-fast-marquee";

import styles from './WeddingSlider.module.scss'

const weddingPhotos: string[] = [
  'https://machineartist.com/spree/products/332/product/Gobo_Wedding_14.png?1485286758',
  'https://machineartist.com/spree/products/332/product/Gobo_Wedding_14.png?1485286758',
  'https://machineartist.com/spree/products/332/product/Gobo_Wedding_14.png?1485286758'
]

export const WeddingSlider = () => {
  return (
    <div className={styles.root}>
      <Marquee>
        {weddingPhotos.map((src, index) => (
          <div key={`${src}_${index}`}>
            <img className={styles.image} src={src} alt="wedding photo" loading={'lazy'}/>
          </div>
        ))}
      </Marquee>
    </div>
  );
};