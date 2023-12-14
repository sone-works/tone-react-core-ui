import { Slider as NextUISlider } from '@nextui-org/react'

type SliderProps = {
  classNames?: {
    base?: string
    labelWrapper?: string
    label?: string
    value?: string
    step?: string
    mark?: string
    trackWrapper?: string
    track?: string
    filler?: string
    thumb?: string
    startContent?: string
    endContent?: string
  }
  label?: string
  size?: 'sm' | 'md' | 'lg'
  radius?: 'full' | 'lg' | 'md' | 'sm' | 'none'
  step?: number
  maxValue?: number
  minValue?: number
  defaultValue?: number
  startContent?: any
  endContent?: any
  hideValue?: boolean
  hideThumb?: boolean
  value?: number
  onChange?: Function
  onChangeEnd?: Function
  renderThumb?: Function
}

const F = () => {}

export default function Slider({
  classNames,
  label,
  size,
  radius,
  step,
  maxValue,
  minValue,
  defaultValue,
  startContent,
  endContent,
  hideValue,
  hideThumb,
  value,
  onChange = F,
  onChangeEnd = F,
  renderThumb = F,
}: SliderProps) {
  return (
    <NextUISlider
      classNames={classNames}
      label={label}
      size={size}
      radius={radius}
      step={step}
      maxValue={maxValue}
      minValue={minValue}
      defaultValue={defaultValue}
      startContent={startContent}
      endContent={endContent}
      hideValue={hideValue}
      hideThumb={hideThumb}
      value={value}
      onChange={(value) => onChange(value)}
      onChangeEnd={(value) => onChangeEnd(value)}
      renderThumb={(props) => renderThumb(props)}
    />
  )
}
