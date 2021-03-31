import React from "react";
import ReactDOM from "react-dom";
import SearchMovies from "./searchMovie";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Main extends React.Component {
  render() {
    return (
      <div className="body">
        <div className="container p-5">
          <h1 className="mb-5 text-center">Movie Search App</h1>
          <SearchMovies />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
