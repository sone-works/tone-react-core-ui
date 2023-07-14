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
    console.log('checking privs...')
    const result = await api.users.self()
    const userPrivs: string[] = result.user.privs

    console.log({ result, userPrivs })

    userPrivs.map((priv) => {
      console.log(`checking ${priv}...`)

      if (privs.includes(priv)) {
        console.log('match!!')
        setAuthorized(true)
      }
    })
  }
}
