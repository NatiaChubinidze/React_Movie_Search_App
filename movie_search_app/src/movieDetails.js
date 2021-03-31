import React from "react";

class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
    };
  }

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/329?api_key=be436fb2ad69f1e5f4510f0fe27cd76a&language=en-US`
    )
      .then((response) => response.json())
      .then((result) => {
        this.setState({ movie: result });
        console.log(this.state.movie);
      });
  }

  render() {
    console.log(this.state.movie);
    if (!this.state.movie) {
      return <div></div>;
    } else {
      return (
        <div className="card mt-5">
          <div className="card-header">
            <p>ORIGINAL title {this.state.movie.original_title}</p>
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <b>Budget:</b> {this.state.movie.budget} $
            </h5>
            <p className="card-text">
              <b>Tagline:</b> {this.state.movie.tagline}
            </p>
            <p className="card-text">
              <b>ORIGINAL LANGUAGE:</b> {this.state.movie.original_language}
            </p>
            <p className="card-text">
              <b>Popularity:</b> {this.state.movie.popularity}
            </p>
            <p className="card-text">
              <b>Release Date:</b> {this.state.movie.release_date}
            </p>
            <p className="card-text">
              <b>Revenue:</b> {this.state.movie.revenue}
            </p>
            <p className="card-text">
              <b>Average Vote:</b> {this.state.movie.vote_average}
            </p>
            <p className="card-text">
              <b>Total Votes:</b> {this.state.movie.vote_count}
            </p>
            <a
              className="btn btn-primary"
              onClick={() => this.props.toggleVisibility(true)}
            >
              Go Back
            </a>
          </div>
        </div>
      );
    }
  }
}

export default MovieDetails;
