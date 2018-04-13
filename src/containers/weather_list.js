import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_maps';

//object looks like so
//weather: [
//city: {name: 'San Francisco'}, list: [ { main: { temp: 260, humidity: 40, pressure: 55 } } ],
//city: {name: 'San Francisco'}, list: [ { main: { temp: 260, humidity: 40, pressure: 55 } } ]
//]
class WeatherList extends Component {
  renderWeather(cityData){
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    console.log(temps);
    const lon = cityData.city.coord.lon; //or const {lon,lat} = cityData.city.coord;
    const lat = cityData.city.coord.lat;

    return(
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="orange" units="K"/></td>
        <td><Chart data={pressures} color="green" units="hPa"/></td>
        <td><Chart data={humidities} color="black" units="%"/></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

//want to map the state of weather to our child props
function mapStateToProps( state ){ //or mapStateToProps( {weather} ) = weather = state.weather
  return { weather: state.weather }; //or return {weather: weather}
}

export default connect(mapStateToProps)(WeatherList);
