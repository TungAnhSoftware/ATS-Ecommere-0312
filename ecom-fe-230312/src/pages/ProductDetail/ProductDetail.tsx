import { Container, Group, Image, Space, Text, Title } from "@mantine/core"
import Banner from "../../components/ProductDetail/Banner"
import DynamicButton from "../../components/ProductDetail/DynamicButton"
import Header from "../../components/ProductDetail/Header"
import bannerImage from '../../components/image/apple-banner.png'
import bigImage from '../../components/image/big-bigger.jpg'
import ColorSelector from "../../components/ProductDetail/ColorSelector"

const ProductDetail = () => {
  const handleBuyItem = () => {
    console.log("Buy now");
  }

  const phoneColors = [
    {
      value: 'midnight',
      label: 'Midnight'
    },
    {
      value: 'starlight',
      label: 'Starlight'
    },
    {
      value: 'red',
      label: 'Red'
    },
    {
      value: 'blue',
      label: 'Blue'
    },
    {
      value: 'purple',
      label: 'Purple'
    },
    {
      value: 'yellow',
      label: 'Yellow'
    },
  ];

  return (
    <>
      <Group>
        <Header title="Wonderfull." />
        <ColorSelector options={phoneColors} />
      </Group>
      <center>
        <Banner imgUrl={bannerImage} />
        <Space h='sm' />
        <Title order={2}>iPhone 14 and iPhone 14 Plus</Title>
        <Text fz='lg'>From $799 or $33.29/mo. for 24 mo. before trade‑in*</Text>
        <DynamicButton title="Buy" onClick={handleBuyItem} />
      </center>
      <Space h='xl' />
      <Container size='xl'>
        <Header title="Big and bigger." />
        <Image src={bigImage} fit="fill" maw={680} />
      </Container>
    </>
  )
}

export default ProductDetail