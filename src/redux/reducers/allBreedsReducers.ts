import { AnyAction } from "redux";
import {
  AllBreedsState,
  FETCH_ALL_BREEDS_REQUEST,
  FETCH_ALL_BREEDS_SUCCESS,
  FETCH_ALL_BREEDS_FAILURE,
} from '../types/allBreedsTypes';

const initialState: AllBreedsState = {
  breeds: [],
  loading: false,
  error: null,
};

const allBreedReducer = (state = initialState, action: AnyAction): AllBreedsState => {
  //console.log('allBreedReducer action => ', action);
  switch (action.type) {
    case FETCH_ALL_BREEDS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ALL_BREEDS_SUCCESS:
      return {
        ...state,
        breeds: action.payload,
        loading: false,
      };
    case FETCH_ALL_BREEDS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default allBreedReducer;
