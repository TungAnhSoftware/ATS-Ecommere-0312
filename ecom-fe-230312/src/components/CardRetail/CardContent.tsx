import { Anchor, Flex, Title, Image } from "@mantine/core"


const CardContent = (props: { image: string, info: string, hrefDetail: String, href: string }) => {
    return (
        <div style={{ backgroundColor: 'white' }}>
            <Flex
                justify="center"
                align="center"
                direction="column"
                wrap="wrap"
                style={{ marginTop: '120px' }}
            >
                <Image
                    width={75}
                    height={75}
                    src={props.image}
                />
                <Title order={2}>{props.info}</Title>
                <Anchor href={props.href}>{props.hrefDetail}</Anchor>
            </Flex>
        </div>)
}

export default CardContent