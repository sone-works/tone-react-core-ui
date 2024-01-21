import { isAAContrast } from 'accessible-colors'
import { useEffect, useState } from 'react'
import ColorPicker from './ColorPicker'

type TonePickerProps = {
  children?: any
  tone?: [string, string]
  setTone?: (tone: [string, string]) => void
}

export default function TonePicker({
  children,
  tone = ['#000000', '#FFFFFF'],
  setTone = () => {},
}: TonePickerProps) {
  const [isValidContrast, setValidContrast] = useState<boolean>(false)

  const [colors, setColors] = useState<[string, string]>(tone)

  useEffect(() => {
    if (isAAContrast(colors[0], colors[1], true)) {
      setTone(colors)

      setValidContrast(true)
    } else setValidContrast(false)
  }, [colors])

  return (
    <div>
      <h3 className="font-header text-2xl mb-2">Tone</h3>
      {children}
      <p className="text-global text-sm font-content my-4">
        <i className="fa-fw fa-solid fa-circle-info mr-1" />
        Clicking the colored circle next to the hex code will bring up a color
        picker.
      </p>
      <ColorPicker
        value={colors[0]}
        setValue={(value: string) => setColors([value, colors[1]])}
        className="my-2"
      />
      <ColorPicker
        value={colors[1]}
        setValue={(value: string) => setColors([colors[0], value])}
      />
      {!isValidContrast && (
        <div className="flex items-center my-2 p-1 bg-global-flipped text-global-flipped text-sm font-header">
          <i className="fa-fw fa-solid fa-exclamation mr-2 text-2xl" />
          The colors you've picked fall outside of what's considered an
          accessible contrast. Please choose another combination.
        </div>
      )}
    </div>
  )
}
