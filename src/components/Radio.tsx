import { CSSProperties, useRef } from 'react'

type RadioProps = {
  children?: any
  name?: string
  value?: string
  className?: string
  classNames?: {
    wrapper?: string
    input?: string
    label?: string
  }
  style?: CSSProperties
  styles?: {
    wrapper?: CSSProperties
    input?: CSSProperties
    label?: CSSProperties
  }
  checked?: boolean
  onClick?: Function
  onChange?: Function
}

export default function Radio({
  children,
  name,
  value,
  className,
  classNames,
  style,
  styles,
  checked,
  onClick = () => {},
  onChange = () => {},
}: RadioProps) {
  const inputElement = useRef<HTMLInputElement>(null)

  return (
    <div className={className} style={style}>
      <div
        className={classNames?.wrapper || 'flex items-center px-2'}
        style={styles?.wrapper}
      >
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          className={classNames?.input}
          style={
            {
              /*display: 'none'*/
            }
          }
          onClick={() => onClick()}
          onChange={() => onChange()}
          ref={inputElement}
        />
        {children && (
          <label
            className={classNames?.label || 'cursor-pointer'}
            style={styles?.label}
            onClick={() => inputElement.current?.click()}
          >
            {children}
          </label>
        )}
      </div>
    </div>
  )
}
