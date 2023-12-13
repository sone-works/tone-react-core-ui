import { Chip as NextUIChip } from '@nextui-org/react'
import { ReactNode } from 'react'

type ChipProps = {
  children?: ReactNode
  className?: string
  variant?: any
  size?: 'sm' | 'md' | 'lg'
  onClick?: Function
}

export default function Chip({
  children,
  className,
  variant,
  size,
  onClick = () => {},
}: ChipProps) {
  return (
    <NextUIChip
      className={className}
      variant={variant}
      radius="lg"
      size={size}
      classNames={{ base: 'font-header selection:none' }}
      onClick={(e) => onClick(e)}
    >
      {children}
    </NextUIChip>
  )
}
