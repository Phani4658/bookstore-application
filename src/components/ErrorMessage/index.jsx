import { IoReloadOutline } from "react-icons/io5";
import './index.css'

const ErrorMessage = (props) => {
  // eslint-disable-next-line react/prop-types
  const {fetchBooks} = props;
  return (
    <div className="error-message">
      <div className="not-found-content">
        <img src="https://assets-global.website-files.com/6491518bb88c5c4729ea8883/64ba30e6df86e673a15e1945_404.svg" />
        <h1 className="not-found-title">Books not Loaded</h1>
        <p>Sorry, there is an issue in loading books </p>
        <button className="not-found-button" onClick={fetchBooks}>
          Try Again <IoReloadOutline />
        </button>
      </div>
    </div>
  );
};

export default ErrorMessage;
