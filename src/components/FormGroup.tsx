import { CSSProperties } from 'react'

type FormGroupProps = {
  children?: any
  label?: string
  className?: string
  classNames?: {
    wrapper?: string
    label?: string
  }
  style?: CSSProperties
  styles?: {
    wrapper?: CSSProperties
    label?: CSSProperties
  }
  styleNamespace?: string
}

export default function FormGroup({
  children,
  label,
  className,
  classNames,
  style,
  styles,
  styleNamespace = 'global',
}: FormGroupProps) {
  return (
    <div className={className} style={style}>
      <div
        className={
          classNames?.wrapper ||
          `flex flex-col items-start border-2 border-${styleNamespace} p-2 rounded-xl`
        }
        style={styles?.wrapper}
      >
        {label && (
          <label
            className={
              classNames?.label || `font-header text-${styleNamespace} text-sm`
            }
            style={styles?.label}
          >
            {label}
          </label>
        )}
        {children}
      </div>
    </div>
  )
}
