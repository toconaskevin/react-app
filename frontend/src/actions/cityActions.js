import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './types';

export const getCities = () => async (dispatch) =>{
  await fetch("http://localhost:5000/api/cities")
    .then((response) => response.json())
    .then((json) => {
      const cities = json.cities;
      dispatch({
        type: GET_ITEMS,
        payload: cities
      })
    })
}