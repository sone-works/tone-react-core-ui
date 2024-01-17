import { CSSProperties, FormEvent } from 'react'

type FormProps = {
  children?: any
  className?: string
  classNames?: {
    form?: string
  }
  style?: CSSProperties
  styles?: {}
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void
}

export default function Form({
  children,
  className,
  classNames,
  style,
  styles,
  onSubmit = () => {},
}: FormProps) {
  return (
    <div className={className}>
      <form
        className={classNames?.form}
        style={style}
        onSubmit={(e) => {
          e.preventDefault()
          onSubmit(e)
        }}
      >
        {children}
      </form>
    </div>
  )
}
