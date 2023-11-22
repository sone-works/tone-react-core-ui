import { CSSProperties, ReactNode } from 'react'

type BoxProps = {
  children?: ReactNode
  className?: string
  additionalClasses?: string
  style?: CSSProperties
}

export default function Box({
  children,
  className,
  additionalClasses,
  style,
}: BoxProps) {
  const boxClasses = 'p-6 rounded-[20px] shadow border border-gray-200'

  return (
    <div
      className={
        className || boxClasses + (additionalClasses && ' ' + additionalClasses)
      }
      style={style}
    >
      {children}
    </div>
  )
}
