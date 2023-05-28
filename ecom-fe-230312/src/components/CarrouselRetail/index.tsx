
import CardForCarrousel from './CardCarrousel';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import {useMantineTheme} from '@mantine/core';

const data = [
    {
        image: 'https://rtlimages.apple.com/cmc/dieter/store/16_9/R250.png?resize=336:189&output-format=jpg&output-quality=85&interpolation=progressive-bicubic"',
        name: 'Apple West 14th Street',
        address: '401W 14th Street',
        postCode: 'New York, NY 10014'
    },
    {
        image: "https://rtlimages.apple.com/cmc/dieter/store/16_9/R307.png?resize=336:189&output-format=jpg&output-quality=85&interpolation=progressive-bicubic",
        name: 'Apple Maine Mall',
        address: '364 Maine Mall Road',
        postCode: 'South Portland, ME 04106'
    },
    {
        image: "https://rtlimages.apple.com/cmc/dieter/store/16_9/R035.png?resize=300:169&output-format=jpg&output-quality=85&interpolation=progressive-bicubic",
        name: 'Apple Michigan Avenue',
        address: '401 North Michigan Avenue',
        postCode: 'Chicago, IL 60611'
    },
    {
        image: "https://rtlimages.apple.com/cmc/dieter/store/16_9/R549.png?resize=300:169&output-format=jpg&output-quality=85&interpolation=progressive-bicubic",
        name: 'Apple Quaker Bridge',
        address: '150 Quaker Bridge Mall',
        postCode: 'Lawrend Township, NJ 08648'
    },
    {
        image: "https://rtlimages.apple.com/cmc/dieter/store/16_9/R149.png?resize=300:169&output-format=jpg&output-quality=85&interpolation=progressive-bicubic",
        name: 'Apple Boyslon Street',
        address: '815 Boyslon Street',
        postCode: 'Boston, MA 02116'
    },
    {
        image: "https://rtlimages.apple.com/cmc/dieter/store/16_9/R149.png?resize=300:169&output-format=jpg&output-quality=85&interpolation=progressive-bicubic",
        name: 'Apple Stoneridge Mall',
        address: 'One Stoneridge Mall',
        postCode: 'Pleasanton, CA 94588'
    },
    {
        image: "https://rtlimages.apple.com/cmc/dieter/store/16_9/R028.png?resize=300:169&output-format=jpg&output-quality=85&interpolation=progressive-bicubic",
        name: 'Apple Kenwood Towne Centre',
        address: '7875 Montgomery Road',
        postCode: 'Cincinnati, OH 45236'
    },
    {
        image: "https://rtlimages.apple.com/cmc/dieter/store/16_9/R016.png?resize=300:169&output-format=jpg&output-quality=85&interpolation=progressive-bicubic",
        name: 'Apple Walden Galleria',
        address: 'G116 Walden Galleria',
        postCode: 'Buffalo, NY 14225'
    },
    {
        image: "https://rtlimages.apple.com/cmc/dieter/store/16_9/R110.png?resize=300:169&output-format=jpg&output-quality=85&interpolation=progressive-bicubic",
        name: 'Apple South Shore',
        address: '250 Granite Street',
        postCode: 'Braintree, MA 02184'
    }
]
const CarouselContent = () => {
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const slides = data.map((item) => (
        <Carousel.Slide key={item.name}>
            <CardForCarrousel image={item.image} name={item.name} address={item.address} postCode={item.postCode} />
        </Carousel.Slide>
    ));
    return (
        <Carousel
            height="331px"
            slideSize="33.333333%"
            slidesToScroll={mobile ? 1 : 3}
            style={{ width: '1020px' }}
            breakpoints={[
                { maxWidth: 'md', slideSize: '50%' },
                { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
            ]}
            styles={{
                control: {
                    '&[data-inactive]': {
                        opacity: 0,
                        cursor: 'default',
                    },
                },
            }}
        >
            {slides}
        </Carousel>
    )
}

export default CarouselContent
