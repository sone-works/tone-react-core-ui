import React from 'react'

interface IBoxProps {
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

const defaultBoxStyle: React.CSSProperties = {
  fontSize: '1em',
  padding: '1em',
}

export default function Box({
  children,
  className,
  style = defaultBoxStyle,
}: IBoxProps) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  )
}
