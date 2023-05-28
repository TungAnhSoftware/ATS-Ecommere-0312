import NavSubRetail from '../../components/NavSubRetail/NavSubRetail';
import CarouselContent from '../../components/CarrouselRetail';
import PaperCard from '../../components/CardRetail/PaperCardRight';
import {
  Title,
  Anchor,
  Flex,
  Text,
  Center,
  Card,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  AppShell,
  Container,
} from '@mantine/core';
import CardContent from '../../components/CardRetail/CardContent';
import CardHover from '../../components/CardRetail/CardHover';

const Content = () => {
  return (
    <AppShell
      header={<NavSubRetail />}
      style={{
        padding: 0
      }}
      styles={(theme) => ({
        main: {
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0]
        },
      })}
    >
      <Container>
        <Stack align="center" spacing="xs">
          <Text c="black">
            Get $200–$600 in credit toward iPhone 14 or iPhone 14 Pro when you trade in iPhone 11 or higher.◊
          </Text>
          <Text>
            <Anchor>Shop IPhone &gt;</Anchor>
          </Text>
        </Stack>
        <Center style={{ margin: '20px' }}>
          <Title c="black">Stores in United States</Title>
        </Center>

        <CarouselContent />

        <Stack align="center" spacing="xs">
          <Title c="black">Come see the best of Apple at our stores.</Title>
          <Text fw={500} c="black">
            Shop our products and get expert advice in person.
          </Text>
        </Stack>

        <PaperCard image={'https://digitalassets-retail.cdn-apple.com/retail-image-server/95c/16e/c24/8c7/1ff/f85/752/05f/b8c/58e/4a57e354-cd2a-3794-8a89-094a89116c16_Retail-LP-Carrier-Banner-L-2x_large_1x.png'}
          title='Special Carrier Deals at Apple'
          info='Save up to $1000 on iPhone 14 Pro or iPhone 14 Pro Max with carrier deals at Apple.†'
          hrefDetail='Find your deal'
          href=''
        />

        <SimpleGrid
          breakpoints={[
            { maxWidth: '36rem', cols: 1, spacing: 'sm' },
          ]}
          cols={2}
          style={{ height: '394px', width: '1000px', marginTop: '30px' }}
        >
          <CardContent image='https://images-ext-1.discordapp.net/external/xR3rZjLlvUNDGKeWlKL92YvKh4zpnxJ6KXjeJKwOS0Y/https/digitalassets-retail.cdn-apple.com/retail-image-server/e39/678/3e0/d88/1cb/3ae/36f/204/af8/624/5fd41dab-7cb4-32a8-8095-ad891ae05905_icon_calendar_2x_small_2x.png'
            info='Shop one-on-one with a Specialist at an Apple Store'
            hrefDetail='Reserve a shopping session &gt;'
            href=''
          />
          <CardContent image='https://images-ext-1.discordapp.net/external/xR3rZjLlvUNDGKeWlKL92YvKh4zpnxJ6KXjeJKwOS0Y/https/digitalassets-retail.cdn-apple.com/retail-image-server/e39/678/3e0/d88/1cb/3ae/36f/204/af8/624/5fd41dab-7cb4-32a8-8095-ad891ae05905_icon_calendar_2x_small_2x.png'
            info='Get it today. Buy online and we&apos;ll have it ready for pickup'
            hrefDetail=''
            href=''
          />
        </SimpleGrid>

        <PaperCard image={'https://digitalassets-retail.cdn-apple.com/retail-image-server/95c/16e/c24/8c7/1ff/f85/752/05f/b8c/58e/4a57e354-cd2a-3794-8a89-094a89116c16_Retail-LP-Carrier-Banner-L-2x_large_1x.png'}
          title='Special Carrier Deals at Apple'
          info='Save up to $1000 on iPhone 14 Pro or iPhone 14 Pro Max with carrier deals at Apple.†'
          hrefDetail='Find your deal'
          href=''
        />
        <SimpleGrid
          breakpoints={[
            { maxWidth: '36rem', cols: 1, spacing: 'sm' },
          ]}
          cols={2}
          style={{ height: '394px', width: '1000px', marginTop: '30px' }}
        >
          <CardContent image='https://images-ext-1.discordapp.net/external/xR3rZjLlvUNDGKeWlKL92YvKh4zpnxJ6KXjeJKwOS0Y/https/digitalassets-retail.cdn-apple.com/retail-image-server/e39/678/3e0/d88/1cb/3ae/36f/204/af8/624/5fd41dab-7cb4-32a8-8095-ad891ae05905_icon_calendar_2x_small_2x.png'
            info='Shop one-on-one with a Specialist at an Apple Store'
            hrefDetail='Reserve a shopping session &gt;'
            href=''
          />
          <CardContent image='https://images-ext-1.discordapp.net/external/xR3rZjLlvUNDGKeWlKL92YvKh4zpnxJ6KXjeJKwOS0Y/https/digitalassets-retail.cdn-apple.com/retail-image-server/e39/678/3e0/d88/1cb/3ae/36f/204/af8/624/5fd41dab-7cb4-32a8-8095-ad891ae05905_icon_calendar_2x_small_2x.png'
            info='Get it today. Buy online and we&apos;ll have it ready for pickup'
            hrefDetail=''
            href=''
          />
        </SimpleGrid>

        <Stack align="center" spacing="xs">
          <Title order={1}>
            We&apos;ll help you get started. And keep going
          </Title>
          <Title order={4}>
            Every store has dedicated teams for support, learning, and more.
          </Title>
        </Stack>

        <PaperCard image={'https://digitalassets-retail.cdn-apple.com/retail-image-server/95c/16e/c24/8c7/1ff/f85/752/05f/b8c/58e/4a57e354-cd2a-3794-8a89-094a89116c16_Retail-LP-Carrier-Banner-L-2x_large_1x.png'}
          title='Special Carrier Deals at Apple'
          info='Save up to $1000 on iPhone 14 Pro or iPhone 14 Pro Max with carrier deals at Apple.†'
          hrefDetail='Find your deal'
          href=''
        />

        <Center style={{ margin: '20px' }}>
          <Title c="black">What&apos;s happening at Apple.</Title>
        </Center>

        <SimpleGrid
          cols={2}
          spacing="xl"
          style={{ width: '1000px', marginTop: '50px' }}
        >
          <CardHover image={'https://images-ext-2.discordapp.net/external/FkSXhoaDVkI6Y9IKG5NBloeNxoj7nsv0qUkPnpl8Evg/https/digitalassets-retail.cdn-apple.com/retail-image-server/c8b/1c1/cdd/e86/38d/1d4/734/0a9/bd6/cb7/c5a3892c-690e-3c02-b8e6-a8953c4d2966_230201_Skills%2520Privacy_Marketing%2520Image_1320x1320_small_1x.jpg'}
            title={'Today at Apple'}
            info={'Drop by the Apple Store to learn more about privacy features on iPhone'}
            hrefDetail={'Join a free session'}
            href={''} />

          <CardHover image={'https://images-ext-2.discordapp.net/external/FkSXhoaDVkI6Y9IKG5NBloeNxoj7nsv0qUkPnpl8Evg/https/digitalassets-retail.cdn-apple.com/retail-image-server/c8b/1c1/cdd/e86/38d/1d4/734/0a9/bd6/cb7/c5a3892c-690e-3c02-b8e6-a8953c4d2966_230201_Skills%2520Privacy_Marketing%2520Image_1320x1320_small_1x.jpg'}
            title={'Today at Apple'}
            info={'Drop by the Apple Store to learn more about privacy features on iPhone'}
            hrefDetail={'Join a free session'}
            href={''} />
        </SimpleGrid>
      </Container>
    </AppShell>
  );
}
const StoreFinder = () => {
  return (
    <Content />)
};

export default StoreFinder;
