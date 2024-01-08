import { Component } from "react";
import Header from "../Header";
import "./index.css";
import BookItem from "../BookItem";
import PriceRange from "../PriceRange";
import SearchInput from "../SearchInput";
import Loader from "../Loader";
import ErrorMessage from "../ErrorMessage";

const APIStatusConstants = {
  LOADING: "loading",
  FAILURE: "failure",
  SUCCESS: "success",
};

class BookList extends Component {
  state = {
    booksList: [],
    filteredBooks: [],
    apiStatus: APIStatusConstants.LOADING,
    priceRange: [0, 0],
  };

  fetchBooks = async () => {
    const apiUrl = "https://api.itbook.store/1.0/new";
    this.setState({ apiStatus: APIStatusConstants.LOADING });
    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        const newBookList = data.books.map((bookDetails) => {
          return {
            ...bookDetails,
            numericPrice: parseFloat(bookDetails.price.substring(1)),
          };
        });
        const numericPrices = newBookList.map((book) => book.numericPrice);
        this.setState({
          booksList: newBookList,
          apiStatus: APIStatusConstants.SUCCESS,
          priceRange: [Math.min(...numericPrices), Math.max(...numericPrices)],
        });
      } else {
        this.setState({ booksList: APIStatusConstants.FAILURE });
      }
    } catch (e) {
      this.setState({ apiStatus: APIStatusConstants.FAILURE });
    }
  };

  componentDidMount() {
    this.fetchBooks();
  }

  searchBooks = async (searchQuery) => {
    const apiUrl = `https://api.itbook.store/1.0/search/${searchQuery}`;
    this.setState({ apiStatus: APIStatusConstants.LOADING });
    try {
      const response = await fetch(apiUrl);

      if (response.ok) {
        const data = await response.json();
        this.setState({
          booksList: data.books,
          apiStatus: APIStatusConstants.SUCCESS,
        });
      } else {
        this.setState({ booksList: APIStatusConstants.FAILURE });
      }
    } catch {
      this.setState({ apiStatus: APIStatusConstants.FAILURE });
    }
  };

  fliterBooks = () => {
    const { priceRange, booksList } = this.state;
    const filteredBooks = booksList.filter(
      (book) =>
        book.numericPrice >= priceRange[0] && book.numericPrice <= priceRange[1]
    );

    console.log(filteredBooks)
    this.setState({ filteredBooks });
  };

  renderSuccessView = () => {
    const { booksList, filteredBooks } = this.state;
    console.log(filteredBooks)
    const booksToDisplay = filteredBooks.length > 0 ? filteredBooks : booksList;
    console.log(booksToDisplay)

    return (
      <ul className="books-container">
        {booksToDisplay.map((book) => (
          <BookItem bookDetails={book} key={book.isbn13} />
        ))}
      </ul>
    );
  };

  renderBooksList = () => {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case APIStatusConstants.LOADING:
        return <Loader />;
      case APIStatusConstants.SUCCESS:
        return this.renderSuccessView();
      case APIStatusConstants.FAILURE:
        return <ErrorMessage fetchBooks={this.fetchBooks} />;
      default:
        return null;
    }
  };

  updateMinRange = (minValue) => {
    minValue = parseInt(minValue);
    minValue = Number.isNaN(minValue) ? 0 : minValue;
    const { priceRange } = this.state;
    const newPriceRange = [minValue, priceRange[1]];
    this.setState({ priceRange: newPriceRange }, this.fliterBooks);
  };

  updateMaxRange = (maxValue) => {
    maxValue = parseInt(maxValue);
    maxValue = Number.isNaN(maxValue) ? 0 : maxValue;
    const { priceRange } = this.state;
    const newPriceRange = [priceRange[0], maxValue];
    this.setState({ priceRange: newPriceRange }, this.fliterBooks);
  };

  updateRange = (range) => {
    this.setState({ priceRange: range }, this.fliterBooks);
  };

  render() {
    const { apiStatus, priceRange } = this.state;
    return (
      <>
        <Header />
        <div className="booklist-banner">
          <h1 className="booklist-title">Available Books</h1>
          <p className="booklist-description">
            Explore worlds, unravel mysteries, and expand horizons with our
            diverse collection of captivating books.
          </p>
          <div className="triangle"></div>
        </div>
        <div className="search-and-booklist-container">
          <SearchInput searchBooks={this.searchBooks} apiStatus={apiStatus} />
          <div className="book-items-container">
            <PriceRange
              priceRange={priceRange}
              updateMaxRange={this.updateMaxRange}
              updateMinRange={this.updateMinRange}
              updateRange={this.updateRange}
            />
            {this.renderBooksList()}
          </div>
        </div>
      </>
    );
  }
}

export default BookList;
