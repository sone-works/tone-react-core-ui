'use client'

import { win } from '@sone-dao/sone-react-utils'
import { CSSProperties, ReactNode, useEffect } from 'react'

type PageProps = {
  name: string
  version: string
  children?: ReactNode
  className?: string
  additionalClasses?: string
  style?: CSSProperties
}

export default function Page({
  name,
  version,
  children,
  className,
  additionalClasses,
  style,
}: PageProps) {
  useEffect(() => {
    if (win.TONE_DEBUG) win.TONE_PAGE = { name, version }
  }, [])

  return (
    <div
      className={className || 'h-full p-4 w-full' + ' ' + additionalClasses}
      style={style}
    >
      {children}
    </div>
  )
}
