import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps';
import {useMediaQuery, useWindowDimensions} from "../lib/hooks";

import {Modal} from "antd";
import {FC, ReactNode, useMemo} from "react";

export const MapModal: FC<{ title: ReactNode, onCancel: () => void, open: boolean }> = ({title, onCancel, open}) => {
  const {height, width} = useWindowDimensions();

  const isMobile = useMediaQuery("(max-width: 558px)")

  const widthMulti = useMemo(() => isMobile ? 0.65 : 0.7, [isMobile])

  return (
    <Modal title={title} onCancel={onCancel} open={open} width={width * 0.75} height={height * 0.8} footer={<></>}
           closable={false}>
      <YMaps>
        <Map width={width * widthMulti} height={height * 0.7} defaultState={{center: [43.108, 131.873], zoom: 17}}>
          <Placemark geometry={[43.108527, 131.873330]}/>
        </Map>
      </YMaps>
    </Modal>
  )
}