import { ReactNode } from 'react'

type ButtonProps = {
  children?: ReactNode
  className?: string
  onClick?: Function
  isDisabled?: boolean
}

export default function Button({
  children,
  className,
  onClick = () => {},
  isDisabled,
}: ButtonProps) {
  return (
    <div className={className}>
      <button
        className="flex items-center justify-center w-full p-1 bg-global text-global rounded-xl font-content text-lg"
        onClick={(e) => onClick(e)}
        disabled={isDisabled}
        style={{ opacity: !isDisabled ? 1 : 0.5 }}
      >
        <div className="border-2 border-global p-2 rounded-xl w-full">
          {children}
        </div>
      </button>
    </div>
  )
}
