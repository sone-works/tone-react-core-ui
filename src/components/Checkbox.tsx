import { CSSProperties, useRef } from 'react'

type CheckboxProps = {
  value?: boolean
  setValue?: Function
  label?: any
  name?: string
  className?: string
  classNames?: {
    wrapper?: string
    label?: string
  }
  style?: CSSProperties
  styles?: {
    wrapper?: CSSProperties
    label?: CSSProperties
  }
}

export default function Checkbox({
  value,
  setValue = () => {},
  label,
  name,
  className,
  classNames,
  style,
  styles,
}: CheckboxProps) {
  const inputElement = useRef<HTMLInputElement>(null)
  return (
    <div className={className} style={style}>
      <div
        className={
          classNames?.wrapper || 'flex items-center cursor-pointer text-global'
        }
        onClick={() => {
          inputElement.current?.click()

          setValue(!value)
        }}
      >
        <input
          type="checkbox"
          ref={inputElement}
          style={{ display: 'none' }}
          name={name}
        />
        <i
          className={`fa-fw fa-regular ${
            value ? 'fa-square-check' : 'fa-square'
          } text-xl mr-1`}
        />
        {label && (
          <label
            htmlFor={name}
            className={classNames?.label || 'font-content cursor-pointer'}
          >
            {label}
          </label>
        )}
      </div>
    </div>
  )
}
