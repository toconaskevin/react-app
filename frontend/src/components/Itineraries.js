import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItineraries } from '../actions/itineraryActions';
import store from '../store'

class Itineraries extends Component {

    async componentDidMount() {
        await store.dispatch(getItineraries());
    }

    render() {
        
        const itineraries = this.props.itineraries;      
        
        return(
            <div>
                <ul>
                {itineraries.map((itinerary, id) => (
                  <li key={id}>{itinerary.author} - {itinerary.rating}</li>
                ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {itineraries: state.itinerary.itineraries}
};

export default connect(mapStateToProps, {getItineraries})(Itineraries);