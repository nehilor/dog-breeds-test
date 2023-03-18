import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import allBreedReducer from '../reducers/allBreedsReducers';
import breedReducer from '../reducers/breedReducers';
import subBreedReducer from '../reducers/subBreedReducers';

export const store = configureStore({
  reducer: {
    allBreeds: allBreedReducer,
    breed: breedReducer,
    subBreed: subBreedReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;