import { useRef } from 'react'

type ColorPickerProps = {
  className?: string
  name?: string
  defaultColor?: string
  value?: string
  setValue?: (color: string) => any
}

export default function ColorPicker({
  className,
  name,
  value,
  setValue = () => {},
}: ColorPickerProps) {
  const colorPickerElement = useRef<HTMLInputElement>(null)
  return (
    <div className={className}>
      <div className="flex items-center border-2 border-global-flipped rounded-xl w-full">
        <div
          className="flex items-center rounded-l-xl cursor-pointer mr-1 border-r-2 border-global-flipped"
          style={{
            backgroundColor: value,
            height: '3rem',
            width: '3rem',
          }}
          onClick={() => colorPickerElement.current?.click()}
        >
          <input
            className="opacity-0"
            type="color"
            name={name}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            ref={colorPickerElement}
            style={{ height: 0, width: 0 }}
          />
        </div>
        <input
          className="w-full text-global-flipped bg-transparent outline-none font-content px-2 py-1"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  )
}
