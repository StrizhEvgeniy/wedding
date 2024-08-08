import {FC} from "react";
import Icon from '@ant-design/icons'

import {CustomIconComponentProps} from '@ant-design/icons/lib/components/Icon'

// @ts-expect-error React component
import CircleSVG from './circle.svg?react'

type IFC = FC<Partial<CustomIconComponentProps>>

export const CircleIcon: IFC = (props) => <Icon component={CircleSVG} {...props} />
