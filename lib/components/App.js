import React from "react";
import PropTypes from "prop-types";
import ArticleList from "./ArticleList";
import SearchBar from "./SearchBar";
import pickBy from "lodash/pickBy";
import Timestamp from "./Timestamp";

class App extends React.PureComponent {
  static childContextTypes = {
    store: PropTypes.object
  };

  getChildContext() {
    return {
      store: this.props.store
    };
  }

  appState = () => {
    const { articles, searchTerm } = this.props.store.getState();
    return { articles, searchTerm };
  };

  state = this.appState();

  onStoreChange = () => {
    this.setState(this.appState);
  };

  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
    this.props.store.startClock();
  }

  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId);
  }

  //a solution to avoid App to render due to partial store's state changes
  //this is a solution, but not an excellent one
  // shouldComponentUpdate(nextProps, nextState) {
  //   return (
  //     nextState.articles !== this.state.articles ||
  //     nextState.searchTerm !== this.state.searchTerm
  //   );
  // }

  render() {
    let { articles, searchTerm } = this.state;
    const searchRE = new RegExp(searchTerm, "i");
    if (searchTerm) {
      articles = pickBy(articles, value => {
        return value.title.match(searchRE) || value.body.match(searchRE);
      });
    }
    return (
      <>
        <Timestamp />
        <SearchBar />
        <ArticleList articles={articles} />
      </>
    );
  }
}

export default App;
