import CartItem from '../CartItem/CartItem';
import './Cart_Style.css';

const Cart = () => {
  return (
    <div className="cart-panel">
      <div className="opac-layer" />
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
        </div>
        {/* <div className="empty-cart">
                <span>No Product In The Cart</span>
                <button className="return-cta">Return To Shop</button>
            </div> */}
        <CartItem />
        <div className="cart-footer">
          <div className="subtotal">
            <span className="text">Subtotal</span>
            <span className="text total">&#36;5000</span>
          </div>
          <div className="button">
            <button className="checkout-cta">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
