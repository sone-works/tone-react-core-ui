import { CSSProperties } from 'react'

type InputProps = {
  value?: string
  setValue?: Function
  className?: string
  classNames?: {
    wrapper?: string
    label?: string
    innerWrapper?: string
    startContent?: string
    input?: string
  }
  style?: CSSProperties
  styles?: {
    wrapper?: CSSProperties
    label?: CSSProperties
    innerWrapper?: CSSProperties
    startContent?: CSSProperties
    input?: CSSProperties
  }
  styleNamespace?: string
  label?: string
  name?: string
  startContent?: any
  isDisabled?: boolean
  placeholder?: string
}

export default function Input({
  value = '',
  setValue = () => {},
  className,
  classNames,
  style,
  styles,
  styleNamespace = 'global',
  label,
  name,
  startContent,
  isDisabled,
  placeholder,
}: InputProps) {
  return (
    <div className={'group' + className && ' ' + className} style={style}>
      <div
        className={
          classNames?.wrapper ||
          `rounded-xl px-2 py-1 border-2 bg-${styleNamespace} text-${styleNamespace} border-${styleNamespace}`
        }
        style={{
          opacity: isDisabled ? 0.5 : 1,
          ...styles?.wrapper,
        }}
      >
        {label && (
          <label
            className={classNames?.label || 'font-header text-sm'}
            htmlFor={name}
            style={styles?.label}
          >
            {label}
          </label>
        )}
        <div
          className={classNames?.innerWrapper || 'flex items-center w-full'}
          style={styles?.innerWrapper}
        >
          {startContent && (
            <div
              className={classNames?.startContent || 'p-1'}
              style={styles?.startContent}
            >
              {startContent}
            </div>
          )}
          <input
            className={
              classNames?.input ||
              `w-full bg-transparent outline-none font-content placeholder:text-${styleNamespace}`
            }
            value={value}
            name={name}
            onChange={(e) => setValue(e.target.value)}
            disabled={isDisabled}
            placeholder={placeholder}
            style={styles?.input}
          />
        </div>
      </div>
    </div>
  )
}
