import { Tab as NextUITab } from '@nextui-org/react'
import { ReactNode } from 'react'

type TabProps = {
  children?: ReactNode
  key?: string
  title?: string
}

export default function Tab({ children, key, title }: TabProps) {
  return (
    <NextUITab key={key} title={title}>
      {children}
    </NextUITab>
  )
}
