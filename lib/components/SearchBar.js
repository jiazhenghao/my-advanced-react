import React from "react";
import debounce from "lodash/debounce";
import storeProvider from "./storeProvider";

// PureComponent will not update if itself do not change at all
class SearchBar extends React.PureComponent {
  state = {
    searchTerm: ""
  };

  doSearch = debounce(() => {
    this.props.store.setSearchTerm(this.state.searchTerm);
  }, 500);

  handleSearch = event => {
    this.setState({ searchTerm: event.target.value }, () => {
      this.doSearch();
    });
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   return true;
  // }

  // componentWillUpdate(nextProps, nextState) {
  //   console.log("Updating SearchBar");
  // }

  render() {
    return (
      <input
        type="search"
        placeholder="enter your search"
        onChange={this.handleSearch}
        value={this.state.searchTerm}
      />
    );
  }
}

export default storeProvider()(SearchBar);
