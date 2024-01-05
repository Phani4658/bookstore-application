import { Component } from "react";
import Header from "../Header";
import UserDetailsForm from "../UserDetailsForm";
import "./index.css";

class Checkout extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="checkout-content">
          <div className="details-form">
            <UserDetailsForm />
          </div>
          <div className="order-summary"></div>
        </div>
      </>
    );
  }
}

export default Checkout;
