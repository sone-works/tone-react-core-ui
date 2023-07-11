interface ISectionProps {
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export default function Section({ children, className, style }: ISectionProps) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  )
}
