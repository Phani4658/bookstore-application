import { Component } from "react";
import { Route, Routes, Navigate } from "react-router-dom"; // Changed 'redirect' to 'Navigate'
import "./App.css";
import Home from "./components/Home";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import Checkout from "./components/Checkout";
import CartContext from "./context/CartContext";

class App extends Component {
  state = {
    cartItems: [],
  };

  addCartItem = (product) => {
    const { cartItems } = this.state;

    const avalibleBook = cartItems.find(
      (item) => item.isbn13 == product.isbn13
    );
    if (avalibleBook === undefined) {
      this.setState({ cartItems: [...cartItems, product] });
    } else {
      const updatedBook = {
        ...avalibleBook,
        quantity: avalibleBook.quantity + product.quantity,
      };

      const index = cartItems.indexOf(avalibleBook);
      if (index > -1) {
        cartItems.splice(index, 1);
      }

      const newCartItems = [...cartItems, updatedBook];
      this.setState({ cartItems: newCartItems });
    }
  };

  deleteCartItem = (isbn13) => {
    const { cartItems } = this.state;
    const productDetails = cartItems.find((item) => item.isbn13 === isbn13);
    const index = cartItems.indexOf(productDetails);
    cartItems.splice(index, 1);
    this.setState({ cartItems });
  };

  changeCartItemQuantity = (isbn13, quantity) => {
    const { cartItems } = this.state;
    const productDetails = cartItems.find((item) => item.isbn13 === isbn13);
    const index = cartItems.indexOf(productDetails);
    cartItems.splice(index, 1);
    const newProductDetails = { ...productDetails, quantity };
    this.setState({ cartItems: [...cartItems, newProductDetails] });
  };

  render() {
    const {cartItems} = this.state;
    return (
      <CartContext.Provider
      value={{
        cartList: cartItems,
        addCartItem: this.addCartItem,
        deleteCartItem: this.deleteCartItem,
        changeCartItemQuantity: this.changeCartItemQuantity,
      }}
      >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/books" element={<BookList />} />
          <Route exact path="/books/:id" element={<BookDetails />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" />} />{" "}
          {/* Use Navigate to redirect */}
        </Routes>
      </CartContext.Provider>
    );
  }
}

export default App;
