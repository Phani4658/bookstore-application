import { MdKeyboardArrowLeft } from "react-icons/md";
import "./index.css";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const UserDetailsForm = ({ onClickCheckout }) => {
  const placeOrder = () => {
    onClickCheckout();
  };
  return (
    <form className="user-form" onSubmit={placeOrder}>
      <div>
        <h4 className="user-form-heading">Contact</h4>
        <input type="email" placeholder="Email" required />
      </div>
      <div className="form-bottom-section">
        <h4 className="user-form-heading">Shipping address</h4>
        <select>
          <option>India</option>
        </select>
        <div className="same-row">
          <input type="text" placeholder="First name" required />
          <input type="text" placeholder="Last name" required />
        </div>
        <input type="text" placeholder="Address" required />
        <input type="text" placeholder="Apartment,Suite(Optional)" />
        <div className="same-row">
          <input type="text" placeholder="City" required />
          <input type="text" placeholder="State" required />
          <input type="text" placeholder="Pincode" required />
        </div>
        <input type="text" placeholder="Phone" required />
        <div className="buttons-container">
          <button className="place-order-button" type="submit">
            Place Order
          </button>
          <Link to="/cart">
            <button className="return-button">
              <MdKeyboardArrowLeft /> Return to Cart
            </button>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default UserDetailsForm;
