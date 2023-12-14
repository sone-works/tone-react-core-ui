import ReactSlider from 'react-slider'

/*type SliderProps = {
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
}*/

type SliderProps = {
  className?: string
  trackClassName?: string
  thumbClassName?: string
  min?: number
  max?: number
  step?: number
  renderThumb?: Function
}

const F = () => {}

export default function Slider({
  className,
  trackClassName,
  thumbClassName,
  min,
  max,
  step,
  renderThumb = F,
}: SliderProps) {
  return (
    <ReactSlider
      className={className}
      trackClassName={trackClassName}
      thumbClassName={thumbClassName}
      min={min}
      max={max}
      step={step}
      renderThumb={(props, state) => renderThumb(props, state)}
    />
  )
}
