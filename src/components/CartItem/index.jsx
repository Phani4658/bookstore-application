import { AiTwotoneDelete } from "react-icons/ai";
import "./index.css";
import CartContext from "../../context/CartContext";

const CartItem = (props) => {
  // eslint-disable-next-line react/prop-types
  const { itemDetails } = props;
  // eslint-disable-next-line react/prop-types
  const { image, title, price, quantity,isbn13,numericPrice } = itemDetails;

  return (
    <CartContext.Consumer>
      {(value) => {
        const {deleteCartItem,changeCartItemQuantity} = value
        const onClickDeleteIcon = () => {
          deleteCartItem(isbn13);
        }

        const onChangeQuantity = (e) => {
          changeCartItemQuantity(isbn13,parseInt(e.target.value));
        }


        return (
          <li className="cart-item">
            <img src={image} className="cart-item-image" />
            <div className="cart-book-details">
              <h3 className="cart-item-book-title">{title}</h3>
              <p className="cart-item-book-price">{price}</p>
              <input
                type="number"
                className="cart-item-quantity"
                value={quantity}
                onChange={onChangeQuantity}
              />
              <p className="cart-item-book-price">${(quantity * numericPrice).toFixed(2)}</p>
              <AiTwotoneDelete onClick={onClickDeleteIcon} className="delete-icon" />
            </div>
          </li>
        );
      }}
    </CartContext.Consumer>
  );
};

export default CartItem;
