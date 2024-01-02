import { Component } from "react";
import Header from "../Header";
import "./index.css";
import BookItem from "../BookItem";
import PriceRange from "../PriceRange";
import SearchInput from "../SearchInput";
import Loader from "../Loader";
import ErrorMessage from "../../ErrorMessage";

const APIStatusConstants = {
  LOADING: "loading",
  FAILURE: "failure",
  SUCCESS: "success",
};

class BookList extends Component {
  state = { booksList: [], apiStatus: APIStatusConstants.LOADING };

  fetchBooks = async () => {
    const apiUrl = "https://api.itbook.store/1.0/new";
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

  renderSuccessView = () => {
    const { booksList } = this.state;
    return (
      <ul className="books-container">
        {booksList.map((book) => (
          <BookItem bookDetails={book} key={book.isbn13} />
        ))}
      </ul>
    );
  };

  renderBooksList = () => {
    const { apiStatus } = this.state;
    console.log(apiStatus);
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

  render() {
    const {apiStatus} = this.state;
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
          <SearchInput searchBooks={this.searchBooks} apiStatus={apiStatus}/>
          <div className="book-items-container">
            <PriceRange />
            {this.renderBooksList()}
          </div>
        </div>
      </>
    );
  }
}

export default BookList;
