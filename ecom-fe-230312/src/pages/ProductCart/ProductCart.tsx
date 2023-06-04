import { Box, Flex, Title, Stack, Button } from '@mantine/core';
import CartItem from '../../components/CartItem/CartItem';

const ProductCart = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        backgroundColor: 'gray',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Flex
        w={600}
        h="100%"
        bg="white"
        gap="xs"
        justify="flex-start"
        align="center"
        direction="column"
        wrap="wrap"
        sx={{
          borderRadius: '10px',
          border: 'solid',
          borderColor: 'gray',
          borderWidth: '2px'
        }}
      >
        <Title order={2} fw={600} tt="uppercase" mt={20}>
          products cart
        </Title>
        <Stack w="100%" spacing="0">
          <CartItem />
        </Stack>
        <Button
          bg="gray"
          w={180}
          h={50}
          fz={22}
          tt="uppercase"
          sx={{ '&:hover': { backgroundColor: 'black' } }}
        >
          Checkout
        </Button>
      </Flex>
    </Box>
  );
};

export default ProductCart;
