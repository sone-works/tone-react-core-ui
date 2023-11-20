'use client'

import { CSSProperties, ReactNode } from 'react'

type CarouselItemProps = {
  children?: ReactNode
  className?: string
  style?: CSSProperties
}

export default function CarouselItem({
  children,
  className,
  style,
}: CarouselItemProps) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  )
}
