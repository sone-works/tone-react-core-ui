export type FileSelectProps = {
  name?: string
  label?: string
  className?: string
  classNames?: {
    label?: string
    input?: string
  }
  placeholder?: string
  isDisabled?: boolean
  setValue?: (file: File) => void
}

export default function FileSelect({
  name,
  label,
  className,
  classNames,
  placeholder,
  isDisabled,
  setValue = () => {},
}: FileSelectProps) {
  return (
    <div className={className}>
      <div
        className="flex flex-col bg-global-flipped rounded-xl px-2 py-1 border-global-flipped border-2"
        style={{ opacity: isDisabled ? 0.5 : 1 }}
      >
        {label && (
          <span
            className={
              classNames?.label || 'text-global-flipped font-header text-sm'
            }
          >
            {label}
          </span>
        )}
        <input
          type="file"
          name={name}
          className={
            classNames?.input ||
            'cursor-pointer text-global-flipped font-content file:rounded-xl file:border-solid file:border-2 file:border-global-flipped file:bg-global-flipped file:text-global-flipped file:text-xs file:font-content file:mr-2'
          }
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.files![0])}
        />
      </div>
    </div>
  )
}
