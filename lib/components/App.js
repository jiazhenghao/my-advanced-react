import React from "react";
import DataApi from "../DataApi";
import { data } from "../testData";

import ArticleList from "./ArticleList";

const api = new DataApi(data);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors()
    };
  }
  render() {
    // console.log(this.state.articles);
    // console.log(this.state.authors);
    return (
      <ArticleList
        articles={this.state.articles}
        authors={this.state.authors}
      />
    );
  }
}

export default App;
