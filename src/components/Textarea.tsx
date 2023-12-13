import { Textarea as NextUITextarea } from '@nextui-org/react'
import { CSSProperties } from 'react'

type TextareaProps = {
  label?: string
  value?: string
  setValue?: Function
  isDisabled?: boolean
  height?: string
  className?: string
  additionalClasses?: string
  style?: CSSProperties
}

export default function Textarea({
  label,
  value,
  setValue = () => {},
  isDisabled,
  className,
  additionalClasses,
  style,
}: TextareaProps) {
  return (
    <NextUITextarea
      label={label}
      labelPlacement="inside"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      isDisabled={isDisabled}
      className={
        additionalClasses ? `${className} ${additionalClasses}` : className
      }
      classNames={{
        label: 'font-header text-sm py-1',
        input: 'font-content text-base',
      }}
      style={style}
    />
  )
}
