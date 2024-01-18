import { CSSProperties, useRef } from 'react'
import { useDarkMode } from 'usehooks-ts'

export type FileSelectProps = {
  name?: string
  label?: string
  className?: string
  classNames?: {
    wrapper?: string
    label?: string
    input?: string
  }
  style?: CSSProperties
  styles?: {
    wrapper?: CSSProperties
    label?: CSSProperties
    input?: CSSProperties
  }
  styleNamespace?: string
  dark?: boolean
  placeholder?: string
  isDisabled?: boolean
  setValue?: (file: File) => void
}

export default function FileSelect({
  name,
  label,
  className,
  classNames,
  style,
  styles,
  styleNamespace = 'global',
  dark,
  placeholder,
  isDisabled,
  setValue = () => {},
}: FileSelectProps) {
  const { isDarkMode } = useDarkMode()

  const isDark = dark || isDarkMode

  const namespaceColors = {
    darker: !isDark
      ? `var(--${styleNamespace}-darker)`
      : `var(--${styleNamespace}-lighter)`,
    lighter: !isDark
      ? `var(--${styleNamespace}-lighter)`
      : `var(--${styleNamespace}-darker)`,
  }

  const colors = {
    ...namespaceColors,
    background: namespaceColors.lighter,
    text: namespaceColors.darker,
    border: namespaceColors.darker,
  }

  const inputElement = useRef<HTMLInputElement>(null)

  if (inputElement.current)
    inputElement.current.style.setProperty(
      '--placeholder-color',
      !dark ? namespaceColors.darker : namespaceColors.lighter
    )
  return (
    <div className={className} style={style}>
      <div
        className={
          classNames?.wrapper || 'flex flex-col rounded-xl px-2 py-1 border-2'
        }
        style={{
          ...(styles?.wrapper || {
            backgroundColor: colors.background,
            color: colors.text,
            borderColor: colors.border,
          }),
          opacity: isDisabled ? 0.5 : 1,
        }}
      >
        {label && (
          <label
            className={classNames?.label || 'font-header text-sm'}
            style={styles?.label}
            htmlFor={name}
          >
            {label}
          </label>
        )}
        <input
          type="file"
          name={name}
          className={
            classNames?.input ||
            'cursor-pointer text-global-flipped font-content file:rounded-xl file:border-solid file:border-2 file:border-global file:bg-global-flipped file:text-global-flipped file:text-xs file:font-content file:mr-2'
          }
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.files![0])}
          ref={inputElement}
        />
      </div>
    </div>
  )
}
