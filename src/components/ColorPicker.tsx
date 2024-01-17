import { CSSProperties, useRef } from 'react'

type ColorPickerProps = {
  className?: string
  classNames?: {
    wrapper?: string
    input?: string
  }
  style?: CSSProperties
  styles?: {
    wrapper?: CSSProperties
    input?: CSSProperties
  }
  styleNamespace?: string
  name?: string
  defaultColor?: string
  value?: string
  setValue?: (color: string) => any
}

export default function ColorPicker({
  className,
  classNames,
  style,
  styles,
  styleNamespace,
  name,
  value,
  setValue = () => {},
}: ColorPickerProps) {
  const colorPickerElement = useRef<HTMLInputElement>(null)

  const namespaceColors = {
    darker: `var(--${styleNamespace}-darker)`,
    lighter: `var(--${styleNamespace}-lighter)`,
  }

  const colors = {
    ...namespaceColors,
    background: namespaceColors.lighter,
    text: namespaceColors.darker,
    border: namespaceColors.darker,
  }

  return (
    <div className={className} style={style}>
      <div
        className={
          classNames?.wrapper || 'flex items-center border-2 rounded-xl w-full'
        }
        style={
          styles?.wrapper || {
            backgroundColor: colors.background,
            borderColor: colors.darker,
            color: colors.text,
          }
        }
      >
        <div
          className="flex items-center rounded-l-xl cursor-pointer p-2"
          onClick={() => colorPickerElement.current?.click()}
          style={{ borderColor: colors.darker }}
        >
          <div
            className="flex items-center rounded-full cursor-pointer border-2"
            style={{
              borderColor: colors.darker,
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
            'w-full bg-transparent outline-none font-content px-2 py-1'
          }
          style={styles?.input}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  )
}
