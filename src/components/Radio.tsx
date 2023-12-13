import { Radio as NextUIRadio } from '@nextui-org/react'
import { ReactNode } from 'react'

type RadioProps = {
  children?: ReactNode
  value: string
  classNames?: any
}

export default function Radio({ children, value, classNames }: RadioProps) {
  return (
    <NextUIRadio value={value} className="font-content">
      {children}
    </NextUIRadio>
  )
}
