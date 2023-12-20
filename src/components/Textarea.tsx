import { CSSProperties } from 'react'

type TextareaProps = {
  name?: string
  label?: string
  value?: string
  setValue?: Function
  isDisabled?: boolean
  className?: string
  style?: CSSProperties
}

export default function Textarea({
  name,
  label,
  value,
  setValue = () => {},
  isDisabled,
  className,
  style,
}: TextareaProps) {
  return (
    <div className={'group' + className && ' ' + className} style={style}>
      <div className="bg-global-flipped rounded-xl px-2 py-1 border-global-flipped border-2">
        {label && (
          <span className="text-global-flipped font-header text-sm">
            {label}
          </span>
        )}
        <textarea
          name={name}
          className="w-full text-global-flipped bg-transparent outline-none font-content resize-none"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={isDisabled}
        />
      </div>
    </div>
  )
}
