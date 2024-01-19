import { CSSProperties } from 'react'

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
  onClick = () => {},
  isDisabled,
}: ButtonProps) {
  return (
    <div className={className} style={style}>
      <button
        className={
          classNames?.button ||
          `flex items-center justify-center w-full p-2 rounded-xl font-content text-lg border-2 bg-${styleNamespace}-flipped text-${styleNamespace}-flipped border-${styleNamespace}-flipped`
        }
        onClick={(e) => onClick(e)}
        disabled={isDisabled}
        style={{
          opacity: !isDisabled ? 1 : 0.5,
          ...styles?.button,
        }}
      >
        <div
          className={
            classNames?.innerWrapper ||
            `border-2 p-2 rounded-xl w-full border-${styleNamespace}-flipped`
          }
          style={styles?.innerWrapper}
        >
          {children}
        </div>
      </button>
    </div>
  )
}
