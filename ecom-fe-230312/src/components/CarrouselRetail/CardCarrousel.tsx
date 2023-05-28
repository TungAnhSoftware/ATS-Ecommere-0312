import { Text, Card, Image } from '@mantine/core';

const CardForCarrousel = (props: {image: string, name: string, address: string, postCode : string}) => {
  return (
    <Card
      radius="md"
      style={{height: '331px', width:'300px'}}
    >
      <Card.Section>
        <Image
          src = {props.image}
          height={169}
          width={300}
          alt="img"
        />
      </Card.Section>
      <div style={{ justifyContent: 'center', paddingTop: '5px' }}>
        <Text weight={500}>{props.name}</Text>
        <Text size="sm" color="dimmed">
          {props.address}
          <br/>
          {props.postCode}
        </Text>
      </div>
    </Card>
  );
}

export default CardForCarrousel;
