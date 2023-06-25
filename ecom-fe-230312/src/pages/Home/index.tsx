// Components

import Banner from './Components/Banner';
import CarouselCard from './Components/Slides';
import { Anchor, Box, Text } from '@mantine/core';

const Home = () => {
  return (
    <>
      {/* Header */}
      {/* Navbar components */}
      <Box mb={20}>
        <Text fz="sm" ta="center" lineClamp={2}>
          Get $200–$600 in credit toward iPhone 14 or iPhone 14 Pro when you
          trade in iPhone 11 or higher.&nbsp;
          <Anchor href="#">Shop iPhone &gt;</Anchor>
        </Text>
      </Box>
      {/* Content */}
      <Banner />
      <CarouselCard />
      {/* Footer */}
    </>
  );
};

export default Home;
