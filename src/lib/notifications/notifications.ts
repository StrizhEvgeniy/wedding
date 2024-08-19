import {notification} from 'antd'
import {ArgsProps} from 'antd/es/notification/interface'
import clsx from "clsx";

import styles from './notifications.module.scss'

const {success, error} = notification

type AllowedArgs = Omit<ArgsProps, 'placement'>

type Configured = (args: AllowedArgs) => void


const config = (args: AllowedArgs): ArgsProps => ({
  ...args,
  placement: 'bottomLeft',
  className: clsx(styles.root, args.className),
  style: {'--duration-seconds': args.duration ?? 0},
})

export const successNotification: Configured = ({duration = 3, ...rest}) =>
  success(config({...rest, duration, className: styles.isSuccess}))

export const errorNotification: Configured = ({duration = 20, ...rest}) =>
  error(config({...rest, duration, className: styles.isError}))