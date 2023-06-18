import { Anchor, Flex, Title, Image, Text, Card } from "@mantine/core"


const CardContent = (props: { image: string, info: string, hrefDetail: String, href: string }) => {
    return (
        <Card sx={{
            height: '400px',
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
                <Image
                    width={75}
                    height={75}
                    src={props.image}
                />
                <Title c="black" align="center" order={2}>{props.info}</Title>
                <Text ta="center" c="black">
                    <Anchor href={props.href}>{props.hrefDetail}</Anchor>
                </Text>

            </Flex>
        </Card>
    )
}

export default CardContent