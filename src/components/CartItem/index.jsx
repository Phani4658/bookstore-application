import { AiTwotoneDelete } from "react-icons/ai";
import './index.css'

const CartItem = (props) => {
  // eslint-disable-next-line react/prop-types
  const { itemDetails } = props;
  // eslint-disable-next-line react/prop-types
  const { image,title,price,quantity } = itemDetails;

  return (
    <li className="cart-item">
      <img src={image} className="cart-item-image" />
      <div className="cart-book-details">
        <h3 className="cart-item-book-title">{title}</h3>
        <p className='cart-item-book-price'>{price}</p>
        <input type='number' className='cart-item-quantity' value={quantity} />
        <p className='cart-item-book-price'>{price}</p>
        <AiTwotoneDelete /> 
      </div>
    </li>
  );
};

export default CartItem;
