import { Avatar as NextUIAvatar } from '@nextui-org/react'

type AvatarProps = {
  className?: string
  fallback?: any
  src?: string
  onClick?: Function
}

export default function Avatar({
  className,
  fallback,
  src,
  onClick = () => {},
}: AvatarProps) {
  return (
    <NextUIAvatar
      className={className}
      showFallback={fallback ? true : false}
      fallback={fallback}
      src={src}
      onClick={(e) => onClick(e)}
    />
  )
}
