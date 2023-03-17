export interface AllBreedsState {
  breeds: string[];
  loading: boolean;
  error: string | null;
}

export const FETCH_ALL_BREEDS_REQUEST = "FETCH_ALL_BREEDS_REQUEST";
export const FETCH_ALL_BREEDS_SUCCESS = "FETCH_ALL_BREEDS_SUCCESS";
export const FETCH_ALL_BREEDS_FAILURE = "FETCH_ALL_BREEDS_FAILURE";

interface FetchAllBreedsRequestAction {
  type: typeof FETCH_ALL_BREEDS_REQUEST;
}

interface FetchAllBreedsSuccessAction {
  type: typeof FETCH_ALL_BREEDS_SUCCESS;
  payload: string[];
}

interface FetchAllBreedsFailureAction {
  type: typeof FETCH_ALL_BREEDS_FAILURE;
  payload: string;
}

export type AllBreedsActionTypes =
  | FetchAllBreedsRequestAction
  | FetchAllBreedsSuccessAction
  | FetchAllBreedsFailureAction;
