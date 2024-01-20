import { CSSProperties, useRef, useState } from 'react'

type InputProps = {
  value?: string
  setValue?: Function
  results?: any
  variant?: 'solid' | 'outlined'
  className?: string
  classNames?: {
    wrapper?: string
    label?: string
    innerWrapper?: string
    startContent?: string
    input?: string
    endContent?: string
    results?: string
  }
  style?: CSSProperties
  styles?: {
    wrapper?: CSSProperties
    label?: CSSProperties
    innerWrapper?: CSSProperties
    startContent?: CSSProperties
    input?: CSSProperties
    endContent?: CSSProperties
    results?: CSSProperties
  }
  styleNamespace?: string
  label?: string
  name?: string
  startContent?: any
  endContent?: any
  isDisabled?: boolean
  placeholder?: string
}

export default function Input({
  value,
  setValue = () => {},
  results,
  variant = 'outlined',
  className,
  classNames,
  style,
  styles,
  styleNamespace = 'global',
  label,
  name,
  startContent,
  endContent,
  isDisabled,
  placeholder,
}: InputProps) {
  const [isFocused, setFocused] = useState<boolean>(false)

  const wrapperVariantClassNames = () => {
    switch (variant) {
      case 'solid':
        return `bg-${styleNamespace}-flipped text-${styleNamespace}-flipped`
      case 'outlined':
        return `bg-${styleNamespace} text-${styleNamespace}`
    }
  }

  const inputElement = useRef(null)

  return (
    <div
      className={'group' + className && ' ' + className}
      style={style}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      <div
        className={
          classNames?.wrapper ||
          `rounded-xl px-2 py-1 border-2 bg-${styleNamespace} text-${styleNamespace} border-${styleNamespace} ${wrapperVariantClassNames()}`
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
              `w-full bg-transparent outline-none font-content placeholder:opacity-30 placeholder:text-${styleNamespace}`
            }
            value={value}
            name={name}
            onChange={(e) => setValue(e.target.value)}
            disabled={isDisabled}
            placeholder={placeholder}
            style={styles?.input}
            ref={inputElement}
          />
          {endContent && (
            <div
              className={classNames?.endContent || 'p-1'}
              style={styles?.endContent}
            >
              {endContent}
            </div>
          )}
        </div>
      </div>
      {results && isFocused && (
        <div
          className="relative w-full max-w-full"
          onFocus={() => setFocused(true)}
        >
          <div
            className={
              classNames?.results ||
              `absolute mt-1 rounded-xl w-full ${wrapperVariantClassNames()}`
            }
            style={{ ...styles?.results, zIndex: 333 }}
          >
            {results}
          </div>
        </div>
      )}
    </div>
  )
}
