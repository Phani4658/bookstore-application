import { Component } from "react";
import Header from "../Header";
import UserDetailsForm from "../UserDetailsForm";
import "./index.css";
import CartContext from "../../context/CartContext";
import CheckoutItem from "../CheckoutItem";
import { Navigate,Link } from "react-router-dom";

class Checkout extends Component {
  state = {
    isOrderPlaced: false,
  };

  onClickCheckout = () => {
    this.setState((prevState) => ({ isOrderPlaced: !prevState.isOrderPlaced }));
  };

  successOrderPlaced = () => {
    return (
      <div className="no-items-container">
        <img
          src="https://img.freepik.com/free-vector/order-confirmed-concept-illustration_114360-6599.jpg?w=826&t=st=1704534689~exp=1704535289~hmac=05ed06c909f7d66ce0f6f89a8c4f8543512dd28d966c77cb1e52986c8e0a023b"
          className="empty-cart"
        />
        <h3 className="no-items-text">Order Placed Successfully</h3>
        <Link to = "/books">
          <button className="back-to-shop-button">Continue Shopping</button>
        </Link>
      </div>
    );
  };

  render() {
    const { isOrderPlaced } = this.state;
    return (
      <CartContext.Consumer>
        {(value) => {
          const { cartList,emptyCart } = value;
          if (cartList.length === 0) return <Navigate to="/" />;
          let totalAmount = 0.0;
          cartList.map((book) => {
            totalAmount += book.numericPrice * book.quantity;
          });
          totalAmount = totalAmount.toFixed(2);
          return (
            <>
              <Header />
              {isOrderPlaced ? (
                this.successOrderPlaced()
              ) : (
                <div className="checkout-content">
                  <div className="details-form">
                    <UserDetailsForm onClickCheckout={this.onClickCheckout} emptyCart={emptyCart} />
                  </div>
                  <div className="order-summary">
                    <div className="summary-container">
                      <ul className="checkout-items-container">
                        {cartList.map((item) => {
                          return (
                            <CheckoutItem details={item} key={item.isbn13} />
                          );
                        })}
                      </ul>
                      <div className="discount-card">
                        <input
                          type="text"
                          placeholder="Discount code or gift card"
                          className="discount"
                        />
                        <button className="apply-discount-btn" disabled>
                          Apply
                        </button>
                      </div>
                      <p className="total-price">
                        Total: <span>${totalAmount}</span>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </>
          );
        }}
      </CartContext.Consumer>
    );
  }
}

export default Checkout;
