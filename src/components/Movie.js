import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

class Movie extends React.Component {
    render() {
        return(
            <Card style={{ width: "18rem", display: "inline-block" }}>
            <Card.Img
              variant="top"
              src={`https://image.tmdb.org/t/p/w500/${this.props.poster_path}`}
            />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>Overview: {this.props.overview}</Card.Text>
              <Card.Text>Vote Average: {this.props.vote_average}</Card.Text>
              <Card.Text>Vote Count: {this.props.vote_count}</Card.Text>
              <Card.Text>Popularity: {this.props.popularity}</Card.Text>
              <Card.Text>Release Date: {this.props.release_date}</Card.Text>
            </Card.Body>
          </Card> 
        )
    }
}

export default Movie;