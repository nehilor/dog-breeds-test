import { Dispatch } from 'redux';
import {
  FETCH_SUB_BREED_REQUEST,
  FETCH_SUB_BREED_SUCCESS,
  FETCH_SUB_BREED_FAILURE,
  SubBreedActionTypes,
} from '../types/subBreedTypes';
import { getSubBreedImages } from '../../api/api';

export const fetchSubBreed = (breed: string, subBreed: string): any => {
  return async (dispatch: Dispatch<SubBreedActionTypes>): Promise<void> => {
    dispatch({ type: FETCH_SUB_BREED_REQUEST });
    try {
      const response = await getSubBreedImages(breed, subBreed);
      const images = response.message;
      dispatch({
        type: FETCH_SUB_BREED_SUCCESS,
        payload: images,
      });
    } catch (error: any) {
      dispatch({ type: FETCH_SUB_BREED_FAILURE, payload: error.message });
    }
  };
};