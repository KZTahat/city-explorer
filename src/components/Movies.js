import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Movie from "./Movie";

class Movies extends React.Component {
  render() {
    return this.props.movies.map((element, index) => {
      return (
        <>
          <Movie 
          poster_path={element.poster_path}
          title={element.title} 
          overview={element.overview}
          vote Average={element.vote_average}
          vote Count={element.vote_count}
          popularity={element.popularity}
          release Date={element.release_date}
          ></Movie>

        </>
      );
    });
  }
}

export default Movies;
