import React from 'react'
import styles from './Box.module.scss'

interface IBoxProps {
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
  noStyle?: boolean
}

export default function Box({
  children,
  className = styles.box,
  style = {},
}: IBoxProps) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  )
}
