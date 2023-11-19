import React from 'react'

interface IBoxProps {
  children?: React.ReactNode
  style?: React.CSSProperties
}

export default function Box({ children, style = {} }: IBoxProps) {
  return <div style={style}>{children}</div>
}
