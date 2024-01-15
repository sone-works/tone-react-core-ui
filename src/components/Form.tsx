import { CSSProperties, FormEvent } from 'react'

type FormProps = {
  children?: any
  className?: string
  style?: CSSProperties
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void
}

export default function Form({
  children,
  className,
  style,
  onSubmit = () => {},
}: FormProps) {
  return (
    <form
      className={className}
      style={style}
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit(e)
      }}
    >
      {children}
    </form>
  )
}
