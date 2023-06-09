import { AnyAction } from "redux";
//import { BreedState } from "../types";
import {
  BreedState,
  FETCH_BREED_REQUEST,
  FETCH_BREED_SUCCESS,
  FETCH_BREED_FAILURE,
} from '../types/breedTypes';

const initialState: BreedState = {
  breed: [],
  loading: false,
  error: null,
};

const breedReducer = (state = initialState, action: AnyAction): BreedState => {
  switch (action.type) {
    case FETCH_BREED_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BREED_SUCCESS:
      return {
        ...state,
        breed: action.payload,
        loading: false,
      };
    case FETCH_BREED_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default breedReducer;
