import { CSSProperties } from 'react'

export type FileSelectProps = {
  name?: string
  label?: string
  className?: string
  classNames?: {
    wrapper?: string
    label?: string
    input?: string
  }
  style?: CSSProperties
  styles?: {
    wrapper?: CSSProperties
    label?: CSSProperties
    input?: CSSProperties
  }
  styleNamespace?: string
  placeholder?: string
  isDisabled?: boolean
  setValue?: (file: File) => void
}

export default function FileSelect({
  name,
  label,
  className,
  classNames,
  style,
  styles,
  styleNamespace = 'global',
  placeholder,
  isDisabled,
  setValue = () => {},
}: FileSelectProps) {
  return (
    <div className={className} style={style}>
      <div
        className={
          classNames?.wrapper ||
          `flex flex-col rounded-xl px-2 py-1 border-2 bg-${styleNamespace} text-${styleNamespace} border-${styleNamespace}`
        }
        style={styles?.wrapper}
      >
        {label && (
          <label
            className={classNames?.label || 'font-header text-sm'}
            style={styles?.label}
            htmlFor={name}
          >
            {label}
          </label>
        )}
        <input
          type="file"
          name={name}
          className={
            classNames?.input ||
            `cursor-pointer text-global-flipped font-content file:rounded-xl file:border-solid file:border-2 file:border-global file:bg-global-flipped file:text-global-flipped file:text-xs file:font-content file:mr-2 placeholder:text-${styleNamespace}`
          }
          placeholder={placeholder}
          disabled={isDisabled}
          onChange={(e) => setValue(e.target.files![0])}
        />
      </div>
    </div>
  )
}
