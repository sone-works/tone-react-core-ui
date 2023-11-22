import { Input as NextUIInput } from '@nextui-org/react'

type SixDigitInputProps = {
  value?: string
  setValue?: Function
}

export default function SixDigitInput({
  value,
  setValue = () => {},
}: SixDigitInputProps) {
  return (
    <NextUIInput
      value={value}
      onChange={(e) => parseInput(e.target.value)}
      classNames={{
        input: 'text-center text-3xl',
      }}
      style={{ letterSpacing: '1rem' }}
    />
  )

  function parseInput(value: string) {
    return value.length <= 6 && setValue(value)
  }
}
