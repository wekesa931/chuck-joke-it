import { combineReducers } from 'redux'
import { categories } from './categories'
import { categoryJoke } from './randomJoke'
import { filteredJokes } from './filteredJokes'

export const rootReducer = combineReducers({
  categories,
  categoryJoke,
  filteredJokes
});