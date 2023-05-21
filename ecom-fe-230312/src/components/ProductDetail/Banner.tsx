import { Image } from '@mantine/core';

interface BannerProps {
  imgUrl: string | null;
}

const Banner = ({ imgUrl }: BannerProps) => {
  return <Image src={imgUrl} mih={200} maw="100%" mx="auto" withPlaceholder />;
};

export default Banner;
