import { Button } from "@mantine/core";

interface ButtonProps {
  title: string,
  onClick: any,
}

const DynamicButton = ({ title, onClick }: ButtonProps) => {
  return (
    <Button onClick={onClick}
      radius='xl'
      size="sm"
      style={{
        cursor: "pointer",
      }}
    >{title}</Button>
  );
};

export default DynamicButton;