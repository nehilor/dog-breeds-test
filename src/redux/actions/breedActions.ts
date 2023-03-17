import { Dispatch } from 'redux';
import {
  FETCH_BREED_REQUEST,
  FETCH_BREED_SUCCESS,
  FETCH_BREED_FAILURE,
  SELECT_BREED,
  BreedActionTypes,
} from '../types/breedTypes';
import { getBreed } from '../../api/api';

export const fetchBreed = () => async (dispatch: Dispatch<BreedActionTypes>) => {
  dispatch({ type: FETCH_BREED_REQUEST });

  try {
    const response = await getBreed();

    dispatch({ type: FETCH_BREED_SUCCESS, payload: { } });
  } catch (error: any) {
    dispatch({ type: FETCH_BREED_FAILURE, payload: error.message });
  }
};

export const selectBreed = (breed: string): BreedActionTypes => ({
  type: SELECT_BREED,
  payload: breed,
});
