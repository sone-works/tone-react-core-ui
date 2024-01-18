import { CSSProperties, useRef } from 'react'
import { useDarkMode } from 'usehooks-ts'

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
  dark?: boolean
  label?: string
  name?: string
  startContent?: any
  isDisabled?: boolean
  placeholder?: string
}

export default function Input({
  value,
  setValue = () => {},
  className,
  classNames,
  style,
  styles,
  styleNamespace = 'global',
  dark,
  label,
  name,
  startContent,
  isDisabled,
  placeholder,
}: InputProps) {
  const inputElement = useRef<HTMLInputElement>(null)

  const { isDarkMode } = useDarkMode()

  const isDark = dark || isDarkMode

  const namespaceColors = {
    darker: `var(--${styleNamespace}-darker)`,
    lighter: `var(--${styleNamespace}-lighter)`,
  }

  const colors = {
    ...namespaceColors,
    background: !isDark ? namespaceColors.lighter : namespaceColors.darker,
    text: !isDark ? namespaceColors.darker : namespaceColors.lighter,
    border: !isDark ? namespaceColors.darker : namespaceColors.lighter,
  }

  inputElement.current &&
    inputElement.current.style.setProperty(
      '--placeholder-color',
      !isDark ? namespaceColors.darker : namespaceColors.lighter
    )

  return (
    <div className={'group' + className && ' ' + className} style={style}>
      <div
        className={classNames?.wrapper || 'rounded-xl px-2 py-1 border-2'}
        style={{
          opacity: isDisabled ? 0.5 : 1,
          ...(styles?.wrapper || {
            backgroundColor: colors.background,
            borderColor: colors.border,
            color: colors.text,
          }),
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
              'w-full bg-transparent outline-none font-content'
            }
            value={value}
            name={name}
            onChange={(e) => setValue(e.target.value)}
            disabled={isDisabled}
            placeholder={placeholder}
            style={styles?.input}
            ref={inputElement}
          />
        </div>
      </div>
    </div>
  )
}
