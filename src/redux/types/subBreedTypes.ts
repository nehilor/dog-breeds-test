export interface SubBreedState {
  breed: string;
  subBreed: string;
  loading: boolean;
  error: string | null;
}

export const FETCH_SUB_BREED_REQUEST = "FETCH_SUB_BREED_REQUEST";
export const FETCH_SUB_BREED_SUCCESS = "FETCH_SUB_BREED_SUCCESS";
export const FETCH_SUB_BREED_FAILURE = "FETCH_SUB_BREED_FAILURE";

export const SELECT_SUB_BREED = "SELECT_SUB_BREED";

interface FetchSubBreedRequestAction {
  type: typeof FETCH_SUB_BREED_REQUEST;
}

interface FetchSubBreedSuccessAction {
  type: typeof FETCH_SUB_BREED_SUCCESS;
  payload: {
    breed: string;
    subBreed: string;
  };
}

interface FetchSubBreedFailureAction {
  type: typeof FETCH_SUB_BREED_FAILURE;
  payload: string;
}

interface SelectSubBreedAction {
  type: typeof SELECT_SUB_BREED;
  payload: string;
}

export type SubBreedActionTypes =
  | FetchSubBreedRequestAction
  | FetchSubBreedSuccessAction
  | FetchSubBreedFailureAction
  | SelectSubBreedAction;
