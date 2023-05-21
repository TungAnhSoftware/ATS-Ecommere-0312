import { useState, useRef } from 'react';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';

import { Button, Box, createStyles, Image, rem, Text } from '@mantine/core';

const useStyles = createStyles(() => ({
  card: {
    position: 'relative'
  },

  box: {
    position: 'absolute',
    bottom: rem(30),
    left: rem(100)
  },
  button: {
    position: 'absolute',
    bottom: rem(30),
    left: rem(100),
    height: rem(40),
    width: rem(138)
  },

  carousel: {
    height: rem(700)
  },

  carouselIndicators: {
    position: 'absolute',
    bottom: rem(10)
  },
  carouselSlide: {
    transition: 'width 1000ms ease'
  },

  carouselIndicator: {
    width: rem(7),
    height: rem(7),
    transition: 'width 250ms ease',
    backgroundColor: '#00000029',
    margin: '0 4px',

    '&[data-active]': {
      backgroundColor: '#0000008F'
    }
  }
}));

const images = [
  'https://is3-ssl.mzstatic.com/image/thumb/ageP1PYyLi7UlNiWMva32Q/980x551.jpg',
  'https://is3-ssl.mzstatic.com/image/thumb/qxFrviRA_c3vX8rbFyv7jQ/980x551.jpg',
  'https://is2-ssl.mzstatic.com/image/thumb/A_R7PS9DPKeHWxifN_JHFg/980x551.jpg',
  'https://is2-ssl.mzstatic.com/image/thumb/t4xkErdx3vLmYXI2FJNSgw/980x551.jpg',
  'https://is4-ssl.mzstatic.com/image/thumb/yj6AjgIcNlSHzmA0A6GOEA/980x551.jpg',
  'https://is5-ssl.mzstatic.com/image/thumb/vkV13QebT23nTZQu-DpqDg/980x551.jpg',
  'https://is5-ssl.mzstatic.com/image/thumb/CwieDz2Cbgs_m2X6Yt37cQ/980x551.jpg',
  'https://is5-ssl.mzstatic.com/image/thumb/nnWkHXH4wyIt0sZovHx0tA/980x551.jpg',
  'https://is1-ssl.mzstatic.com/image/thumb/6FjOuBruyl0UJVGZ-g05Cg/980x551.jpg'
];

const CarouselCard = () => {
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  const { classes } = useStyles();

  const slides = images.map((image) => (
    <Carousel.Slide
      key={image}
      classNames={{
        root: classes.card
      }}
    >
      <Image src={image} height={663} />

      <Box>
        <Button
          radius="xl"
          variant="white"
          color="dark"
          classNames={{
            root: classes.button
          }}
        >
          Stream now
        </Button>
        <Text>Action</Text>
      </Box>
    </Carousel.Slide>
  ));

  return (
    <Carousel
      withControls={false}
      withIndicators
      slideSize="70%"
      height={667}
      slideGap="md"
      loop
      plugins={[autoplay.current]}
      classNames={{
        root: classes.carousel,
        indicator: classes.carouselIndicator,
        indicators: classes.carouselIndicators,
        slide: classes.carouselSlide
      }}
    >
      {slides}
    </Carousel>
  );
};
export default CarouselCard;
