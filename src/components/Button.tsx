import { CSSProperties, ReactNode } from 'react'
import { useDarkMode } from 'usehooks-ts'

type ButtonProps = {
  children?: ReactNode
  className?: string
  classNames?: {
    button?: string
    innerWrapper?: string
  }
  style?: CSSProperties
  styles?: {
    button?: CSSProperties
    innerWrapper?: CSSProperties
  }
  styleNamespace?: string
  dark?: boolean
  onClick?: Function
  isDisabled?: boolean
}

export default function Button({
  children,
  className,
  classNames,
  style,
  styles,
  styleNamespace = 'global',
  dark,
  onClick = () => {},
  isDisabled,
}: ButtonProps) {
  const { isDarkMode } = useDarkMode()

  const isDark = dark || isDarkMode

  const namespaceColors = {
    darker: `var(--${styleNamespace}-darker)`,
    lighter: `var(--${styleNamespace}-lighter)`,
  }

  const colors = {
    ...namespaceColors,
    background: namespaceColors.darker,
    text: namespaceColors.lighter,
    border: namespaceColors.lighter,
  }

  return (
    <div className={className} style={style}>
      <button
        className={
          classNames?.button ||
          'flex items-center justify-center w-full p-1 rounded-xl font-content text-lg'
        }
        onClick={(e) => onClick(e)}
        disabled={isDisabled}
        style={{
          opacity: !isDisabled ? 1 : 0.5,
          ...(styles?.button || {
            backgroundColor: colors.background,
            color: colors.text,
          }),
        }}
      >
        <div
          className={
            classNames?.innerWrapper || 'border-2 p-2 rounded-xl w-full'
          }
          style={styles?.innerWrapper || { borderColor: colors.border }}
        >
          {children}
        </div>
      </button>
    </div>
  )
}
