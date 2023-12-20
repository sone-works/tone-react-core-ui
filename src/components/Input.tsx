type InputProps = {
  value?: string
  setValue?: Function
  className?: string
  label?: string
  name?: string
  startContent?: any
  isDisabled?: boolean
}

export default function Input({
  value,
  setValue = () => {},
  className,
  label,
  name,
  startContent,
  isDisabled,
}: InputProps) {
  return (
    <div className={'group' + className && ' ' + className}>
      <div
        className="bg-global-flipped rounded-xl px-2 py-1 border-global-flipped border-2"
        style={{ opacity: isDisabled ? 0.5 : 1 }}
      >
        {label && (
          <span className="text-global-flipped font-header text-sm">
            {label}
          </span>
        )}
        <div className="flex items-center w-full">
          {startContent && <div className="p-1">{startContent}</div>}
          <input
            className="w-full text-global-flipped bg-transparent outline-none font-content"
            value={value}
            name={name}
            onChange={(e) => setValue(e.target.value)}
            disabled={isDisabled}
          />
        </div>
      </div>
    </div>
  )
}
