import { CSSProperties } from 'react'

type ChipProps = {
  children?: any
  variant?: 'solid' | 'outlined'
  className?: string
  classNames?: {
    wrapper?: string
    endContent?: string
  }
  style?: CSSProperties
  styles?: {
    wrapper?: CSSProperties
    endContent?: CSSProperties
  }
  styleNamespace?: string
  endContent?: any
  onClick?: Function
}

export default function Chip({
  children,
  variant = 'solid',
  className,
  classNames,
  style,
  styles,
  styleNamespace = 'global',
  endContent,
  onClick = () => {},
}: ChipProps) {
  const variantStyling = () => {
    switch (variant) {
      case 'solid':
        return `bg-${styleNamespace}-flipped text-${styleNamespace}-flipped`
      case 'outlined':
        return `bg-${styleNamespace} text-${styleNamespace}`
    }
  }

  return (
    <div className={className} style={style}>
      <div
        className={
          classNames?.wrapper ||
          `inline-flex justify-center items-center p-1 font-release border-2 rounded-xl border-${styleNamespace}-flipped ${variantStyling()}`
        }
        style={styles?.wrapper}
        onClick={() => onClick()}
      >
        {children}
        {endContent && (
          <div className={classNames?.endContent} style={styles?.endContent}>
            {endContent}
          </div>
        )}
      </div>
    </div>
  )
}
