import { CSSProperties, ReactNode } from 'react'

type PageProps = {
  children?: ReactNode
  isLoading?: boolean
  isAuthorized?: boolean
  additionalClasses?: string
  style?: CSSProperties
}

export default function Page({
  children,
  isLoading = false,
  isAuthorized = true,
  additionalClasses,
  style,
}: PageProps) {
  /*if (isLoading)
    return (
      <div className="h-full w-full" style={style}>
          <i className="fa-fw fa-pulse fa-sharp fa-solid fa-music-note" />
      </div>
    )*/

  /*if (!isAuthorized)
    return (
      <div className="h-full w-full p-4" style={style}>
        <div>
          <i className="fa-fw fa-sharp fa-light fa-face-dotted" />
          <p>
            Well this is a little awkward, but you're not allowed to be here...
          </p>
        </div>
      </div>
    )*/

  return (
    <div
      className={'flex flex-col h-full p-4 w-full' + additionalClasses}
      style={style}
    >
      {children}
    </div>
  )
}
