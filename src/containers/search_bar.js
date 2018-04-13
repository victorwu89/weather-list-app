import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

  //component level state need to initalize via constructor
  constructor(props){
    super(props);

    this.state = { term: '' };

    //take the existing function onInputChange and bind it to this, overwriting local method
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState( {term: event.target.value} ); //can't get setState property because this isn't referencing SearchBar
  }

  onFormSubmit(event){
    event.preventDefault();

    //we need to go and fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''}); //causes state to re-render resets the state upon submit
  }

  render(){
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forcast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
    </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { fetchWeather }, dispatch); //make sure that action flows into the middleware
}

//passed in null, all we are saying is redux is maintaining some state no state required
export default connect(null, mapDispatchToProps)(SearchBar); //conectiong fetchWeather or whatever is mapped to SearchBar
