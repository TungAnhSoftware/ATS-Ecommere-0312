import { Button, rem, Tooltip } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import { IconCopy, IconCheck } from '@tabler/icons-react';

interface CopyButtonProps {
  data: string;
}

/**
 * This is a button to copy data to clipboard.
 * @param {string} data - Data to be copied.
 */
const CopyButton = ({ data }: CopyButtonProps) => {
  const clipboard = useClipboard();
  return (
    <Tooltip
      label="Link copied!"
      offset={5}
      position="bottom"
      radius="xl"
      transitionProps={{ duration: 100, transition: 'slide-down' }}
      opened={clipboard.copied}
    >
      <Button
        variant="light"
        rightIcon={
          clipboard.copied ? (
            <IconCheck size="1.2rem" stroke={1.5} />
          ) : (
            <IconCopy size="1.2rem" stroke={1.5} />
          )
        }
        radius="xl"
        size="md"
        styles={{
          root: { paddingRight: rem(14), height: rem(48) },
          rightIcon: { marginLeft: rem(22) }
        }}
        onClick={() => clipboard.copy(data)}
      >
        Copy link to clipboard
      </Button>
    </Tooltip>
  );
};
export default CopyButton;
