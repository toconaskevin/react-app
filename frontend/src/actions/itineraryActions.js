import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './types';

export const getItineraries = () => async (dispatch) =>{
  await fetch("https://mytinerary-api.azurewebsites.net/api/itineraries")
    .then((response) => response.json())
    .then((json) => {
      const itineraries = json.itineraries;
      dispatch({
        type: GET_ITEMS,
        payload: itineraries
      })
    })
}