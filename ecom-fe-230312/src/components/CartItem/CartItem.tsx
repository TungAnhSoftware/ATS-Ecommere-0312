import "./CartItem_Style.css";
import pic from "../image/iphone14-yellow.webp"

const CartItem = () => {
    return <div className="cart-products">
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
    </div>;
}

export default CartItem;