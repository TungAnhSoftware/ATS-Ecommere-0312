import { Anchor, Card, Image, Title } from "@mantine/core";

interface VerticalCardProps {
  title: string,
  desc: string,
  link: string,
  text: string,
  imgUrl: string | null,
}

const VerticalCard = ({ title, desc, link, text, imgUrl }: VerticalCardProps) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Title>{desc}</Title>
      <Anchor href={link} target="_blank">{text}</Anchor>
      <Image src={imgUrl} withPlaceholder />
    </Card>
  );
};

export default VerticalCard;
