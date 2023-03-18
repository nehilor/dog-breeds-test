import {
  FETCH_SUB_BREED_REQUEST,
  FETCH_SUB_BREED_SUCCESS,
  FETCH_SUB_BREED_FAILURE,
  SubBreedState,
  SubBreedActionTypes,
} from "../types/subBreedTypes";

const initialState: SubBreedState = {
  images:[],
  loading: false,
  error: null,
};

const subBreedReducer = (
  state = initialState,
  action: SubBreedActionTypes
): SubBreedState => {
  switch (action.type) {
    case FETCH_SUB_BREED_REQUEST:
      return { ...state, loading: true };
    case FETCH_SUB_BREED_SUCCESS:
      return {
        images: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_SUB_BREED_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default subBreedReducer;
