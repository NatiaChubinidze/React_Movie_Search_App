import React from 'react';
import ReactDOM from 'react-dom';
import SearchMovies from './searchMovie';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class Main extends React.Component {
  render() {
    return (
      <div className="container p-5">
    <SearchMovies/>
    </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));