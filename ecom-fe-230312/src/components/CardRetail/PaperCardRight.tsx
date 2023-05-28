import { Anchor, Card, Center, Title, Flex, Paper, Image } from "@mantine/core"


const PaperCardRight = (props: { image: string, title: string, info: string, hrefDetail: String, href: string }) => {
    return (
        <Paper
            shadow="xs"
            p="xl"
            style={{ height: '394px', width: '1000px', marginTop: '30px' }}
        >
            <Card style={{ float: 'left', width: '50%', height: '100%' }}>
                <Flex
                    justify="center"
                    align="center"
                    direction="column"
                    wrap="wrap"
                    style={{ marginTop: '100px' }}
                >
                    <Title order={4}>{props.title}</Title>
                    <Title order={2}>{props.info}</Title>
                    <Anchor href={props.href}>{props.hrefDetail}&gt; </Anchor>
                </Flex>
            </Card>
            <Center style={{ height: '100%' }}>
                <Image
                    style={{ marginLeft: '25px' }}
                    height={394}
                    width={500}
                    src={props.image}
                    alt="image"
                />
            </Center>
        </Paper>
    )
};

export default PaperCardRight;