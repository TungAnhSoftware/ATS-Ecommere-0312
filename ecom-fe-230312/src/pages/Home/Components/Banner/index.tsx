import {
  Anchor,
  Box,
  Flex,
  Image,
  SimpleGrid,
  Text,
  Title
} from '@mantine/core';

const Banner = () => {
  return (
    <Box mt={20} mb={20}>
      {/* Content */}
      <SimpleGrid cols={1} spacing="sm" verticalSpacing="md">
        {/* */}
        <Box component="a" pos="relative">
          <Flex h={580} direction="column" justify="flex-start" align="center">
            <Title fz={56} mt={55} color="white" align="center">
              iPhone 14 Pro
            </Title>
            <Text fz={31} color="white" align="center">
              Pro.Beyond.
            </Text>
            <Flex gap="lg" align="center" justify="center">
              <Anchor fz={21}>Learn more &gt;</Anchor>
              <Anchor ml={35} fz={21}>
                Buy &gt;
              </Anchor>
            </Flex>
            <Box top={0} pos="absolute" style={{ zIndex: -1 }}>
              <Image
                height={580}
                src="https://www.apple.com/v/home/az/images/heroes/iphone-14-pro/hero_iphone14pro_spring__9xo85pm6sbmm_large.jpg"
              />
            </Box>
          </Flex>
        </Box>

        <Box pos="relative">
          <Flex h={580} direction="column" justify="flex-start" align="center">
            <Title fz={56} mt={55} align="center">
              iPhone 14
            </Title>
            <Text fz={31} align="center">
              Two great sizes.
            </Text>
            <Text fz={31} align="center">
              Now with a splash of yellow.
            </Text>
            <Flex gap="md" align="center" justify="center">
              <Anchor fz={21}>Learn more &gt;</Anchor>
              <Anchor ml={35} fz={21}>
                Buy &gt;
              </Anchor>
            </Flex>
            <Box pos="absolute" top={0} style={{ zIndex: -1 }}>
              <Image
                height={580}
                src="https://www.apple.com/v/home/az/images/heroes/iphone-14/hero_iphone14_yellow__eun20sn4imi6_large.jpg"
              />
            </Box>
          </Flex>
        </Box>

        <Box pos="relative">
          <Flex h={580} direction="column" justify="flex-start" align="center">
            <Box mt={55}>
              <Image
                width={193}
                height={72}
                src="https://www.apple.com/v/home/az/images/logos/apple-watch-series-8/hero_logo_apple_watch_series_8__ezarmmoobhg2_mediumtall.png"
              />
            </Box>

            <Text mt={11} fz={31} align="center" c="white">
              A healthy leap ahead
            </Text>
            <Flex mt={13.6} gap="md" align="center" justify="center">
              <Anchor fz={21}>Learn more &gt;</Anchor>
              <Anchor ml={35} fz={21}>
                Buy &gt;
              </Anchor>
            </Flex>
          </Flex>

          <Box pos="absolute" top={0} style={{ zIndex: -1 }}>
            <Image
              height={580}
              src="https://www.apple.com/v/home/az/images/heroes/apple-watch-series-8/hero_apple_watch_series_8_spring__b1y8wb7xjc9y_large.jpg"
            />
          </Box>
        </Box>
      </SimpleGrid>

      <SimpleGrid
        mt={10}
        mr={10}
        cols={2}
        spacing="sm"
        verticalSpacing="xs"
        breakpoints={[{ maxWidth: '45rem', cols: 1, spacing: 'sm' }]}
      >
        <Box pos="relative">
          <Flex h={640} direction="column" justify="flex-end" align="center">
            <Box top={-1} pos="absolute" style={{ zIndex: -1 }}>
              <Image
                height={640}
                src="https://www.apple.com/v/home/az/images/promos/wwdc23-announce/promo_wwdc23__b68ptht3mro2_large.jpg"
              />
            </Box>

            <Image
              width={200}
              height={38}
              src="https://www.apple.com/v/home/az/images/logos/wwdc23-announce/promo_logo_wwdc23__gcsmmrgbhlme_medium.png"
            />
            <Text mt={12} maw={415} fz={21} color="white" align="center">
              Apple Worldwide Developers Conference. Join us online
              June&nbsp;5‑9.
            </Text>
            <Flex align="center" justify="center">
              <Anchor pb={38} fz={17}>
                Learn more &gt;
              </Anchor>
            </Flex>
          </Flex>
        </Box>

        <Box pos="relative">
          <Flex h={640} direction="column" justify="flex-start" align="center">
            <Title fz={40} mt={53} align="center">
              iPad
            </Title>
            <Text fz={21} align="center">
              Lovable. Drawable. Magical
            </Text>
            <Flex gap="xs" align="center" justify="center">
              <Anchor fz={17}>Learn more &gt;</Anchor>
              <Anchor ml={28} fz={17}>
                Buy &gt;
              </Anchor>
            </Flex>
            <Box top={0} pos="absolute" style={{ zIndex: -1 }}>
              <Image
                height={640}
                src="https://www.apple.com/v/home/az/images/promos/ipad/promo_ipad__fioegapg12qi_large.jpg"
              />
            </Box>
          </Flex>
        </Box>
        <Box pos="relative">
          <Flex h={640} direction="column" justify="flex-start" align="center">
            <Title fz={40} mt={53} color="white" align="center">
              MacBook Pro
            </Title>
            <Text fz={21} color="white" align="center">
              Supercharged by M2&nbsp;Pro and M2 Max.
            </Text>
            <Flex gap="xs" align="center" justify="center">
              <Anchor fz={17}>Learn more &gt;</Anchor>
              <Anchor ml={28} fz={17}>
                Buy &gt;
              </Anchor>
            </Flex>
            <Box top={0} pos="absolute" style={{ zIndex: -1 }}>
              <Image
                height={640}
                src="https://www.apple.com/v/home/az/images/promos/macbook-pro-14-and-16/promo_mbp__ek7p477bkp6q_large.jpg"
              />
            </Box>
          </Flex>
        </Box>
        <Box pos="relative">
          <Flex h={640} direction="column" justify="flex-start" align="center">
            <Title fz={40} mt={53} color="white" align="center">
              HomePod
            </Title>
            <Text fz={21} color="white" align="center">
              Profound sound
            </Text>
            <Flex gap="xs" align="center" justify="center">
              <Anchor fz={17}>Learn more &gt;</Anchor>
              <Anchor ml={28} fz={17}>
                Buy &gt;
              </Anchor>
            </Flex>
            <Box top={0} pos="absolute" style={{ zIndex: -1 }}>
              <Image
                height={640}
                src="https://www.apple.com/v/home/az/images/promos/homepod/promo_homepod__f7jnolq94m2y_large.jpg"
              />
            </Box>
          </Flex>
        </Box>
        <Box pos="relative">
          <Flex h={640} direction="column" justify="flex-start" align="center">
            <Title fz={40} mt={53} color="white" align="center">
              AirPods Pro
            </Title>
            <Text
              w={245}
              pl={128}
              pr={128}
              fz={21}
              color="white"
              align="center"
            >
              Up&nbsp;to&nbsp;2x&nbsp;more Active&nbsp;Noise&nbsp;Cancellation.
            </Text>
            <Flex gap="xs" align="center" justify="center">
              <Anchor c="white" fz={17}>
                Learn more &gt;
              </Anchor>
              <Anchor c="white" ml={28} fz={17}>
                Buy &gt;
              </Anchor>
            </Flex>
            <Box top={0} pos="absolute" style={{ zIndex: -1 }}>
              <Image
                height={640}
                src="https://www.apple.com/v/home/az/images/promos/airpods-pro-campaign/promo__sw58lbodkmqq_large.jpg"
              />
            </Box>
          </Flex>
        </Box>
        <Box h={640} pos="relative">
          <Flex
            mt={53}
            h={640}
            direction="column"
            justify="flex-start"
            align="center"
            gap="xs"
          >
            <Image
              width={100}
              height={30}
              src="https://www.apple.com/v/home/az/images/logos/apple-card/logo__dcojfwkzna2q_medium.png"
            />
            <Text w={290} pl={118} pr={118} fz={21} align="center">
              Get up to 3% Daily&nbsp;Cash back with every purchase.
            </Text>
            <Flex gap="xs" align="center" justify="center">
              <Anchor fz={17}>Learn more &gt;</Anchor>
              <Anchor ml={28} fz={17}>
                Buy &gt;
              </Anchor>
            </Flex>
            <Box top={0} pos="absolute" style={{ zIndex: -1 }}>
              <Image
                height={640}
                src="https://www.apple.com/v/home/az/images/promos/apple-card/tile__cauwwcyyn9hy_large.jpg"
              />
            </Box>
          </Flex>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Banner;
