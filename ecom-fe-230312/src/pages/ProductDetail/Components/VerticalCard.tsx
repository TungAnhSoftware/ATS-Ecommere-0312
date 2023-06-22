import { Anchor, Card, Image, Stack, Title } from "@mantine/core";
import CenterCard from "./CenterCard";

interface VerticalCardProps {
  title: string,
  desc: string,
  link: string,
  text: string,
  imgUrl: string | null,
}

const VerticalCard = ({ title, desc, link, text, imgUrl }: VerticalCardProps) => {
  return (
    <CenterCard w={350} h={500}>
      <Stack align="center">
        <Title align="center" fw={700} fz='xl' style={{ whiteSpace: 'pre-wrap' }}>{title}</Title>
        <Title align="center" fw={300} fz='lg'>{desc}</Title>
        <Anchor align="center" href={link} target="_blank" >{text}</Anchor>
        <Image src={imgUrl} withPlaceholder />
      </Stack>
    </CenterCard>
  );
};

export default VerticalCard;
