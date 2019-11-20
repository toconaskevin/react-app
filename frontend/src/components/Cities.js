import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCities } from '../actions/cityActions';
import store from '../store'
import { area } from './area';
import Itineraries from './Itineraries';
import { Link } from 'react-router-dom';

class Cities extends Component {

    async componentDidMount() {
        await store.dispatch(getCities());
    }

    render() {
        
        const cities = this.props.cities;
        
        return(
            <div style={area}>
                <ul>
                {cities.map((city, id) => (
                    <Link to={"/cities/" + city._id}>
                    <li key={id}>{city.name} - {city.country}</li>
                    </Link>
                ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {cities: state.city.cities}
};

export default connect(mapStateToProps, {getCities})(Cities);