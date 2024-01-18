import { CSSProperties, useRef } from 'react'
import { useDarkMode } from 'usehooks-ts'

type TextareaProps = {
  name?: string
  label?: string
  value?: string
  setValue?: Function
  isDisabled?: boolean
  className?: string
  classNames?: {
    wrapper?: string
    label?: string
    textarea?: string
  }
  style?: CSSProperties
  styles?: {
    wrapper?: CSSProperties
    label?: CSSProperties
    textarea?: CSSProperties
  }
  styleNamespace?: string
  dark?: boolean
  placeholder?: string
}

export default function Textarea({
  name,
  label,
  value,
  setValue = () => {},
  className,
  classNames,
  style,
  styles,
  styleNamespace = 'global',
  dark,
  isDisabled,
  placeholder,
}: TextareaProps) {
  const textAreaElement = useRef<HTMLTextAreaElement>(null)
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

  textAreaElement.current &&
    textAreaElement.current.style.setProperty(
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
            style={styles?.label}
          >
            {label}
          </label>
        )}
        <textarea
          name={name}
          className={
            classNames?.textarea ||
            'w-full bg-transparent outline-none font-content resize-none placeholder:opacity-30'
          }
          style={styles?.textarea}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={isDisabled}
          placeholder={placeholder}
          ref={textAreaElement}
        />
      </div>
    </div>
  )
}
