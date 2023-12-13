import { Switch as NextUISwitch } from '@nextui-org/react'
import { ReactNode } from 'react'

type SwitchProps = {
  children?: ReactNode
  value?: boolean
  setValue?: Function
  className?: string
  thumbIcon?: any
  classNames?: {
    wrapper?: string
    thumb?: string
  }
}

export default function Switch({
  children,
  value,
  setValue = () => {},
  className,
  classNames,
  thumbIcon,
}: SwitchProps) {
  return (
    <NextUISwitch
      isSelected={value}
      onValueChange={(value) => setValue(value)}
      thumbIcon={thumbIcon}
      className={className}
      classNames={{
        wrapper: classNames?.wrapper,
        thumb: classNames?.thumb,
      }}
    >
      {children}
    </NextUISwitch>
  )
}
