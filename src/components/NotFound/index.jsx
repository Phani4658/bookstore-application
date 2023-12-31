import { Component } from "react";
import { GoArrowLeft } from "react-icons/go";
import {Link} from "react-router-dom"
import Header from "../Header";
import "./index.css";

class NotFound extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="not-found">
          <div className="not-found-content">
            <img src="https://assets-global.website-files.com/6491518bb88c5c4729ea8883/64ba30e6df86e673a15e1945_404.svg" />
            <h1 className="not-found-title">Page not found</h1>
            <p>Sorry, the page you looking for doesn't exist</p>
            <Link to="/">
              <button className="not-found-button">
                <GoArrowLeft /> Back to Home
              </button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default NotFound;
