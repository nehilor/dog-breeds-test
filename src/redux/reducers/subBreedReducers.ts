import {
  FETCH_SUB_BREED_REQUEST,
  FETCH_SUB_BREED_SUCCESS,
  FETCH_SUB_BREED_FAILURE,
  SELECT_SUB_BREED,
  SubBreedState,
  SubBreedActionTypes,
} from "../types/subBreedTypes";

const initialState: SubBreedState = {
  breed: "",
  subBreed: "",
  images: [],
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
        breed: action.payload.breed,
        subBreed: action.payload.subBreed,
        images: action.payload.images,
        loading: false,
        error: null,
      };
    case FETCH_SUB_BREED_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case SELECT_SUB_BREED:
      return { ...state, subBreed: action.payload };
    default:
      return state;
  }
};

export default subBreedReducer;
