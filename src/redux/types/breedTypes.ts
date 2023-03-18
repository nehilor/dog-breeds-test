export interface BreedState {
  breed: string[];
  loading: boolean;
  error: string | null;
}

export const FETCH_BREED_REQUEST = "FETCH_BREED_REQUEST";
export const FETCH_BREED_SUCCESS = "FETCH_BREED_SUCCESS";
export const FETCH_BREED_FAILURE = "FETCH_BREED_FAILURE";

export const SELECT_BREED = "SELECT_BREED";

interface FetchBreedRequestAction {
  type: typeof FETCH_BREED_REQUEST;
}

interface FetchBreedSuccessAction {
  type: typeof FETCH_BREED_SUCCESS;
  payload: string[];
}

interface FetchBreedFailureAction {
  type: typeof FETCH_BREED_FAILURE;
  payload: string;
}

export type BreedActionTypes =
  | FetchBreedRequestAction
  | FetchBreedSuccessAction
  | FetchBreedFailureAction;
