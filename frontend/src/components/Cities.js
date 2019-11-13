import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCities } from '../actions/cityActions';
import store from '../store'

class Cities extends Component {

    async componentDidMount() {
        await store.dispatch(getCities());
    }

    render() {
        
        const cities = this.props.cities;
        
        return(
            <div>
                <ul>
                {cities.map((city, id) => (
                    <li key={id}>{city.name} - {city.country}</li>
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