import { Dispatch } from 'redux';
import {
  FETCH_ALL_BREEDS_REQUEST,
  FETCH_ALL_BREEDS_SUCCESS,
  FETCH_ALL_BREEDS_FAILURE,
  AllBreedsActionTypes,
} from '../types/allBreedsTypes';
import { getBreedsList } from '../../api/api';

export const fetchAllBreeds = (): any => {
  return async (dispatch: Dispatch<AllBreedsActionTypes>): Promise<void> => {
    dispatch({ type: FETCH_ALL_BREEDS_REQUEST });
    try {
      const response = await getBreedsList();
      const breeds = Object.keys(response.message);
      dispatch({ type: FETCH_ALL_BREEDS_SUCCESS, payload: breeds });
    } catch (error: any) {
      dispatch({ type: FETCH_ALL_BREEDS_FAILURE, payload: error.message });
    }
  };
};