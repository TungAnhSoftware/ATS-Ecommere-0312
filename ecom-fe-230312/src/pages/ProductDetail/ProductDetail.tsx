import { Button, Group, Image, Space, Stack, Text, Title } from '@mantine/core';
import Banner from './Components/Banner';
import CenterCard from './Components/CenterCard';
import ColorSelector from './Components/ColorSelector';
import Header from './Components/Header';
import VerticalCard from './Components/VerticalCard';
import { designedToMakeDifference, phoneColors, waysToSaveOnIphone } from './MockData';

const ProductDetail = () => {
  const handleBuyItem = () => {
    console.log('Buy now');
  };

  return (
    <>
      <Group position="apart">
        <Header title="Wonderfull." />
        <ColorSelector colors={phoneColors} />
      </Group>

      <center>
        <Banner imgUrl={null} />
        <Space h="sm" />
        <Title order={2}>iPhone 14 and iPhone 14 Plus</Title>
        <Text fz="lg">From $799 or $33.29/mo. for 24 mo. before trade‑in*</Text>
        <Button onClick={handleBuyItem} radius="xl" size="sm" style={{ cursor: 'pointer' }}>
          Buy
        </Button>
      </center>

      <Space h="xl" />

      <Group position="center">
        <CenterCard>
          <Text align="center" fw={500} size={28}>Big and Bigger.</Text>
          <Image src={null} width={300} height={350} withPlaceholder />

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
        </CenterCard>
        <Stack>
          <CenterCard mih={250}>
            <Text align="center" fw={500} fz='lg' color="dimmed">iPhone 14 Plus</Text>
            <Text
              align="center" fw={500} fz='xl'
              variant="gradient" gradient={{ from: 'green', to: 'darkgreen', deg: 45 }}
            >
              The looongest battery life of any iPhone. Ever.
            </Text>
          </CenterCard>
          <CenterCard mih={250}>
            <Stack spacing={0} align="center">
              <Image src={null} width={150} height={150} withPlaceholder />
              <Text fw={500} fz='lg' color="dimmed">Ceramic Shield</Text>
              <Text fw={500} fz='xl'>Tougher than any smartphone glass.</Text>
            </Stack>
          </CenterCard>
        </Stack>
      </Group>

      <Space h='md' />

      <Group position="center">
        <CenterCard mih={250}>
          <Text fw={700} fz='xl' variant="gradient" gradient={{ from: 'purple', to: 'pink', deg: 45 }}>Water resistance.</Text>
          <Text align="center">(Phew.)</Text>
        </CenterCard>
        <CenterCard>
          <Text fw={500} fz='lg' color="dimmed" align="center">Action mode</Text>
          <Text fw={500} fz='xl' color="grey" align="center">Shaky shots, stable video.</Text>
          <Space h='sm' />
          <Image src={null} width={300} height={150} withPlaceholder />
        </CenterCard>
      </Group>

      <Space h='md' />

      <Group position="center">
        <Stack spacing='xs'>
          <CenterCard mih={150}>
            <Text fw={700} fz='xl' variant="gradient" gradient={{ from: 'purple', to: 'pink', deg: 45 }}>A15 Bionic chip.</Text>
            <Text align="center">Fast that lasts.</Text>
          </CenterCard>
          <CenterCard mih={150}>
            <Text align="center" fw={700} fz='xs' variant="gradient" gradient={{ from: 'purple', to: 'pink', deg: 45 }}>Superspeedy</Text>
            <Text align="center" fw={700} fz='xl' variant="gradient" gradient={{ from: 'purple', to: 'pink', deg: 45 }}>5G</Text>
          </CenterCard>
        </Stack>
        <CenterCard>
          <Text fw={500} fz='lg' align="center">Pro-level camera.</Text>
          <Text fw={500} fz='xl' align="center">Whoa-level pics.</Text>
          <Space h='sm' />
          <Image src={null} width={300} height={200} withPlaceholder />
        </CenterCard>
      </Group>

      <Space h='sm' />

      <Group position="center">
        <CenterCard>
          <Image src={null} height={150} withPlaceholder />
          <Text fw={500} fz='xl'>Emergency SOS via satellite</Text>
        </CenterCard>
        <CenterCard>
          <Image src={null} width={150} height={150} withPlaceholder />
          <Text fw={700} fz='xl'>Crash Detection</Text>
        </CenterCard>
      </Group>

      <Space h='sm' />

      <Group position="center">
        <CenterCard>
          <Text fw={500} fz='md' color="dimmed" align="center">Personalization</Text>
          <Text fw={700} fz='xl' align="center">Your photo. Your font.</Text>
          <Text fw={700} fz='xl' align="center">Your widgets. Your iPhone.</Text>
          <Image src={null} height={150} withPlaceholder />
        </CenterCard>
        <CenterCard>
          <Image src={null} height={150} withPlaceholder />
          <Text fw={700} fz='xl' align="center">Sharper, smarter,</Text>
          <Text fw={700} fz='xl' align="center">snappier selfies.</Text>
        </CenterCard>
      </Group>

      <Space h={100} />

      <Title>Ways to save on iPhone.</Title>
      <Space h="xl" />
      <Group position='center'>
        {waysToSaveOnIphone.map((item) => {
          return (
            <VerticalCard
              title={item['title']}
              subtitle={item['desc']}
              link={item['link']}
              linkDesc={item['text']}
              imgUrl={null}
            />
          );
        })}
      </Group>

      <Space h={100} />

      <Title>Designed to make a difference.</Title>
      <Space h="xl" />
      <Group position='center'>
        {designedToMakeDifference.map((item) => {
          return (
            <VerticalCard
              title={item['title']}
              subtitle={item['desc']}
              link={item['link']}
              linkDesc={item['text']}
              imgUrl={null}
            />
          );
        })}
      </Group>
    </>
  );
};

export default ProductDetail;
