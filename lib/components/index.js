import React from "react";
import ReactDOM from "react-dom";

import "core-js/stable";
import "regenerator-runtime/runtime";

import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

// const App = () => {
//   return <h2>Hello World!!!!</h2>;
// };

// class App extends React.Component {
//   state = {
//     answer: 23
//   };

//   asyncFunc = () => {
//     return Promise.resolve(81);
//   };

//   async componentDidMount() {
//     this.setState({
//       answer: await this.asyncFunc()
//     });
//   }

//   render() {
//     return <h2>Hello Class --- {this.state.answer}</h2>;
//   }
// }

// export default App;
