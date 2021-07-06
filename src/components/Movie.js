import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

class Movie extends React.Component {
  render() {
    return this.props.movies.map((element, index) => {
      return (
        <>
          <Card style={{ width: "18rem" }}>
            <ListGroup variant="flush">
              <ListGroup.Item>Title: {element.title}</ListGroup.Item>
              <ListGroup.Item>Overview: {element.overview}</ListGroup.Item>
              <ListGroup.Item>Vote Average: {element.vote_average}</ListGroup.Item>
              <ListGroup.Item>Vote Count: {element.vote_count}</ListGroup.Item>
              <ListGroup.Item>Poster Path: {element.poster_path}</ListGroup.Item>
              <ListGroup.Item>Popularity: {element.popularity}</ListGroup.Item>
              <ListGroup.Item>Release Date: {element.release_date}</ListGroup.Item>
            </ListGroup>
          </Card>
        </>
      );
    });
  }
}

export default Movie;