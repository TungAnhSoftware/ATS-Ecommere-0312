import { Anchor, Card, Center, Title, Flex, Paper, Image, Text, Grid } from "@mantine/core"

const PaperCardRight = (props: { image: string, title: string, info: string, hrefDetail: String, href: string }) => {
    return (
        <Grid sx={{
            marginTop: '30px',
            width: '100%',
            '@media (min-width: 64em)': {
                height: '800px',
            },
            ' @media (min-width: 30em)': {
                height: '400px'
            }
        }}>
            <Grid.Col xs={12} sm={6} lg={6}>
                <Card sx={{
                    height: '100%',
                    '@media (min-width: 64em)': {
                        width: '50%',
                    },
                    ' @media (min-width: 30em)': {
                        width: '100%',
                    }
                }}>
                    <Flex
                        justify="center"
                        align="center"
                        direction="column"
                        wrap="wrap"
                        style={{ marginTop: '100px' }}
                    >
                        <Title order={4} align="center">{props.title}</Title>
                        <Title order={2} align="center">{props.info}</Title>
                        <Text ta="center">
                            <Anchor href={props.href} >{props.hrefDetail}&gt; </Anchor>
                        </Text>
                    </Flex>
                </Card>
            </Grid.Col>
            <Grid.Col xs={12} sm={6} lg={6}>
                <Center sx={{
                    height: '100%',
                    '@media (min-width: 64em)': {
                        width: '50%',
                    },
                    ' @media (min-width: 30em)': {
                        width: '100%',
                    }
                }}>
                    <Image
                        height={'400px'}
                        width={'100%'}
                        src={props.image}
                        alt="With default placeholder" withPlaceholder
                    />
                </Center>
            </Grid.Col>
        </Grid>
    )
};

export default PaperCardRight;