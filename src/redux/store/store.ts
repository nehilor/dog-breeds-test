import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import allBreedReducer from '../reducers/allBreedsReducers';
import breedReducer from '../reducers/breedReducers';
import subBreedReducer from '../reducers/subBreedReducers';

const rootReducer = combineReducers({
  all: allBreedReducer,
  breed: breedReducer,
  subBreed: subBreedReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
