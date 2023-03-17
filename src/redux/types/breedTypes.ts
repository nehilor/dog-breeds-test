export const FETCH_BREED_REQUEST = "FETCH_BREED_REQUEST";
export const FETCH_BREED_SUCCESS = "FETCH_BREED_SUCCESS";
export const FETCH_BREED_FAILURE = "FETCH_BREED_FAILURE";

export const SELECT_BREED = "SELECT_BREED";

export interface BreedState {
  breed: string;
  breeds: [];
  subBreeds: string[];
  images: string[];
  loading: boolean;
  error: string | null;
}

interface FetchBreedRequestAction {
  type: typeof FETCH_BREED_REQUEST;
}

interface FetchBreedSuccessAction {
  type: typeof FETCH_BREED_SUCCESS;
  payload: {
    breed: string;
  };
}

interface FetchBreedFailureAction {
  type: typeof FETCH_BREED_FAILURE;
  payload: string;
}

interface SelectBreedAction {
  type: typeof SELECT_BREED;
  payload: string;
}

export type BreedActionTypes =
  | FetchBreedRequestAction
  | FetchBreedSuccessAction
  | FetchBreedFailureAction
  | SelectBreedAction;
