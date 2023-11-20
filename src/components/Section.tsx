import { CSSProperties, ReactNode } from 'react'

type SectionProps = {
  children?: ReactNode
  style?: CSSProperties
}

export default function Section({ children, style }: SectionProps) {
  return <div style={style}>{children}</div>
}
