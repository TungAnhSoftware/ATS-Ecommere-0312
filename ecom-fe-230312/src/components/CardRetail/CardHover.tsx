import { Anchor, Card, Flex, Title, Text, Image} from "@mantine/core"

const CardHover = (props: { image: string, title: string, info: string, hrefDetail: String, href: string }) => {
    return (
        <div style={{ backgroundColor: 'white' }}>
            <Card shadow="sm" radius="md" withBorder>
                <Card.Section>
                    <Image
                        src= {props.image}
                        height={426}
                        width={486}
                    />
                </Card.Section>
                <Flex
                    justify="flex-start"
                    align="flex-start"
                    direction="column"
                    wrap="wrap"
                    style={{ marginTop: '20px' }}
                >
                    <Text>{props.title}</Text>
                    <Title order={2}>
                        {props.info}
                    </Title>
                    <Anchor href={props.href}>{props.hrefDetail}&gt; </Anchor>
                </Flex>
            </Card>
        </div>
    )
}

export default CardHover