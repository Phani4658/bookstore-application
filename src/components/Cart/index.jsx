import { Component } from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import "./index.css";
import CartItem from "../CartItem";
class Cart extends Component {
  state = {
    cart: [
      {
        title: "Practical MongoDB",
        subtitle: "Architecting, Developing, and Administering MongoDB",
        isbn13: "9781484206485",
        price: "$32.04",
        image: "https://itbook.store/img/books/9781484206485.png",
        url: "https://itbook.store/books/9781484206485",
        quantity: "1",
      },
      {
        title: "Practical MongoDB",
        subtitle: "Architecting, Developing, and Administering MongoDB",
        isbn13: "9781484206485",
        price: "$32.04",
        image: "https://itbook.store/img/books/9781484206485.png",
        url: "https://itbook.store/books/9781484206485",
        quantity: "1",
      },
    ],
  };

  renderNoItemsView = () => {
    return (
      <div className="no-items-container">
        <img
          src="https://img.freepik.com/free-vector/supermarket-shopping-cart-concept-illustration_114360-22408.jpg?w=826&t=st=1704383093~exp=1704383693~hmac=6821a44202781d87e30887b8ec34789c3209e4ff43e362c96f3d22310ac5a1f0"
          className="empty-cart"
        />
        <h3 className="no-items-text">There are no books in your cart</h3>
      </div>
    );
  };
  render() {
    const { cart } = this.state;
    return (
      <>
        <Header />
        <div className="cart-container">
          <h1 className="cart-main-heading">My Bag</h1>
          <div className="cart-items-and-summary-container">
            <div className="cart-left-part">
              {cart.length === 0 && this.renderNoItemsView()}
              {cart.length !== 0 && (
                <ul className="cart-items-container">
                  {cart.map((itemDetails) => (
                    <CartItem
                      itemDetails={itemDetails}
                      key={itemDetails.isbn13}
                    />
                  ))}
                </ul>
              )}
              <Link
                to="/books"
                className={cart.length === 0 ? "center-button" : null}
              >
                <button className="back-to-shop-button">
                  Continue Shopping
                </button>
              </Link>
            </div>
            <div className="cart-right-part">
              <h3 className="order-summary-heading">Order Summary</h3>
              <hr />
              <p className="total-amount">
                Amount Payable: <span className="amount">{cart[0].price}</span>
              </p>
              <p className="taxes-text">(inclusive of taxes)</p>
              <hr />
              <h4 className="delivery-instructions-heading">
                Special Delivery Instructions
              </h4>
              <textarea className="delivery-instructions" rows={8}></textarea>
              <Link to="/checkout">
                <button className="checkout-btn">Proceed to Checkout</button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Cart;
