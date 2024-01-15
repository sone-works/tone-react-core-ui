import { useRef } from 'react'

type ColorPickerProps = {
  className?: string
  classNames?: {
    wrapper?: string
    input?: string
  }
  name?: string
  defaultColor?: string
  value?: string
  setValue?: (color: string) => any
}

export default function ColorPicker({
  className,
  classNames,
  name,
  value,
  setValue = () => {},
}: ColorPickerProps) {
  const colorPickerElement = useRef<HTMLInputElement>(null)
  return (
    <div className={className}>
      <div
        className={
          classNames?.wrapper ||
          'flex items-center border-2 border-global-flipped rounded-xl w-full'
        }
      >
        <div
          className="flex items-center rounded-l-xl cursor-pointer border-global-flipped p-2"
          onClick={() => colorPickerElement.current?.click()}
        >
          <div
            className="flex items-center rounded-full cursor-pointer border-2 border-global-flipped"
            style={{
              backgroundColor: value,
              height: '2rem',
              width: '2rem',
            }}
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
        </div>
        <input
          className={
            classNames?.input ||
            'w-full text-global-flipped bg-transparent outline-none font-content px-2 py-1'
          }
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  )
}
