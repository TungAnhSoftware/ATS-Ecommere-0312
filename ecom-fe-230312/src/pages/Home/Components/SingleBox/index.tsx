import { Anchor, Box, Flex, Image, Text, Title } from '@mantine/core';

const SingleBox = (props: {
  title: string;
  subtitle1: string;
  subtitle2: string;
  color: string;
  img: string;
  logo: string;
  width: number;
  height: number;
  justify: string;
  anchor1: string;
  anchor2: string;
}) => {
  return (
    <Box w="100%" component="a" pos="relative">
      <Flex h={600} direction="column" justify={props.justify} align="center">
        <Box top={0} pos="absolute" style={{ zIndex: -1 }}>
          <Image height={600} src={props.img} />
        </Box>
        <Flex direction="column" m={30} align="center">
          {props.title ? (
            <Title fz={45} fw={600} color={props.color} align="center">
              {props.title}
            </Title>
          ) : (
            <Image width={props.width} height={props.height} src={props.logo} />
          )}

          <Text fz={22} color={props.color} align="center">
            {props.subtitle1}
          </Text>
          <Text fz={22} color={props.color} align="center">
            {props.subtitle2}
          </Text>
          <Flex gap="lg" align="center" justify="center">
            <Anchor fz={19}>{props.anchor1}</Anchor>
            {props.anchor2 ? <Anchor fz={19}>{props.anchor2}</Anchor> : ' '}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
export default SingleBox;
