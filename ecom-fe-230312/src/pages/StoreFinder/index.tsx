import NavSubRetail from '../../components/NavSubRetail/NavSubRetail';
import CarouselContent from '../../components/CarrouselRetail';
import PaperCard from '../../components/CardRetail/PaperCardRight';
import {
  Title,
  Anchor,
  Text,
  Center,
  SimpleGrid,
  Stack,
  Container,
  Grid,
} from '@mantine/core';
import CardContent from '../../components/CardRetail/CardContent';
import CardHover from '../../components/CardRetail/CardHover';
import './Store_Style.css'
const Content = () => {
  return (
    <div style={{ width: '100%' }}>
      <NavSubRetail />
      <Container fluid>

        <Text c="black" ta="center">
          Get $200–$600 in credit toward iPhone 14 or iPhone 14 Pro when you trade in iPhone 11 or higher.◊
        </Text>
        <Text ta="center">
          <Anchor>Shop IPhone &gt;</Anchor>
        </Text>
        <Title c="black" align="center">Stores in United States</Title>

        <Container size="md" sx={{ marginTop: '25px' }}>
          <CarouselContent />
        </Container>

        <Title c="black" align="center" sx={{ marginTop: '15px' }}>Come see the best of Apple at our stores.</Title>
        <Text fw={500} c="black" ta="center">
          Shop our products and get expert advice in person.
        </Text>


        <Container size="md" sx={{ marginTop: '25px' }}>
          <PaperCard image={'https://digitalassets-retail.cdn-apple.com/retail-image-server/95c/16e/c24/8c7/1ff/f85/752/05f/b8c/58e/4a57e354-cd2a-3794-8a89-094a89116c16_Retail-LP-Carrier-Banner-L-2x_large_1x.png'}
            title='Special Carrier Deals at Apple'
            info='Save up to $1000 on iPhone 14 Pro or iPhone 14 Pro Max with carrier deals at Apple.†'
            hrefDetail='Find your deal'
            href=''
          />
        </Container>

        <Container size="md" sx={{ marginTop: '25px' }}>
          <Grid>
            <Grid.Col xs={12} sm={6} lg={6}>
              <CardContent image='https://images-ext-1.discordapp.net/external/xR3rZjLlvUNDGKeWlKL92YvKh4zpnxJ6KXjeJKwOS0Y/https/digitalassets-retail.cdn-apple.com/retail-image-server/e39/678/3e0/d88/1cb/3ae/36f/204/af8/624/5fd41dab-7cb4-32a8-8095-ad891ae05905_icon_calendar_2x_small_2x.png'
                info='Shop one-on-one with a Specialist at an Apple Store'
                hrefDetail='Reserve a shopping session &gt;'
                href=''
              />
            </Grid.Col>
            <Grid.Col xs={12} sm={6} lg={6}>
              <CardContent image='https://images-ext-1.discordapp.net/external/xR3rZjLlvUNDGKeWlKL92YvKh4zpnxJ6KXjeJKwOS0Y/https/digitalassets-retail.cdn-apple.com/retail-image-server/e39/678/3e0/d88/1cb/3ae/36f/204/af8/624/5fd41dab-7cb4-32a8-8095-ad891ae05905_icon_calendar_2x_small_2x.png'
                info='Get it today. Buy online and we&apos;ll have it ready for pickup'
                hrefDetail=''
                href=''
              />
            </Grid.Col>
          </Grid>
        </Container>

        <Container size="md" sx={{ marginTop: '25px' }}>
          <PaperCard image={'https://digitalassets-retail.cdn-apple.com/retail-image-server/95c/16e/c24/8c7/1ff/f85/752/05f/b8c/58e/4a57e354-cd2a-3794-8a89-094a89116c16_Retail-LP-Carrier-Banner-L-2x_large_1x.png'}
            title='Special Carrier Deals at Apple'
            info='Save up to $1000 on iPhone 14 Pro or iPhone 14 Pro Max with carrier deals at Apple.†'
            hrefDetail='Find your deal'
            href=''
          />
        </Container>

        <Container size="md" sx={{ marginTop: '25px' }}>
          <Grid>
            <Grid.Col xs={12} sm={6} lg={6}>
              <CardContent image='https://images-ext-1.discordapp.net/external/xR3rZjLlvUNDGKeWlKL92YvKh4zpnxJ6KXjeJKwOS0Y/https/digitalassets-retail.cdn-apple.com/retail-image-server/e39/678/3e0/d88/1cb/3ae/36f/204/af8/624/5fd41dab-7cb4-32a8-8095-ad891ae05905_icon_calendar_2x_small_2x.png'
                info='Shop one-on-one with a Specialist at an Apple Store'
                hrefDetail='Reserve a shopping session &gt;'
                href=''
              />
            </Grid.Col>
            <Grid.Col xs={12} sm={6} lg={6}>
              <CardContent image='https://images-ext-1.discordapp.net/external/xR3rZjLlvUNDGKeWlKL92YvKh4zpnxJ6KXjeJKwOS0Y/https/digitalassets-retail.cdn-apple.com/retail-image-server/e39/678/3e0/d88/1cb/3ae/36f/204/af8/624/5fd41dab-7cb4-32a8-8095-ad891ae05905_icon_calendar_2x_small_2x.png'
                info='Get it today. Buy online and we&apos;ll have it ready for pickup'
                hrefDetail=''
                href=''
              />
            </Grid.Col>
          </Grid>
        </Container>

        <Container size="md" sx={{ marginTop: '25px' }}>
          <Title c="black" align="center" order={1} sx={{ marginTop: '25px' }}>
            We&apos;ll help you get started. And keep going
          </Title>
          <Title c="black" align="center" order={4}>
            Every store has dedicated teams for support, learning, and more.
          </Title>
        </Container>

        <Container size="md" sx={{ marginTop: '25px' }}>
          <PaperCard image={'https://digitalassets-retail.cdn-apple.com/retail-image-server/95c/16e/c24/8c7/1ff/f85/752/05f/b8c/58e/4a57e354-cd2a-3794-8a89-094a89116c16_Retail-LP-Carrier-Banner-L-2x_large_1x.png'}
            title='Special Carrier Deals at Apple'
            info='Save up to $1000 on iPhone 14 Pro or iPhone 14 Pro Max with carrier deals at Apple.†'
            hrefDetail='Find your deal'
            href=''
          />
        </Container>

        <Container size="md" sx={{ marginTop: '25px' }}>
          <Title c="black" align="center" order={1}>What&apos;s happening at Apple.</Title>
        </Container>

        <Container size="md" sx={{ marginTop: '15px' }}>
          <Grid>
            <Grid.Col xs={12} sm={6} lg={6}>
              <CardHover image={'https://images-ext-2.discordapp.net/external/FkSXhoaDVkI6Y9IKG5NBloeNxoj7nsv0qUkPnpl8Evg/https/digitalassets-retail.cdn-apple.com/retail-image-server/c8b/1c1/cdd/e86/38d/1d4/734/0a9/bd6/cb7/c5a3892c-690e-3c02-b8e6-a8953c4d2966_230201_Skills%2520Privacy_Marketing%2520Image_1320x1320_small_1x.jpg'}
                title={'Today at Apple'}
                info={'Drop by the Apple Store to learn more about privacy features on iPhone'}
                hrefDetail={'Join a free session'}
                href={''} />
            </Grid.Col>
            <Grid.Col xs={12} sm={6} lg={6}>
              <CardHover image={'https://images-ext-2.discordapp.net/external/FkSXhoaDVkI6Y9IKG5NBloeNxoj7nsv0qUkPnpl8Evg/https/digitalassets-retail.cdn-apple.com/retail-image-server/c8b/1c1/cdd/e86/38d/1d4/734/0a9/bd6/cb7/c5a3892c-690e-3c02-b8e6-a8953c4d2966_230201_Skills%2520Privacy_Marketing%2520Image_1320x1320_small_1x.jpg'}
                title={'Today at Apple'}
                info={'Drop by the Apple Store to learn more about privacy features on iPhone'}
                hrefDetail={'Join a free session'}
                href={''} />
            </Grid.Col>
          </Grid>
        </Container>

      </Container>
    </div >
  );
}
const StoreFinder = () => {
  return (
    <Content />)
};

export default StoreFinder;
