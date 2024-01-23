import { CSSProperties, FormEvent } from 'react'

type FormProps = {
  children?: any
  className?: string
  classNames?: {
    form?: string
  }
  style?: CSSProperties
  styles?: {
    form?: CSSProperties
  }
  disabled?: boolean
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void
}

export default function Form({
  children,
  className,
  classNames,
  style,
  styles,
  disabled,
  onSubmit = () => {},
}: FormProps) {
  return (
    <div className={className}>
      <form
        className={classNames?.form}
        style={{
          ...styles?.form,
          opacity: disabled ? 0.3 : styles?.form?.opacity,
          position: 'relative',
        }}
        onSubmit={(e) => {
          e.preventDefault()
          onSubmit(e)
        }}
      >
        {disabled && (
          <div
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              zIndex: 50,
            }}
          />
        )}
        {children}
      </form>
    </div>
  )
}
