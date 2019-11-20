import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItineraries } from '../actions/itineraryActions';
import store from '../store'
import { area } from './area';

class Itineraries extends Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        console.log('parametro de ciudad', this.props.match.params.id);
        
        await store.dispatch(getItineraries());
    }

    render() {
        
        const itineraries = this.props.itineraries;      
    
        

        return(
            <div style={area}>
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