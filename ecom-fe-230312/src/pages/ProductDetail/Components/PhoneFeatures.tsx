import { Grid, Group, Image, Skeleton, Space, Stack, Text, px, useMantineTheme } from '@mantine/core';
import CenterCard from "./CenterCard";

export default function PhoneFeatures() {
  const theme = useMantineTheme();
  return (
    <center>
      <Grid maw='90%' m='lg'>
        <Grid.Col xs={7}>
          <CenterCard h={500 + px(theme.spacing.md)}>
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
        </Grid.Col>
        <Grid.Col xs={5}>
          <Stack>
            <CenterCard h={250}>
              <Text align="center" fw={500} fz='lg' color="dimmed">iPhone 14 Plus</Text>
              <Text
                align="center" fw={500} fz='xl'
                variant="gradient" gradient={{ from: 'green', to: 'darkgreen', deg: 45 }}
              >
                The looongest battery life of any iPhone. Ever.
              </Text>
            </CenterCard>
            <CenterCard h={250}>
              <Stack spacing={0} align="center">
                <Image src={null} width={150} height={100} withPlaceholder />
                <Text fw={500} fz='lg' color="dimmed">Ceramic Shield</Text>
                <Text fw={500} fz='xl'>Tougher than any smartphone glass.</Text>
              </Stack>
            </CenterCard>
          </Stack>
        </Grid.Col>

        <Grid.Col xs={5}>
          <CenterCard h={250}>
            <Text fw={700} fz='xl' variant="gradient" gradient={{ from: 'purple', to: 'pink', deg: 45 }}>Water resistance.</Text>
            <Text align="center">(Phew.)</Text>
          </CenterCard>
        </Grid.Col>
        <Grid.Col xs={7}>
          <CenterCard h={250}>
            <Text fw={500} fz='lg' color="dimmed" align="center">Action mode</Text>
            <Text fw={500} fz='xl' color="grey" align="center">Shaky shots, stable video.</Text>
            <Space h='sm' />
            <Image src={null} width={250} height={100} withPlaceholder />
          </CenterCard>
        </Grid.Col>

        <Grid.Col xs={5}>
          <Stack>
            <CenterCard h={250}>
              <Text fw={700} fz='xl' variant="gradient" gradient={{ from: 'purple', to: 'pink', deg: 45 }}>A15 Bionic chip.</Text>
              <Text align="center">Fast that lasts.</Text>
            </CenterCard>
            <CenterCard h={250}>
              <Text align="center" fw={700} fz='xs' variant="gradient" gradient={{ from: 'purple', to: 'pink', deg: 45 }}>Superspeedy</Text>
              <Text align="center" fw={700} fz='xl' variant="gradient" gradient={{ from: 'purple', to: 'pink', deg: 45 }}>5G</Text>
            </CenterCard>
          </Stack>
        </Grid.Col>
        <Grid.Col xs={7}>
          <CenterCard h={500 + px(theme.spacing.md)}>
            <Text fw={500} fz='lg' align="center">Pro-level camera.</Text>
            <Text fw={500} fz='xl' align="center">Whoa-level pics.</Text>
            <Space h='sm' />
            <Image src={null} width={300} height={350} withPlaceholder />
          </CenterCard>
        </Grid.Col>

        <Grid.Col xs={7}>
          <CenterCard h={250}>
            <Image src={null} height={150} withPlaceholder />
            <Text fw={500} fz='xl'>Emergency SOS via satellite</Text>
          </CenterCard>
        </Grid.Col>
        <Grid.Col xs={5}>
          <CenterCard h={250}>
            <Image src={null} width={150} height={150} withPlaceholder />
            <Text fw={700} fz='xl'>Crash Detection</Text>
          </CenterCard>
        </Grid.Col>

        <Grid.Col xs={7}>
          <CenterCard h={500}>
            <Text fw={500} fz='md' color="dimmed" align="center">Personalization</Text>
            <Text fw={700} fz='xl' align="center">Your photo. Your font.</Text>
            <Text fw={700} fz='xl' align="center">Your widgets. Your iPhone.</Text>
            <Image src={null} height={350} withPlaceholder />
          </CenterCard>
        </Grid.Col>
        <Grid.Col xs={5}>
          <CenterCard h={500}>
            <Image src={null} height={350} withPlaceholder />
            <Text fw={700} fz='xl' align="center">Sharper, smarter,</Text>
            <Text fw={700} fz='xl' align="center">snappier selfies.</Text>
          </CenterCard>
        </Grid.Col>
      </Grid>
    </center>
  );
}