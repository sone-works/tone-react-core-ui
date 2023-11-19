'use client'

import React from 'react'

interface IPageProps {
  children?: React.ReactNode
  isLoading?: boolean
  isAuthorized?: boolean
  style?: React.CSSProperties
  className?: string
  additionalClasses?: []
}

export default function Page({
  children,
  isLoading = false,
  isAuthorized = true,
  style,
  additionalClasses = [],
}: IPageProps) {
  if (isLoading)
    return (
      <div style={style}>
        <div>
          <i className="fa-fw fa-pulse fa-sharp fa-solid fa-music-note" />
        </div>
      </div>
    )

  if (!isAuthorized)
    return (
      <div style={style}>
        <div>
          <i className="fa-fw fa-sharp fa-light fa-face-dotted" />
          <p>
            Well this is a little awkward, but you're not allowed to be here...
          </p>
        </div>
      </div>
    )

  return <div style={style}>{children}</div>
}
