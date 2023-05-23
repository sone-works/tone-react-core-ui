'use client'

import { useUserData } from '@sone-dao/tone-react-user-controller'
import React from 'react'

interface IPageProps {
  children?: React.ReactNode
  admin?: string[]
  style?: React.CSSProperties
  className?: string
  //authLogic?: Function
}

const defaultPageStyle: React.CSSProperties = {
  padding: '1em',
}

export default function Page({
  children,
  admin = [],
  style = defaultPageStyle,
  className,
}: IPageProps) {
  const { user } = useUserData()

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
