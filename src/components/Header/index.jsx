import { Component } from "react";
import { IoBagOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./index.css";

class Header extends Component {
  render() {
    return (
      <>
        <nav>
          <Link to="/">
            <h1 className="nav-heading">Bookster</h1>
          </Link>
          <div className="links-container">
            <Link to="/" className="nav-links">Home</Link>
            <Link to="/books" className="nav-links">Books</Link>
            <Link to="/cart" className="cart-logo">
              <IoBagOutline className="cart-icon" />
              <span className="cart-orders">0</span>
            </Link>
          </div>
        </nav>
      </>
    );
  }
}

export default Header;
