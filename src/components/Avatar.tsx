import { useState } from 'react'

type AvatarProps = {
  className?: string
  classNames?: {
    img?: string
  }
  fallback?: any
  src?: string
  onClick?: Function
}

export default function Avatar({
  className,
  classNames,
  fallback,
  src,
  onClick = () => {},
}: AvatarProps) {
  const [srcError, setSrcError] = useState<boolean>(false)

  return (
    <div className={className} onClick={() => onClick()}>
      {srcError ? (
        fallback
      ) : (
        <img
          src={src}
          className={classNames?.img || 'm-width-full h-auto'}
          onError={() => setSrcError(true)}
        />
      )}
    </div>
  )
}
