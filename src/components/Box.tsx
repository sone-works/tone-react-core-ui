import { CSSProperties, ReactNode } from 'react'

type BoxProps = {
  children?: ReactNode
  className?: string
  style?: CSSProperties
}

export default function Box({ children, className, style }: BoxProps) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  )
}
