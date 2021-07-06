import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Movie from "./components/Movie";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "-",
      lat: 0,
      lon: 0,
      showMap: false,
      // searchQuery: [],
      bitWeather: [],
      movies: [],
    };
  }

  getCityInfo = async (event) => {
    event.preventDefault();

    await this.setState({
      cityName: event.target.cityName.value,
    });
    // let url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.cityName}&format=json`;
    // let cityInfo = await axios.get(url);

    // await this.setState({
    //   lat: cityInfo.data[0].lat,
    //   lon: cityInfo.data[0].lon,
    //   showMap: true,
    // });

    // let weatherData = await axios.get(
    //   `${process.env.REACT_APP_SERVER}/getforcastinfo?city_name=${this.state.cityName}`
    // );

    // await this.setState({
    //   searchQuery: weatherData.data.split(","),
    // });

    //http://localhost:3001/getweatherinfo?city_name=london
    axios
      .get(
        `${process.env.REACT_APP_SERVER}/weather?city_name=${this.state.cityName}`
      )
      .then((element) => {
        this.setState({
          bitWeather: element.data.data,
          lat: element.data.lat,
          lon: element.data.lon,
          showMap: true,
        });
      })
      .catch((error) => {
        console.log("inside the error (Weather) " + error);
      });

    // http://localhost:3001?api_key=<>$city_name=this.state.searchQuery
    axios
      .get(
        `${process.env.REACT_APP_SERVER}/movies?city_name=${this.state.cityName}`
      )
      .then((element) => {
        this.setState({
          movies: element.data,
        });
      })
      .catch((error) => {
        console.log("inside the error (Movies) " + error);
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

        {this.state.showMap && (
          <img
            src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.lat},${this.state.lon}&zoom=14`}
          />
        )}

        <Card style={{ width: "30rem" }}>
          <ListGroup variant="flush">
            {this.state.bitWeather.map((element, i) => {
              return (
                <div key={i}>
                  <ListGroup.Item>
                    {this.state.bitWeather[i].valid_date}: Low of{" "}
                    {this.state.bitWeather[i].low_temp}, high of{" "}
                    {this.state.bitWeather[i].high} with{" "}
                    {this.state.bitWeather[i].weather.description}.
                  </ListGroup.Item>
                </div>
              );
            })}
          </ListGroup>
        </Card>
        <Movie movies={this.state.movies}></Movie>
      </>
    );
  }
}

export default App;
