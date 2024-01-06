import "./index.css";

// eslint-disable-next-line react/prop-types
const CheckoutItem = ({ details }) => {
  // eslint-disable-next-line react/prop-types
  const { image, quantity, title, price } = details;

  return (
    <li className="checkout-item-card">
      <div className="checkout-img-card">
        <img src={image} className="checkout-img" />
        <p className="qunatity">{quantity}</p>
      </div>
      <div className="price-and-title">
        <p>{title}</p>
        <p>{price}</p>
      </div>
    </li>
  );
};

export default CheckoutItem;
