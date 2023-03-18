import { Dispatch } from 'redux';
import {
  FETCH_BREED_REQUEST,
  FETCH_BREED_SUCCESS,
  FETCH_BREED_FAILURE,
  BreedActionTypes,
} from '../types/breedTypes';
import { getBreed } from '../../api/api';

export const fetchBreed = (breedType: string): any => {
  return async (dispatch: Dispatch<BreedActionTypes>): Promise<void> => {
    dispatch({ type: FETCH_BREED_REQUEST });
    try {
      const response = await getBreed(breedType);
      const breed = response.message;
      dispatch({ type: FETCH_BREED_SUCCESS, payload: breed });
    } catch (error: any) {
      dispatch({ type: FETCH_BREED_FAILURE, payload: error.message });
    }
  };
};