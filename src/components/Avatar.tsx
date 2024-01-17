import { CSSProperties, useState } from 'react'

type AvatarProps = {
  className?: string
  classNames?: {
    img?: string
  }
  style?: CSSProperties
  styles?: {
    img?: CSSProperties
  }
  fallback?: any
  src?: string
  onClick?: Function
}

export default function Avatar({
  className,
  classNames,
  style,
  styles,
  fallback,
  src,
  onClick = () => {},
}: AvatarProps) {
  const [srcError, setSrcError] = useState<boolean>(false)

  return (
    <div className={className} style={style} onClick={() => onClick()}>
      {!src || srcError ? (
        fallback
      ) : (
        <img
          src={src}
          className={classNames?.img || 'm-width-full h-auto'}
          style={styles?.img}
          onError={() => setSrcError(true)}
        />
      )}
    </div>
  )
}
