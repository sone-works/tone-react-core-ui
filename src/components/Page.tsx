import { CSSProperties, ReactNode } from 'react'

type PageProps = {
  children?: ReactNode
  className?: string
  additionalClasses?: string
  style?: CSSProperties
}

export default function Page({
  children,
  className,
  additionalClasses,
  style,
}: PageProps) {
  return (
    <div
      className={
        className || 'flex flex-col h-full p-4 w-full' + ' ' + additionalClasses
      }
      style={style}
    >
      {children}
    </div>
  )
}
