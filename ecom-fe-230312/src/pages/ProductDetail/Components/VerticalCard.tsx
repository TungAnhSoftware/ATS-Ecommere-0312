import { Anchor, Image, Stack, Title } from "@mantine/core";
import CenterCard from "./CenterCard";

interface VerticalCardProps {
  title: string,
  subtitle: string,
  link: string,
  linkDesc: string,
  imgUrl: string | null,
}

const VerticalCard = ({ title, subtitle, link, linkDesc, imgUrl }: VerticalCardProps) => {
  return (
    <CenterCard w={350} h={500}>
      <Stack align="center">
        <Title align="center" fw={700} fz='xl' style={{ lineHeight: '1.1', whiteSpace: 'pre-wrap' }}>{title}</Title>
        <Title align="center" fw={300} fz='md' style={{ lineHeight: '1.1' }}>{subtitle}</Title>
        <Anchor align="center" href={link} target="_blank" >{linkDesc} &gt;</Anchor>
        <Image src={imgUrl} withPlaceholder />
      </Stack>
    </CenterCard>
  );
};

export default VerticalCard;
