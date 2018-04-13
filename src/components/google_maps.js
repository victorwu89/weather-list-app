import React, { Component } from 'react';

class GoogleMap extends Component {
  //component lifecycle method
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }

  render(){
    //this.refs.map
    return <div ref="map" />; //direct reference to an html element
  }

}

export default GoogleMap;
