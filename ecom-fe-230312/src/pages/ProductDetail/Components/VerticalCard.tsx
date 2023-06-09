import { Image, Space, Text } from "@mantine/core";
import CenterCard from "./CenterCard";
import ChevronLink from "./ChevronLink";

interface VerticalCardProps {
    title: string,
    subtitle: string | null,
    link: string,
    linkDesc: string,
    imgUrl: string | null,
}

const VerticalCard = ({ title, subtitle, link, linkDesc, imgUrl }: VerticalCardProps) => {
    return (
        <CenterCard maw={350} h={500}>
            <Text align="center" weight='bold' fz='xl' sx={{ lineHeight: '1.1', whiteSpace: 'pre-line' }}>{title}</Text>
            <Space h='sm' />
            <Text align="center" fz='lg' style={{ lineHeight: '1.1' }}>{subtitle}</Text>
            <Space h='sm' />
            <ChevronLink link={link} text={linkDesc} />
            <Image src={imgUrl} width={250} height={300} withPlaceholder />
        </CenterCard>
    );
};

export default VerticalCard;