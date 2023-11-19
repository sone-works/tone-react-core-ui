'use client'

import React from 'react'

interface IPageProps {
  children?: React.ReactNode
  isLoading?: boolean
  isAuthorized?: boolean
  style?: React.CSSProperties
}

export default function Page({
  children,
  isLoading = false,
  isAuthorized = true,
  style,
}: IPageProps) {
  /*if (isLoading)
    return (
      <div className="h-full w-full" style={style}>
          <i className="fa-fw fa-pulse fa-sharp fa-solid fa-music-note" />
      </div>
    )*/

  if (!isAuthorized)
    return (
      <div className="h-full w-full p-4" style={style}>
        <div>
          <i className="fa-fw fa-sharp fa-light fa-face-dotted" />
          <p>
            Well this is a little awkward, but you're not allowed to be here...
          </p>
        </div>
      </div>
    )

  return (
    <div className="h-full w-full p-4" style={style}>
      {children}
    </div>
  )
}
