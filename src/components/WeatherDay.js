import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

class WeatherDay extends React.Component {
  render() {
    return (
      <>
        <div>
          <ListGroup.Item>
            {this.props.valid_date}: Low of{" "}
            {this.props.low_temp}, high of{" "}
            {this.props.high_temp} with{" "}
            {this.props.description}.
          </ListGroup.Item>
        </div>
      </>
    );
  }
}

export default WeatherDay;
