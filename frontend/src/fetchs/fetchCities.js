import { fetchCitiesLoading, fetchCitiesSuccess } from '../actions/cityActions';

function fetchCities() {
    return dispatch => {
        dispatch(fetchCitiesLoading());
        fetch("http://localhost:5000/api/cities")
        .then(response => response.json())
        .then(response => {
            if(response.error) {
                throw(response.error);
            }
            dispatch(fetchCitiesSuccess(response.cities));
            return response.cities;
        });
    }
}

export default fetchCities;