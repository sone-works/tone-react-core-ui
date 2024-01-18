import { CSSProperties, useEffect, useState } from 'react'
import { useDarkMode } from 'usehooks-ts'

type ButtonProps = {
  children?: any
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
  const namespaceColors = {
    darker: `var(--${styleNamespace}-darker)`,
    lighter: `var(--${styleNamespace}-lighter)`,
  }

  const [colors, setColors] = useState({
    ...namespaceColors,
    background: namespaceColors.lighter,
    text: namespaceColors.darker,
    border: namespaceColors.darker,
  })

  const { isDarkMode } = useDarkMode()

  const isDark = dark || isDarkMode

  useEffect(() => {
    !isDark
      ? setColors({
          ...namespaceColors,
          background: namespaceColors.darker,
          text: namespaceColors.lighter,
          border: namespaceColors.lighter,
        })
      : setColors({
          ...namespaceColors,
          background: namespaceColors.lighter,
          text: namespaceColors.darker,
          border: namespaceColors.darker,
        })
  }, [isDark])

  return (
    <div className={className} style={style}>
      <button
        className={
          classNames?.button ||
          'flex items-center justify-center w-full p-2 rounded-xl font-content text-lg border-2'
        }
        onClick={(e) => onClick(e)}
        disabled={isDisabled}
        style={{
          opacity: !isDisabled ? 1 : 0.5,
          ...(styles?.button || {
            backgroundColor: colors.background,
            borderColor: colors.border,
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
