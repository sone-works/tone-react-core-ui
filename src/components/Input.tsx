import { Input as NextUIInput } from '@nextui-org/react'
import { CSSProperties } from 'react'

type InputProps = {
  label?: string
  value?: string
  defaultValue?: string
  setValue?: Function
  isDisabled?: boolean
  className?: string
  style?: CSSProperties
  startContent?: any
  endContent?: any
}

export default function Input({
  label,
  value,
  setValue = () => {},
  defaultValue,
  isDisabled,
  className,
  style,
  startContent,
  endContent,
}: InputProps) {
  return (
    <NextUIInput
      label={label}
      value={value}
      labelPlacement="inside"
      onChange={(e) => setValue(e.target.value)}
      defaultValue={defaultValue}
      isDisabled={isDisabled}
      className={className}
      classNames={{
        label: 'font-header text-sm py-1',
        input: 'font-content text-base',
        innerWrapper: 'flex items-center',
      }}
      style={style}
      startContent={startContent}
      endContent={endContent}
    />
  )
}
