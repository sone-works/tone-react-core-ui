import { CSSProperties, Children, ReactNode } from 'react'

type CarouselProps = {
  children?: ReactNode
  current?: number
  className?: string
  style?: CSSProperties
}

export default function Carousel({
  children,
  current = 0,
  className,
  style,
}: CarouselProps) {
  const carouselItems = Children.toArray(children)

  return (
    <div className={className} style={style}>
      {carouselItems[current]}
    </div>
  )
}
