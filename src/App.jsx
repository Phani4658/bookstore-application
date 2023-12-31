import { Component } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'; // Changed 'redirect' to 'Navigate'
import './App.css';
import Home from './components/Home';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import Cart from './components/Cart';
import NotFound from './components/NotFound';
import Checkout from './components/Checkout';

class App extends Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/books" element={<BookList />} />
        <Route exact path="/books/:id" element={<BookDetails />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" />} /> {/* Use Navigate to redirect */}
      </Routes>
    );
  }
}

export default App;
