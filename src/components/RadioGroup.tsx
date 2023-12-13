import { RadioGroup as NextUIRadioGroup } from '@nextui-org/react'

import { ReactNode } from 'react'

type RadioGroupProps = {
  children?: ReactNode
  label?: string
  orientation?: any
  additionalClasses?: string
  value?: string
  setValue?: Function
}

export default function RadioGroup({
  children,
  label,
  orientation,
  additionalClasses,
  value,
  setValue = () => {},
}: RadioGroupProps) {
  return (
    <NextUIRadioGroup
      label={label}
      orientation={orientation}
      className={additionalClasses && ' ' + additionalClasses}
      classNames={{
        label: 'font-header text-sm',
      }}
      value={value}
      onValueChange={(value) => setValue(value)}
    >
      {children}
    </NextUIRadioGroup>
  )
}
