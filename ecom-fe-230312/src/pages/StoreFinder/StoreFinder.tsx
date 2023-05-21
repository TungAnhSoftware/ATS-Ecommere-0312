import NavSubRetail from "../../components/NavSubRetail/NavSubRetail"
import CardForCarrousel from "../../components/CardCarrousel";
import {
    Title, Anchor, Flex, Text, Center,
    Card, Image, Container, Paper, SimpleGrid
} from '@mantine/core';
import { Carousel } from '@mantine/carousel';
function Content() {
    return (
        <div style={{ backgroundColor: '#f2f2f2' }}>
            <Center>
                <Text>Get $200–$600 in credit toward iPhone 14 or iPhone 14 Pro when you trade in iPhone 11 or higher.◊</Text>
            </Center>
            <Center>
                <Text><Anchor>Shop IPhone &gt;</Anchor></Text>
            </Center>
            <Container >
                <Center style={{ marginTop: "30px" }}>
                    <Title>Stores in United States</Title>
                </Center>
                <Paper p="xl" style={{ height: '394px', width: '100%', backgroundColor: '#f2f2f2' }}>
                    <Flex
                        direction="row"
                        justify="center"
                        align="center"
                        wrap="wrap"
                        style={{ height: '100%', width: '100%' }}
                    >
                        <Carousel
                            withIndicators
                            height="100%"
                            slideSize="33.333333%"
                            align="center"
                            slidesToScroll={3}
                        >
                            <Carousel.Slide><CardForCarrousel /></Carousel.Slide>
                            <Carousel.Slide><CardForCarrousel /></Carousel.Slide>
                            <Carousel.Slide><CardForCarrousel /></Carousel.Slide>
                            <Carousel.Slide><CardForCarrousel /></Carousel.Slide>
                            <Carousel.Slide><CardForCarrousel /></Carousel.Slide>
                            <Carousel.Slide><CardForCarrousel /></Carousel.Slide>
                            <Carousel.Slide><CardForCarrousel /></Carousel.Slide>
                            <Carousel.Slide><CardForCarrousel /></Carousel.Slide>
                            <Carousel.Slide><CardForCarrousel /></Carousel.Slide>
                        </Carousel>
                    </Flex>
                </Paper>

                <Flex
                    mih={50}
                    gap="xs"
                    justify="center"
                    align="center"
                    direction="column"
                    wrap="wrap"
                    style={{ marginTop: "30px" }}
                >
                    <Title>Come see the best of Apple at our stores.</Title>
                    <Text fw={500}>Shop our products and get expert advice in person.</Text>
                </Flex>

                <Paper shadow="xs" p="xl" style={{ height: '394px', width: '1000px', marginTop: '30px' }}>
                    <Card style={{ float: 'left', width: '50%', height: '100%' }}>
                        <Flex
                            justify="center"
                            align="center"
                            direction="column"
                            wrap="wrap"
                            style={{ marginTop: '100px' }}>
                            <Title order={4}>Special Carrier Deals at Apple</Title>
                            <Title order={2}>Save up to $800 on the newest</Title>
                            <Title order={2}>iPhone after trade-in.†</Title>
                            <Anchor href="#">Find your deal &gt; </Anchor>
                        </Flex>
                    </Card>
                    <Center style={{ height: '100%' }}>
                        <Image src="https://digitalassets-retail.cdn-apple.com/retail-image-server/95c/16e/c24/8c7/1ff/f85/752/05f/b8c/58e/4a57e354-cd2a-3794-8a89-094a89116c16_Retail-LP-Carrier-Banner-L-2x_large_1x.png" alt="image" />
                    </Center>
                </Paper>


                <SimpleGrid cols={2} style={{ height: '394px', width: '1000px', marginTop: '30px' }}>
                    <div style={{ backgroundColor: 'white' }}>
                        <Flex
                            justify="center"
                            align="center"
                            direction="column"
                            wrap="wrap"
                            style={{ marginTop: '120px' }}>
                            <Image width={75} height={75}
                                src="https://images-ext-1.discordapp.net/external/xR3rZjLlvUNDGKeWlKL92YvKh4zpnxJ6KXjeJKwOS0Y/https/digitalassets-retail.cdn-apple.com/retail-image-server/e39/678/3e0/d88/1cb/3ae/36f/204/af8/624/5fd41dab-7cb4-32a8-8095-ad891ae05905_icon_calendar_2x_small_2x.png" />
                            <Title order={2}>Shop one-on-one with a</Title>
                            <Title order={2}>Specialist at an Apple Store</Title>
                            <Anchor href="#">Reserve a shopping session &gt; </Anchor>
                        </Flex>
                    </div>
                    <div style={{ backgroundColor: 'white' }}>
                        <Flex
                            justify="center"
                            align="center"
                            direction="column"
                            wrap="wrap"
                            style={{ marginTop: '120px' }}>
                            <Image width={75} height={75}
                                src="https://images-ext-2.discordapp.net/external/bfd8cDSXowlqvub5rVRpKsKeGPi5GQFwZUDafeuslPY/https/digitalassets-retail.cdn-apple.com/retail-image-server/a99/d0f/404/cdc/90c/54b/fbe/ca9/fa7/d43/0fdb7967-3f71-3b6a-bf42-c2974de94ad2_icon_pickup_2x_small_2x.png"
                            />
                            <Title order={2}>Get it today. Buy online and</Title>
                            <Title order={2}>we'll have it ready for pickup</Title>
                        </Flex>
                    </div>
                </SimpleGrid>

                <Paper shadow="xs" p="xl"
                    style={{ height: '394px', width: '1000px', marginTop: '30px' }}>
                    <Card style={{ float: 'left', width: '50%', height: '100%' }}>
                        <Flex
                            justify="center"
                            align="center"
                            direction="column"
                            wrap="wrap"
                            style={{ marginTop: '100px' }}>
                            <Title order={4}>Apple Trade In</Title>
                            <Title order={2}>Bring in an eligible device and we’ll</Title>
                            <Title order={2}>trade it for instant credit.1</Title>
                            <Anchor href="#">See what it's worth &gt; </Anchor>
                            <Anchor href="#">How to prepare your device for trade-in &gt; </Anchor>
                        </Flex>
                    </Card>
                    <Center style={{ height: '100%' }}>
                        <Image style={{ marginLeft: '25px' }}
                            height={394} width={500}
                            src="https://images-ext-2.discordapp.net/external/ro3XO65llPYpe7WM1V1fVI8WjWhCjG9rbzi_4PHyCyA/https/digitalassets-retail.cdn-apple.com/retail-image-server/91d/10d/735/36c/563/9e7/2d9/b8a/ded/25d/f23ed814-753b-3f30-b11d-52e506ba7a36_grid_image_section_1_tile_1_large_2x_small_1x.jpg"
                            alt="image" />
                    </Center>
                </Paper>

                <SimpleGrid cols={2} style={{ height: '394px', width: '1000px', marginTop: '30px' }}>
                    <div style={{ backgroundColor: 'white' }}>
                        <Flex
                            justify="center"
                            align="center"
                            direction="column"
                            wrap="wrap"
                            style={{ marginTop: '120px' }}>
                            <Image width={75} height={75}
                                src='https://images-ext-1.discordapp.net/external/pRNxGqPSYtP5KSFi8-ZODaYH2lKkBDxgVz4BxjaOxug/https/digitalassets-retail.cdn-apple.com/retail-image-server/92b/dcd/60b/3e6/c62/a35/234/3ab/49f/f97/2794cff9-f21e-3a56-ac2e-69faa838b5f5_icon_payment_2x_medium_2x.png'
                            />
                            <Title order={2}>
                                Pay monthly at 0% APR
                            </Title>
                            <Title order={2}>
                                when you choose to check
                            </Title>
                            <Title order={2}>
                                out with Apple Card Monthly
                            </Title>
                            <Title order={2}>
                                Installments.2
                            </Title>
                            <Anchor href="#">See financing and credit options &gt; </Anchor>
                        </Flex>
                    </div>
                    <div style={{ backgroundColor: 'white' }}>
                        <Flex
                            justify="center"
                            align="center"
                            direction="column"
                            wrap="wrap"
                            style={{ marginTop: '120px' }}>
                            <Image width={226} height={49}
                                src='https://images-ext-1.discordapp.net/external/Z9wnEa6hBvpL4XRaEn3fsY_eceZMu-FaX972Vpx9VFU/https/digitalassets-retail.cdn-apple.com/retail-image-server/6f3/661/de3/a57/149/8c8/f10/1a1/e61/b6c/3148dddc-b0df-3e9f-ae11-0dea7ada8232_PNG-carrier_logo_02_large_medium_1x.png'
                            />
                            <Title order={2}>
                                We'll help you find a carrier
                            </Title>
                            <Title order={2}>
                                plan and activate your new
                            </Title>
                            <Title order={2}>
                                iPhone in person
                            </Title>
                        </Flex>
                    </div>
                </SimpleGrid>

                <Flex
                    mih={50}
                    gap="xs"
                    justify="center"
                    align="center"
                    direction="column"
                    wrap="wrap"
                    style={{ marginTop: "30px" }}
                >
                    <Title order={1}>We'll help you get started. And keep going</Title>
                    <Title order={4}>Every store has dedicated teams for support, learning, and more.</Title>
                </Flex>

                <Paper shadow="xs" p="xl"
                    style={{ height: '394px', width: '1000px', marginTop: '30px' }}>
                    <Card style={{ float: 'left', width: '50%', height: '100%' }}>
                        <Flex
                            justify="center"
                            align="center"
                            direction="column"
                            wrap="wrap"
                            style={{ marginTop: '100px' }}>
                            <Title order={4}>Genius Bar</Title>
                            <Title order={2}>
                                Get expert service and support at
                            </Title>
                            <Title order={2}>
                                the Genius Bar
                            </Title>
                            <Anchor href="#">Get help here &gt; </Anchor>
                            <Anchor href="#">How to prepare your device for your appointment</Anchor>
                        </Flex>
                    </Card>
                    <Center style={{ height: '100%' }}>
                        <Image style={{ marginLeft: '25px' }}
                            height={394} width={500}
                            src="https://images-ext-2.discordapp.net/external/ro3XO65llPYpe7WM1V1fVI8WjWhCjG9rbzi_4PHyCyA/https/digitalassets-retail.cdn-apple.com/retail-image-server/91d/10d/735/36c/563/9e7/2d9/b8a/ded/25d/f23ed814-753b-3f30-b11d-52e506ba7a36_grid_image_section_1_tile_1_large_2x_small_1x.jpg"
                            alt="image" />
                    </Center>
                </Paper>

                <Paper shadow="xs" p="xl"
                    style={{ height: '394px', width: '1000px', marginTop: '30px' }}>
                    <Center style={{ float: 'left', height: '100%', width: '50%' }}>
                        <Image style={{ marginRight: '25px' }}
                            height={394} width={500}
                            src='https://images-ext-2.discordapp.net/external/Gk3lA6cvsPQGFF0kGKor0cr6C5Z-YK-BFtaYG8leO7o/https/digitalassets-retail.cdn-apple.com/retail-image-server/b67/207/89a/40c/8c1/b3a/8e2/eff/ae3/4bb/235467d4-79f2-3a6a-a029-6d888cde58c1_apple_at_work_01_large_2x_small_1x.png'
                            alt="image" />
                    </Center>
                    <Card>
                        <Flex
                            justify="center"
                            align="center"
                            direction="column"
                            wrap="wrap"
                            style={{ marginTop: '100px' }}>
                            <Title order={4}>Apple at Work</Title>
                            <Title order={2}>
                                Put our Small Business Team on
                            </Title>
                            <Title order={2}>
                                your team.
                            </Title>
                            <Anchor href="#">See how we can help &gt; </Anchor>
                        </Flex>
                    </Card>
                </Paper>

                <Flex
                    mih={50}
                    gap="xs"
                    justify="center"
                    align="center"
                    direction="column"
                    wrap="wrap"
                    style={{ marginTop: "50px" }}
                >
                    <Title order={1}>What's happening at Apple.</Title>
                </Flex>

                <SimpleGrid cols={2} spacing="xl" style={{ width: '1000px', marginTop: '50px' }}>
                    <div style={{ backgroundColor: 'white' }}>
                        <Card shadow="sm" radius="md" withBorder>
                            <Card.Section>
                                <Image
                                    src='https://images-ext-2.discordapp.net/external/FkSXhoaDVkI6Y9IKG5NBloeNxoj7nsv0qUkPnpl8Evg/https/digitalassets-retail.cdn-apple.com/retail-image-server/c8b/1c1/cdd/e86/38d/1d4/734/0a9/bd6/cb7/c5a3892c-690e-3c02-b8e6-a8953c4d2966_230201_Skills%2520Privacy_Marketing%2520Image_1320x1320_small_1x.jpg'
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
                                <Text>Today at Apple</Text>
                                <Title order={2}>Drop by the Apple Store to learn more about privacy features on iPhone</Title>
                                <Anchor href="#">Join a free session &gt; </Anchor>
                            </Flex>
                        </Card>
                    </div>
                    <div style={{ backgroundColor: 'white' }}>
                        <Card shadow="sm" radius="md" withBorder>
                            <Card.Section>
                                <Image
                                    src='https://images-ext-2.discordapp.net/external/hwnmcp_Bwa8HugNFXKo2DgzJtHZzgabhLrToCwRU5K0/https/digitalassets-retail.cdn-apple.com/retail-image-server/7ea/d50/39b/e57/e3d/8de/dee/264/f67/c01/8f823bc6-9cda-3621-9ea5-867dd8f10465_environment_large_2x_small_1x.jpg'
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
                                <Text>News</Text>
                                <Title order={2}>
                                    We're going carbon neutral across our entire business by 2030.
                                </Title>
                                <Anchor style={{ marginTop: '35px' }}
                                    href="#">Learn more &gt; </Anchor>
                            </Flex>
                        </Card>
                    </div>
                </SimpleGrid>
            </Container>
        </div>

    );
}
const StoreFinder = () => {
    return (
        <NavSubRetail></NavSubRetail>
    )
}