import { Input as NextUIInput } from '@nextui-org/react'
import { CSSProperties } from 'react'

type InputProps = {
  label?: string
  placeholder?: string
  description?: string
  value?: string
  defaultValue?: string
  setValue?: Function
  isInvalid?: boolean
  errorMessage?: string
  isDisabled?: boolean
  className?: string
  additionalClasses?: string
  style?: CSSProperties
  startContent?: any
  endContent?: any
  variant?: 'flat' | 'bordered' | 'underlined' | 'faded'
}

export default function Input({
  label,
  placeholder,
  description,
  value,
  setValue = () => {},
  defaultValue,
  isInvalid,
  errorMessage,
  isDisabled,
  className,
  additionalClasses,
  style,
  startContent,
  endContent,
  variant,
}: InputProps) {
  return (
    <NextUIInput
      label={label}
      placeholder={placeholder}
      description={description}
      value={value}
      radius="lg"
      labelPlacement="inside"
      onChange={(e) => setValue(e.target.value)}
      defaultValue={defaultValue}
      isInvalid={isInvalid}
      errorMessage={errorMessage}
      isDisabled={isDisabled}
      className={
        additionalClasses ? className + ' ' + additionalClasses : className
      }
      classNames={{
        base: 'placeholder-gray-100',
        label: 'font-header text-sm py-1',
        input: 'font-content text-base',
        innerWrapper: 'flex items-center',
        errorMessage: 'font-header text-base',
      }}
      style={style}
      startContent={startContent}
      endContent={endContent}
      variant={variant}
    />
  )
}
