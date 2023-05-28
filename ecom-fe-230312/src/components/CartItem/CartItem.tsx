<<<<<<< HEAD
import './CartItem_Style.css';
import pic from '../image/iphone14-yellow.webp';

const CartItem = () => {
  return (
    <div className="cart-products">
      <div className="cart-product">
        <div className="img-container">
          <img className="img" src={pic} alt="" />
        </div>
        <div className="product-details">
          <span className="name">iPhone 14 128GB Yellow</span>
          <div className="quantity-buttons">
            <button className="minus">-</button>
            <span className="quantity">5</span>
            <button className="plus">+</button>
          </div>
          <div className="total-text">
            <span className="number">5</span>
            <span>x</span>
            <span className="price">&#36;1000</span>
          </div>
        </div>
        <div className="delete">x</div>
      </div>
    </div>
  );
};
=======
import pic from "../image/iphone14-yellow.webp"
import { Image, Container, Button, Title, Text, Flex , Box} from "@mantine/core";

const CartItem = () => {
    return (
        <>
        <Box sx={{ borderTopStyle: 'solid', borderTopColor: 'gray', borderTopWidth: '2px', 
            borderBottomStyle: 'solid', borderBottomColor: 'gray', borderBottomWidth: '2px',
            backgroundColor: 'white'
        }}>
            <Flex
                gap="xs"
                justify="flex-start"
                align="left"
                direction="row"
            >
                <Image width={130} src='../image/iphone-14-yellow.png'/>
                <Flex
                    gap="xs"
                    justify="flex-start"
                    align="left"
                    direction="column"
                >
                    <Title tt={"uppercase"}>Iphone</Title>
                    <Flex
                        justify="flex-start"
                        align="left"
                        direction="row"
                    >
                        <Button w = {40} h = {40} p = {0} bg="gray" sx={{fontSize: '25px', '&:hover': { backgroundColor: 'black' }}}>+</Button>
                        <Text w = {50} h = {40} p = {0} pr = {0} sx={{ fontSize: '25px', fontWeight: 'bold', textAlign: 'center' }}>10</Text>
                        <Button w = {40} h = {40} p = {0} bg="gray" sx={{fontSize: '25px','&:hover': { backgroundColor: 'black' }}}>-</Button>
                    </Flex>
                    <Flex
                        justify="flex-start"
                        align="left"
                        direction="row"
                    >
                        <Text tt={"uppercase"} mr={10} fw={600}>Subtotal:</Text>
                        <Text mr={3} fw={600}>1000</Text>
                        <Text mr={3} fw={600}>&#36; x</Text>
                        <Text fw={600}>1</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
        <Flex
           justify="flex-start"
           align="left"
           direction="row"
           sx={{ borderBottomStyle: 'solid', borderBottomColor: 'gray', borderBottomWidth: '2px',
            backgroundColor: 'white', marginTop: '10px'}}
        >
            <Text tt={"uppercase"} mr={10} ml={10} mb={7} fw={600}>Total:</Text>
            <Text mr={3} fw={600}>10000</Text>
            <Text fw={600}>&#36;</Text>
        </Flex>
        </>
    );
}
>>>>>>> 7339538cebc84de8c4a01ec64f46c02b680a9a42

export default CartItem;
