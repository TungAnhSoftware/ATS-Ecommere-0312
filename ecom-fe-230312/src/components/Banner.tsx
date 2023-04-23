import { Image } from "@mantine/core"

interface BannerProps {
  imgUrl: string,
}

const Banner = ({ imgUrl }: BannerProps) => {
  return (
    <center>
      <Image src={imgUrl} mih={200} maw="100%" mx='auto' withPlaceholder />
    </center>
  )
}

export default Banner