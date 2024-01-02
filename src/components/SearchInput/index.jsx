import { Component } from "react";
import { IoSearchOutline } from "react-icons/io5";
import "./index.css";

const APIStatusConstants = {
  LOADING: "loading",
  FAILURE: "failure",
  SUCCESS: "success",
};

class SearchInput extends Component {
  state = { searchQuery: "" };

  onClickSearchButton = async () => {
    // eslint-disable-next-line react/prop-types
    const { searchBooks } = this.props;
    const { searchQuery } = this.state;
    searchBooks(searchQuery);
  };

  onChangeSearchInput = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  render() {
    const { apiStatus } = this.props;
    return (
      <div className="search-container">
        <div className="search-bar">
          {apiStatus === APIStatusConstants.SUCCESS ? (
            <input
              type="search"
              placeholder="search Books"
              onChange={this.onChangeSearchInput}
              className="search-input"
            />
          ) : <input
          type="search"
          placeholder="search Books"
          disabled
          onChange={this.onChangeSearchInput}
          className="search-input"
        />}
          <button className="search-button" onClick={this.onClickSearchButton}>
            <IoSearchOutline />
          </button>
        </div>
      </div>
    );
  }
}

export default SearchInput;
