import { Tabs as NextUITabs } from '@nextui-org/react'
import { ReactNode } from 'react'

type TabsProps = {
  children?: ReactNode
  label?: string
}

export default function Tabs({ children, label }: TabsProps) {
  return <NextUITabs aria-label={label}>{children}</NextUITabs>
}
