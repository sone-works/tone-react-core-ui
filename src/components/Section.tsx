interface ISectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
}

export default function Section({ children, style }: ISectionProps) {
  return <div style={style}>{children}</div>
}
