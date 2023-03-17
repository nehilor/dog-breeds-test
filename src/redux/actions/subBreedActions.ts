import { Dispatch } from 'redux';
import {
  FETCH_SUB_BREED_REQUEST,
  FETCH_SUB_BREED_SUCCESS,
  FETCH_SUB_BREED_FAILURE,
  SELECT_SUB_BREED,
  SubBreedActionTypes,
} from '../types/subBreedTypes';
import { getSubBreedImages } from '../../api/api';

export const fetchSubBreed = (breed: string, subBreed: string) => async (
  dispatch: Dispatch<SubBreedActionTypes>,
) => {
  dispatch({ type: FETCH_SUB_BREED_REQUEST });

  try {
    const response = await getSubBreedImages(breed, subBreed);
    const images = response.message;

    dispatch({
      type: FETCH_SUB_BREED_SUCCESS,
      payload: { breed, subBreed, images },
    });
  } catch (error: any) {
    dispatch({ type: FETCH_SUB_BREED_FAILURE, payload: error.message });
  }
};

export const selectSubBreed = (subBreed: string): SubBreedActionTypes => ({
  type: SELECT_SUB_BREED,
  payload: subBreed,
});
