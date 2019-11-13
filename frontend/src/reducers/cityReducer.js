import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

const initialState = {
  cities: [
    {name: "Buenos Aires", country: "Argentina"},
    {name: "Lima", country: "Peru"},
    {name: "Mexico DF", country: "Mexico"}
  ]
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_ITEMS:
      return {
        ...state,
        cities: action.payload
      }
    default:
      return state;
  }
}