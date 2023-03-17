import { AnyAction } from "redux";
//import { BreedState } from "../types";
import {
  BreedState,
  SELECT_BREED,
  FETCH_BREED_REQUEST,
  FETCH_BREED_SUCCESS,
  FETCH_BREED_FAILURE,
} from '../types/breedTypes';

const initialState: BreedState = {
  breed: "",
  breeds: [],
  subBreeds: [],
  loading: false,
  error: null,
  images: [],
};

const breedReducer = (state = initialState, action: AnyAction): BreedState => {
  switch (action.type) {
    case SELECT_BREED:
      return {
        ...state,
        breed: action.payload,
      };
    case FETCH_BREED_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BREED_SUCCESS:
      return {
        ...state,
        subBreeds: action.payload.subBreeds,
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
