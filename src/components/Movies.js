import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Movie from "./Movie";

class Movies extends React.Component {
  render() {
    return this.props.movies.map((element, index) => {
      return (
        <div key={index} style={{ display: "inline-block", margin: '10px' }}>
          <Movie
            poster_path={element.poster_path}
            title={element.title}
            overview={element.overview}
            vote_average={element.vote_average}
            vote_count={element.vote_count}
            popularity={element.popularity}
            release_date={element.release_date}
          ></Movie>
        </div>
      );
    });
  }
}

export default Movies;
