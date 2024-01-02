import { Link } from "react-router-dom";
import "./index.css";

const BookItem = (props) => {
  // eslint-disable-next-line react/prop-types
  const { bookDetails } = props;
  // eslint-disable-next-line react/prop-types
  const { title, price, isbn13, image } = bookDetails;
  return (
    <Link to={`/books/${isbn13}`}>
      <li className="book-item">
        <img src={image} alt={title} className="book-image" />
        <h2 className="book-item-title">{title}</h2>
        <p className="book-item-price">{price}</p>
      </li>
    </Link>
  );
};

export default BookItem;
