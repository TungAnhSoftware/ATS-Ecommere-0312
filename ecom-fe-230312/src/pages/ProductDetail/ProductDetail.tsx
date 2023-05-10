import { Card, Container, Group, Image, Space, Stack, Text, Title } from "@mantine/core"
import Banner from "../../components/ProductDetail/Banner"
import ColorSelector from "../../components/ProductDetail/ColorSelector"
import DynamicButton from "../../components/ProductDetail/DynamicButton"
import Header from "../../components/ProductDetail/Header"
import bannerImage from '../../components/image/apple-banner.png'
import bigImage from '../../components/image/big-bigger.jpg'

const ProductDetail = () => {
  const handleBuyItem = () => {
    console.log("Buy now");
  }

  const phoneColors = [
    {
      id: 'midnight',
      label: 'Midnight',
      color: 'black'
    },
    {
      id: 'starlight',
      label: 'Starlight',
      color: 'grey'
    },
    {
      id: 'red',
      label: 'Red',
      color: 'red'
    },
    {
      id: 'blue',
      label: 'Blue',
      color: 'blue'
    },
    {
      id: 'purple',
      label: 'Purple',
      color: 'purple'
    },
    {
      id: 'yellow',
      label: 'Yellow',
      color: 'yellow'
    },
  ];

  return (
    <>
      <Group position="apart">
        <Header title="Wonderfull." />
        <ColorSelector colors={phoneColors} />
      </Group>

      <center>
        <Banner imgUrl={bannerImage} />
        <Space h='sm' />
        <Title order={2}>iPhone 14 and iPhone 14 Plus</Title>
        <Text fz='lg'>From $799 or $33.29/mo. for 24 mo. before trade‑in*</Text>
        <DynamicButton title="Buy" onClick={handleBuyItem} />
      </center>

      <Space h='xl' />

      <Group position="center">
        <Card shadow="sm" padding='lg' radius='xl' withBorder>
          <Text align="center" fw={500} size={28}>Big and Bigger.</Text>
          <Image src={bigImage} height={350} />
          <Space h='sm' />
          <Group position="center">
            <Stack spacing={0} align="center" justify="center">
              <Text size='lg' fw={500} color="dimmed">iPhone 14</Text>
              <Text size={25} fw={700}>6.1″</Text>
            </Stack>
            <Stack spacing={0} align="center" justify="center">
              <Text size='lg' fw={500} color="dimmed">iPhone 14 Plus</Text>
              <Text size={25} fw={700}>6.7″</Text>
            </Stack>
          </Group>
        </Card>
        <Card shadow="sm" padding='lg' radius='xl' withBorder>
          <Text align="center" fw={500} fz='ms' color="dimmed">iPhone 14 Plus</Text>
          <Text
            align="center" fw={500} fz='xl'
            variant="gradient" gradient={{ from: 'green', to: 'darkgreen', deg: 45 }}
          >
            The looongest battery life of any iPhone. Ever.
          </Text>
        </Card>
      </Group>
    </>
  )
}

export default ProductDetail