import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "-",
      lat: 0,
      lon: 0,
      showMap: false
    };
  }

  getCityInfo = async (event) => {
    event.preventDefault();

    await this.setState({
      cityName: event.target.cityName.value,
    });
    let url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.cityName}&format=json`;
    let cityInfo = await axios.get(url);
  
    await this.setState({
      lat: cityInfo.data[0].lat,
      lon: cityInfo.data[0].lon,
      showMap: true
    });
  };

  render() {
    return (
      <>
        <h1>City Explorer</h1>
        <form onSubmit={this.getCityInfo}>
          <input type="text" placeholder="Inter City Name" name="cityName" />
          <input type="submit" value="Explore!" />
        </form>
        <hr />

        <Card style={{ width: "18rem" }}>
          <ListGroup variant="flush">
            <ListGroup.Item>City Name: {this.state.cityName}</ListGroup.Item>
            <ListGroup.Item>Latitude: {this.state.lat}</ListGroup.Item>
            <ListGroup.Item>longitude: {this.state.lon}</ListGroup.Item>
          </ListGroup>
        </Card>
        {this.state.showMap &&
        <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.lat},${this.state.lon}&zoom=14`}/>
        }
      </>
    );
  }
}

export default App;
