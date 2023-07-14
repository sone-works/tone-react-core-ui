'use client'

import useToneApi from '@sone-dao/tone-react-api'
import React, { useEffect, useState } from 'react'
import styles from './Page.module.scss'

interface IPageProps {
  children?: React.ReactNode
  privs?: string[]
  style?: React.CSSProperties
  className?: string
}

export default function Page({
  children,
  privs = [],
  style = {},
  className = styles.page,
}: IPageProps) {
  const [isAuthorized, setAuthorized] = useState<boolean>(false)

  const api = useToneApi()

  useEffect(() => {
    privs.length ? checkUserPrivs(privs) : setAuthorized(true)
  }, [])

  return isAuthorized ? (
    <div className={className} style={style}>
      {children}
    </div>
  ) : (
    <div />
  )

  async function checkUserPrivs(privs: string[]) {
    console.log('check privs...')
    let authorized = false

    const result = await api.users.self()

    console.log(result)

    const userPrivs: string[] = result.user.privs

    userPrivs.forEach((priv) => {
      if (privs.includes(priv)) authorized = true
    })

    authorized && setAuthorized(true)
  }
}
