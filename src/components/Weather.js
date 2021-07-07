import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import WeatherDay from "./WeatherDay";

class Weather extends React.Component {
  render() {
    return (
      <>
        <Card style={{ width: "30rem" }}>
          <ListGroup variant="flush">
            {this.props.bitWeather.map((element, i) => {
              return (
                <WeatherDay
                  valid_date={this.props.bitWeather[i].valid_date}
                  low_temp={this.props.bitWeather[i].low_temp}
                  high_temp={this.props.bitWeather[i].high_temp}
                  description={this.props.bitWeather[i].description}
                ></WeatherDay>
              );
            })}
          </ListGroup>
        </Card>
      </>
    );
  }
}

export default Weather;
