import { Button as NextUIButton } from '@nextui-org/react'
import { CSSProperties, ReactNode } from 'react'

type ButtonProps = {
  children?: ReactNode
  className?: string
  additionalClasses?: string
  style?: CSSProperties
  isLoading?: boolean
  isSubmit?: boolean
  onClick?: Function
}

export default function Button({
  children,
  isLoading,
  className,
  additionalClasses,
  style,
  isSubmit,
  onClick = () => {},
}: ButtonProps) {
  const buttonClasses = 'font-header rounded-[20px] text-2xl'

  return (
    <NextUIButton
      size="lg"
      isLoading={isLoading}
      className={
        className ||
        buttonClasses + (additionalClasses && ' ' + additionalClasses)
      }
      style={style}
      type={isSubmit ? 'submit' : 'button'}
      onClick={(e) => onClick(e)}
    >
      {children}
    </NextUIButton>
  )
}
