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
          Overview={element.overview}
          Vote Average={element.vote_average}
          Vote Count={element.vote_count}
          Popularity={element.popularity}
          Release Date={element.release_date}
          ></Movie>
        </>
      );
    });
  }
}

export default Movies;
