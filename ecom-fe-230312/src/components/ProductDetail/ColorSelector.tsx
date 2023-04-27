import { Radio } from "@mantine/core"
import { useState } from "react"

interface ColorSelectorProps {
  options: { value: string; label: string; }[],
}

const ColorSelector = ({ options } : ColorSelectorProps) => {
  const [value, setValue] = useState('');

  return (
    <Radio.Group
      value={value}
      onChange={setValue}
    >
      {options.map((color) => {
        return <Radio value={color['value']} label={color['label']} />;
      })}
    </Radio.Group>
  )
}



export default ColorSelector