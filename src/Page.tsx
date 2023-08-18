'use client'

import React from 'react'
import styles from './Page.module.scss'

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
  className = styles.page,
  additionalClasses = [],
}: IPageProps) {
  const elementClasses: string[] = [className, ...additionalClasses]

  const classString: string = elementClasses.toString().replace(/,/g, ' ')

  if (isLoading)
    return (
      <div style={style} className={classString}>
        <div className={styles.pageLoading}>
          <i className="fa-fw fa-pulse fa-sharp fa-solid fa-music-note" />
        </div>
      </div>
    )

  if (!isAuthorized)
    return (
      <div style={style} className={classString}>
        <div className={styles.pageUnauthorized}>
          <i className="fa-fw fa-sharp fa-light fa-face-dotted" />
          <p>
            Well this is a little awkward, but you're not allowed to be here...
          </p>
        </div>
      </div>
    )

  return (
    <div style={style} className={classString}>
      {children}
    </div>
  )
}
