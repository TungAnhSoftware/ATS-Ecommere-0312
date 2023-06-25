import { Box, SimpleGrid } from '@mantine/core';

import SingleBox from '../SingleBox';

const Banner = () => {
  return (
    <Box mt={20} mb={20}>
      {/* Content */}
      <SimpleGrid
        cols={1}
        spacing="sm"
        verticalSpacing="xs"
        breakpoints={[
          { maxWidth: '45rem', cols: 1, spacing: 'sm', verticalSpacing: 'xs' }
        ]}
      >
        {/* */}
        <SingleBox
          title="iPhone 14 Pro"
          subtitle1="Pro.Beyond."
          subtitle2=""
          color="white"
          img="https://www.apple.com/v/home/az/images/heroes/iphone-14-pro/hero_iphone14pro_spring__9xo85pm6sbmm_large.jpg"
          logo=""
          width={0}
          height={0}
          justify="flex-start"
          anchor1="Learn more &gt;"
          anchor2=" Buy &gt;"
        />
        <SingleBox
          title="iPhone 14"
          subtitle1="Two great sizes."
          subtitle2="Now with a splash of yellow."
          color="black"
          img="https://www.apple.com/v/home/az/images/heroes/iphone-14/hero_iphone14_yellow__eun20sn4imi6_large.jpg"
          logo=""
          width={0}
          height={0}
          justify="flex-start"
          anchor1="Learn more &gt;"
          anchor2=" Buy &gt;"
        />
        <SingleBox
          title=""
          subtitle1="A healthy leap ahead"
          subtitle2=""
          color="white"
          img="https://www.apple.com/v/home/az/images/heroes/apple-watch-series-8/hero_apple_watch_series_8_spring__b1y8wb7xjc9y_large.jpg"
          logo="https://www.apple.com/v/home/az/images/logos/apple-watch-series-8/hero_logo_apple_watch_series_8__ezarmmoobhg2_mediumtall.png"
          width={193}
          height={72}
          justify="flex-start"
          anchor1="Learn more &gt;"
          anchor2=" Buy &gt;"
        />
      </SimpleGrid>

      <SimpleGrid
        mt={10}
        cols={2}
        spacing="sm"
        verticalSpacing="xs"
        breakpoints={[{ maxWidth: '45rem', cols: 1, spacing: 'sm' }]}
      >
        <SingleBox
          title=""
          subtitle1="Apple Worldwide Developers Conference."
          subtitle2="Join us online
              June&nbsp;5‑9."
          color="white"
          img="https://www.apple.com/v/home/az/images/promos/wwdc23-announce/promo_wwdc23__b68ptht3mro2_large.jpg"
          logo="https://www.apple.com/v/home/az/images/logos/wwdc23-announce/promo_logo_wwdc23__gcsmmrgbhlme_medium.png"
          width={200}
          height={38}
          justify="flex-end"
          anchor1="Learn more &gt;"
          anchor2=""
        />
        <SingleBox
          title="iPad"
          subtitle1=" Lovable. Drawable. Magical."
          subtitle2=""
          color="black"
          img="https://www.apple.com/v/home/az/images/promos/ipad/promo_ipad__fioegapg12qi_large.jpg"
          logo=""
          width={0}
          height={0}
          justify="flex-start"
          anchor1="Learn more &gt;"
          anchor2=" Buy &gt;"
        />
        <SingleBox
          title="MacBook Pro"
          subtitle1="Supercharged by M2&nbsp;Pro and M2 Max."
          subtitle2="oin us online
              June&nbsp;5‑9."
          color="white"
          img="https://www.apple.com/v/home/az/images/promos/macbook-pro-14-and-16/promo_mbp__ek7p477bkp6q_large.jpg"
          logo=""
          width={200}
          height={38}
          justify="flex-start"
          anchor1="Learn more &gt;"
          anchor2=" Buy &gt;"
        />
        <SingleBox
          title="HomePod"
          subtitle1="Profound sound"
          subtitle2=""
          color="white"
          img="https://www.apple.com/v/home/az/images/promos/homepod/promo_homepod__f7jnolq94m2y_large.jpg"
          logo=""
          width={200}
          height={38}
          justify="flex-start"
          anchor1="Learn more &gt;"
          anchor2=" Buy &gt;"
        />
        <SingleBox
          title="AirPods Pro"
          subtitle1="Up&nbsp;to&nbsp;2x&nbsp;more Active&nbsp;Noise&nbsp;Cancellation."
          subtitle2=""
          color="white"
          img="https://www.apple.com/v/home/az/images/promos/airpods-pro-campaign/promo__sw58lbodkmqq_large.jpg"
          logo=""
          width={200}
          height={38}
          justify="flex-start"
          anchor1="Learn more &gt;"
          anchor2=" Buy &gt;"
        />
        <SingleBox
          title=""
          subtitle1="Get up to 3% Daily&nbsp;Cash"
          subtitle2=" back with every purchase."
          color="black"
          img="https://www.apple.com/v/home/az/images/promos/apple-card/tile__cauwwcyyn9hy_large.jpg"
          logo="https://www.apple.com/v/home/az/images/logos/apple-card/logo__dcojfwkzna2q_medium.png"
          width={100}
          height={30}
          justify="flex-start"
          anchor1="Learn more &gt;"
          anchor2=" Buy &gt;"
        />
      </SimpleGrid>
    </Box>
  );
};

export default Banner;
