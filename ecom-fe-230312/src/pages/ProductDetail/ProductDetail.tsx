import { AspectRatio, BackgroundImage, Card, Container, Group, Image, Space, Stack, Text, Title } from "@mantine/core"
import Banner from "../../components/ProductDetail/Banner"
import ColorSelector from "../../components/ProductDetail/ColorSelector"
import DynamicButton from "../../components/ProductDetail/DynamicButton"
import Header from "../../components/ProductDetail/Header"
import bannerImage from '../../components/image/apple-banner.png'
import bigImage from '../../components/image/big-bigger.jpg'

const ProductDetail = () => {
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

  const handleBuyItem = () => {
    console.log("Buy now");
  }

  return (
    <>
      <Group position="apart">
        <Header title="Wonderfull." />
        <ColorSelector colors={phoneColors} />
      </Group>

      <center>
        <Banner imgUrl={null} />
        <Space h='sm' />
        <Title order={2}>iPhone 14 and iPhone 14 Plus</Title>
        <Text fz='lg'>From $799 or $33.29/mo. for 24 mo. before trade‑in*</Text>
        <DynamicButton title="Buy" onClick={handleBuyItem} />
      </center>

      <Space h='xl' />

      <Group position="center">
        <Card shadow="sm" padding='lg' radius='xl' withBorder>
          <Text align="center" fw={500} size={28}>Big and Bigger.</Text>
          <Image src={null} width={300} height={400} withPlaceholder />

          <Space h='sm' />

          <Group position="center">
            <Stack spacing={0} align="center">
              <Text size='lg' fw={500} color="dimmed">iPhone 14</Text>
              <Text size={25} fw={700}>6.1″</Text>
            </Stack>
            <Stack spacing={0} align="center">
              <Text size='lg' fw={500} color="dimmed">iPhone 14 Plus</Text>
              <Text size={25} fw={700}>6.7″</Text>
            </Stack>
          </Group>
        </Card>
        <Stack>
          <Card shadow="sm" padding='lg' radius='xl' withBorder>
            <Text align="center" fw={500} fz='lg' color="dimmed">iPhone 14 Plus</Text>
            <Text
              align="center" fw={500} fz='xl'
              variant="gradient" gradient={{ from: 'green', to: 'darkgreen', deg: 45 }}
            >
              The looongest battery life of any iPhone. Ever.
            </Text>
          </Card>
          <Card shadow="sm" padding='lg' radius='xl' withBorder>
            <Stack spacing={0} align="center">
              <Image src={null} width={150} height={150} withPlaceholder />
              <Text fw={500} fz='lg' color="dimmed">Ceramic Shield</Text>
              <Text fw={500} fz='xl'>Tougher than any smartphone glass.</Text>
            </Stack>
          </Card>
        </Stack>
      </Group>

      <Space h='sm' />

      <Group position="center">
        <Card shadow="sm" padding='lg' radius='xl' withBorder>
          <Text fw={700} fz='xl' variant="gradient" gradient={{ from: 'purple', to: 'pink', deg: 45 }}>Water resistance.</Text>
          <Text align="center">(Phew.)</Text>
        </Card>
        <Card shadow="sm" padding='lg' radius='xl' withBorder>
          <Text fw={500} fz='lg' color="dimmed" align="center">Action mode</Text>
          <Text fw={500} fz='xl' color="grey" align="center">Shaky shots, stable video.</Text>
          <Space h='sm' />
          <Image src={null} width={300} height={200} withPlaceholder />
        </Card>
      </Group>

      <Space h='sm' />

      <Group position="center">
        <Stack spacing='xs'>
          <Card shadow="sm" padding='lg' radius='xl' withBorder>
            <Text fw={700} fz='xl' variant="gradient" gradient={{ from: 'purple', to: 'pink', deg: 45 }}>A15 Bionic chip.</Text>
            <Text align="center">Fast that lasts.</Text>
          </Card>
          <Card shadow="sm" padding='lg' radius='xl' withBorder>
            <Text align="center" fw={700} fz='xs' variant="gradient" gradient={{ from: 'purple', to: 'pink', deg: 45 }}>Superspeedy</Text>
            <Text align="center" fw={700} fz='xl' variant="gradient" gradient={{ from: 'purple', to: 'pink', deg: 45 }}>5G</Text>
          </Card>
        </Stack>
        <Card shadow="sm" padding='lg' radius='xl' withBorder>
          <Text fw={500} fz='lg' color="dimmed" align="center">Pro-level camera.</Text>
          <Text fw={500} fz='xl' color="grey" align="center">Whoa-level pics.</Text>
          <Space h='sm' />
          <Image src={null} width={300} height={200} withPlaceholder />
        </Card>
      </Group>

      <Space h='sm' />

      <Group position="center">
        <Card shadow="sm" padding='lg' radius='xl' withBorder>
          <Image src={null} height={150} withPlaceholder />
          <Text fw={500} fz='xl'>Emergency SOS via satellite</Text>
        </Card>
        <Card shadow="sm" padding='lg' radius='xl' withBorder>
          <Image src={null} width={150} height={150} withPlaceholder />
          <Text fw={700} fz='xl'>Crash Detection</Text>
        </Card>
      </Group>

      <Space h='sm' />

      <Group position="center">
        <Card shadow="sm" padding='lg' radius='xl' withBorder>
          <Text fw={500} fz='md' color="dimmed" align="center">Personalization</Text>
          <Text fw={700} fz='xl' color="dimmed" align="center">Your photo. Your font.</Text>
          <Text fw={700} fz='xl' color="dimmed" align="center">Your widgets. Your iPhone.</Text>
          <Image src={null} height={150} withPlaceholder />
        </Card>
        <Card shadow="sm" padding='lg' radius='xl' withBorder>
          <Image src={null} height={150} withPlaceholder />
          <Text fw={700} fz='xl' align="center">Sharper, smarter,</Text>
          <Text fw={700} fz='xl' align="center">snappier selfies.</Text>
        </Card>
      </Group>

      <Space h={100} />

      <Title>Ways to save on iPhone.</Title>
    </>
  )
}

export default ProductDetail