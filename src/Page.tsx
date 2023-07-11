'use client'

import { useUserData } from '@sone-dao/tone-react-user-controller'
import React, { useEffect, useState } from 'react'
import styles from './Page.module.scss'

interface IPageProps {
  children?: React.ReactNode
  admin?: string[]
  style?: React.CSSProperties
  className?: string
  //authLogic?: Function
}

export default function Page({
  children,
  admin = [],
  style = {},
  className = styles.page,
}: IPageProps) {
  const [authorized, setAuthorized] = useState<boolean>(false)

  const { user } = useUserData()

  useEffect(() => {
    admin.length && !hasAdminRequirement() && setAuthorized(false)
  }, [])

  return authorized ? (
    <div className={className} style={style}>
      {children}
    </div>
  ) : (
    <div>Not authorized!</div>
  )

  function hasAdminRequirement() {
    let authorized = false

    admin.forEach((typeNeeded) => {
      if (user.roles?.admin?.includes(typeNeeded)) authorized = true
    })

    return authorized
  }
}
