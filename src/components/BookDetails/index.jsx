import { Component } from "react";
import Header from "../Header";
import withRouter from "../WithRouter/withRouter";
import Loader from "../Loader";
import ErrorMessage from "../ErrorMessage";
import "./index.css";
import CartContext from "../../context/CartContext";

const APIStatusConstants = {
  LOADING: "loading",
  FAILURE: "failure",
  SUCCESS: "success",
};

class BookDetails extends Component {
  state = {
    bookDetails: {},
    quantity: 1,
    apiStatus: APIStatusConstants.LOADING,
  };

  componentDidMount() {
    this.fetchBookDetails();
  }

  getFloatPrice = (price) => {
    const numericPrice = price.substring(1);
    return parseFloat(numericPrice);
  };


  fetchBookDetails = async () => {
    // eslint-disable-next-line react/prop-types
    const { id } = this.props.params;
    this.setState({ apiStatus: APIStatusConstants.LOADING });
    try {
      const apiUrl = `https://api.itbook.store/1.0/books/${id}`;
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        const newData = {
          ...data,
          numericPrice: this.getFloatPrice(data.price),
        };
        this.setState({
          bookDetails: newData,
          apiStatus: APIStatusConstants.SUCCESS,
        });
      } else {
        this.setState({ apiStatus: APIStatusConstants.FAILURE });
      }
    } catch (e) {
      this.setState({ apiStatus: APIStatusConstants.FAILURE });
    }
  };

  onChangeBookQuantity = (e) => this.setState({ quantity: parseInt(e.target.value) });

  renderSuccessView = () => {
    const { quantity, bookDetails } = this.state;

    return (
      <CartContext.Consumer>
        {(value) => {
          const { addCartItem } = value;
          const onClickAddToCart = () => {
            const finalBookDetails = {...bookDetails,quantity} 
            addCartItem(finalBookDetails)
          }
          return (
            <div className="book-details">
              <img
                src={bookDetails.image}
                alt={bookDetails.title}
                className="book-image"
              />
              <div className="book-details-container">
                <h1 className="book-title">{bookDetails.title}</h1>
                <p className="book-author">- {bookDetails.authors}</p>
                <p>{bookDetails.subtitle}</p>

                <p className="book-price">{bookDetails.price}</p>
                <div className="quantity-and-ATCbutton">
                  <input
                    type="number"
                    className="quantity-input"
                    value={quantity}
                    onChange={this.onChangeBookQuantity}
                  />
                  <button className="atc-button" onClick={onClickAddToCart}>Add to Cart</button>
                </div>

                <p className="book-info">Author: {bookDetails.authors}</p>
                <p className="book-info">Publisher: {bookDetails.publisher}</p>
                <p className="book-info">Pages: {bookDetails.pages}</p>
                <p className="book-info">Published: {bookDetails.year} </p>
                <hr />
                <h3 className="description-title">Description</h3>
                <p>{bookDetails.desc}</p>
              </div>
            </div>
          );
        }}
      </CartContext.Consumer>
    );
  };

  renderBookDetails = () => {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case APIStatusConstants.LOADING:
        return <Loader />;
      case APIStatusConstants.SUCCESS:
        return this.renderSuccessView();
      case APIStatusConstants.FAILURE:
        return <ErrorMessage fetchBooks={this.fetchBookDetails} />;
      default:
        return null;
    }
  };
  render() {
    return (
      <>
        <Header />
        {this.renderBookDetails()};
      </>
    );
  }
}

export default withRouter(BookDetails);
