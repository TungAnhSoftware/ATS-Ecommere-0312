import { Group, Radio, Text } from '@mantine/core';
import { useState } from 'react';

interface ColorSelectorProps {
  colors: { id: string; label: string; color: string }[];
}

const ColorSelector = ({ colors }: ColorSelectorProps) => {
  const [selectedValue, setValue] = useState(colors[0]?.id);

  return (
    <Group mt="sm">
      <Text fw={500}>{selectedValue}</Text>
      <Radio.Group value={selectedValue} onChange={setValue}>
        <Group>
          {colors.map((color) => {
            return (
              <Radio
                key={color.id}
                value={color.id}
                style={{ backgroundColor: color.color }}
              />
            );
          })}
        </Group>
      </Radio.Group>
    </Group>
  );
};

export default ColorSelector;
