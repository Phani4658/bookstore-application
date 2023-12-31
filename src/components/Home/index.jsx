import { Component } from "react";
import { GoArrowRight } from "react-icons/go";
import Header from "../Header";
import "./index.css";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="home">
          <div className="hero-section">
            <div className="hero-content">
              <div className="hero-title-and-button">
                <h1 className="hero-title">
                  Find your next great read at our online book store
                </h1>
                <Link to="/books">
                  <button className="hero-button">
                    Explore Books <GoArrowRight />
                  </button>
                </Link>
              </div>
              <div className="hero-images">
                <img
                  src="https://assets-global.website-files.com/6491518bb88c5c4729ea8883/64b632862000571e3613c160_book-thumb-13.jpg"
                  className="hero-image-1"
                />
                <img
                  src="https://assets-global.website-files.com/6491518bb88c5c4729ea8883/64b63273ee9e6ec6db54d961_book-thumb-03.jpg"
                  className="hero-image-2"
                />
              </div>
            </div>
            <div className="triangle"></div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
