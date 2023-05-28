import { Anchor, Card, Center, Title, Flex, Paper, Image } from "@mantine/core"

const PaperCardLeft = (props: { image: string, title: string, info: string, hrefDetail: String ,href: string }) => {
    return (
        <Paper
        shadow="xs"
        p="xl"
        style={{ height: '394px', width: '1000px', marginTop: '30px' }}
      >
        <Center style={{ float: 'left', height: '100%', width: '50%' }}>
          <Image
            style={{ marginRight: '25px' }}
            height={394}
            width={500}
            src={props.image}
            alt="image"
          />
        </Center>
        <Card>
          <Flex
            justify="center"
            align="center"
            direction="column"
            wrap="wrap"
            style={{ marginTop: '100px' }}
          >
            <Title order={4}>{props.title}</Title>
            <Title order={2}>{props.info}</Title>
            <Anchor href={props.href}>{props.hrefDetail} &gt; </Anchor>
          </Flex>
        </Card>
      </Paper>
    )
};
export default PaperCardLeft