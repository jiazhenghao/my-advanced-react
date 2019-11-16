import React from "react";

import ArticleContainer from "./Article";

// const ArticleList = props => {
//   return (
//     <div>
//       {Object.values(props.articles).map(article => (
//         // <Article key={article.id} article={article} store={props.store} />
//         <ArticleContainer key={article.id} article={article} />
//       ))}
//     </div>
//   );
// };

class ArticleList extends React.PureComponent {
  render() {
    return (
      <div>
        {Object.values(this.props.articles).map(article => (
          <ArticleContainer key={article.id} article={article} />
        ))}
      </div>
    );
  }
}

export default ArticleList;
