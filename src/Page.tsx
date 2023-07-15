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
    //Check for tokens & stuff when user first drops onto page here

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
    const result = await api.users.self()
    const userPrivs: string[] = result.user.privs

    userPrivs.map((priv) => privs.includes(priv) && setAuthorized(true))
  }
}
