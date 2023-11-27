import { Input as NextUIInput } from '@nextui-org/react'
import { CSSProperties } from 'react'

type InputProps = {
  label?: string
  value?: string
  defaultValue?: string
  setValue?: Function
  isInvalid?: boolean
  errorMessage?: string
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
  isInvalid,
  errorMessage,
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
      radius="lg"
      labelPlacement="inside"
      onChange={(e) => setValue(e.target.value)}
      defaultValue={defaultValue}
      isInvalid={isInvalid}
      errorMessage={errorMessage}
      isDisabled={isDisabled}
      className={className}
      classNames={{
        label: 'font-header text-sm py-1',
        input: 'font-content text-base',
        innerWrapper: 'flex items-center',
        errorMessage: 'font-header text-base',
      }}
      style={style}
      startContent={startContent}
      endContent={endContent}
    />
  )
}
