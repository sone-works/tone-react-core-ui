import { CSSProperties } from 'react'

type TextareaProps = {
  name?: string
  label?: string
  value?: string
  setValue?: (value: string) => void
  isDisabled?: boolean
  className?: string
  classNames?: {
    wrapper?: string
    label?: string
    textarea?: string
  }
  style?: CSSProperties
  styles?: {
    wrapper?: CSSProperties
    label?: CSSProperties
    textarea?: CSSProperties
  }
  styleNamespace?: string
  placeholder?: string
}

export default function Textarea({
  name,
  label,
  value,
  setValue = () => {},
  className,
  classNames,
  style,
  styles,
  styleNamespace = 'global',
  isDisabled,
  placeholder,
}: TextareaProps) {
  return (
    <div className={'group' + className && ' ' + className} style={style}>
      <div
        className={
          classNames?.wrapper ||
          `rounded-xl px-2 py-1 border-2 bg-${styleNamespace} text-${styleNamespace} border-${styleNamespace}`
        }
        style={{
          opacity: isDisabled ? 0.5 : 1,
          ...styles?.wrapper,
        }}
      >
        {label && (
          <label
            className={classNames?.label || 'font-header text-sm'}
            style={styles?.label}
          >
            {label}
          </label>
        )}
        <textarea
          name={name}
          className={
            classNames?.textarea ||
            `w-full bg-transparent outline-none font-content resize-none scrollbar-none placeholder:opacity-30 placeholder:text-${styleNamespace}`
          }
          style={styles?.textarea}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={isDisabled}
          placeholder={placeholder}
        />
      </div>
    </div>
  )
}
