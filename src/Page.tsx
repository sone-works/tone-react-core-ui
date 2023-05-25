'use client'

import { useUserData } from '@sone-dao/tone-react-user-controller'
import React from 'react'
import styles from './Page.module.scss'

interface IPageProps {
  children?: React.ReactNode
  admin?: string[]
  style?: React.CSSProperties
  className?: string
  hideUi: boolean
  //authLogic?: Function
}

export default function Page({
  children,
  admin = [],
  style = {},
  className = styles.page,
  hideUi = false,
}: IPageProps) {
  const { user } = useUserData()

  document
    .querySelector('html')
    ?.style.setProperty('--body-display', hideUi ? 'flex' : 'grid')

  document
    .querySelector('html')
    ?.style.setProperty('--helmet-display', hideUi ? 'none' : 'flex')

  document
    .querySelector('html')
    ?.style.setProperty('--sidebar-display', hideUi ? 'none' : 'flex')

  if (admin.length) {
    if (!hasAdminRequirement()) return <div>Not authorized!</div>
  }

  return (
    <div className={className} style={style}>
      {children}
    </div>
  )

  function hasAdminRequirement() {
    let authorized = false

    admin.forEach((typeNeeded) => {
      if (user.roles?.admin?.includes(typeNeeded)) authorized = true
    })

    return authorized
  }
}
