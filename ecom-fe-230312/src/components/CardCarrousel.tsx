import { Text, Card, Image } from '@mantine/core';

function CardForCarrousel() {
  return (
    <Card
      shadow="sm"
      radius="md"
      withBorder
      style={{ marginInlineStart: '10px', marginBlockEnd: '10px' }}
    >
      <Card.Section>
        <Image
          src="https://images-ext-1.discordapp.net/external/hw25BlVlEL0R4Gz_kQU-T1_UZSdNdPcqse0pinbBa-4/%3Fresize%3D336%3A189%26output-format%3Djpg%26output-quality%3D85%26interpolation%3Dprogressive-bicubic/https/rtlimages.apple.com/cmc/dieter/store/16_9/R007.png"
          height={200}
          alt="img"
        />
      </Card.Section>
      <div style={{ justifyContent: 'center' }}>
        <Text weight={500}>Apple Quaker Bridge</Text>
        <Text size="sm" color="dimmed">
          150 Quaker Bridge Mall
          <br />
          Lawrence Township, NJ 08648
        </Text>
      </div>
    </Card>
  );
}

export default CardForCarrousel;
