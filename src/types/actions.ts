import { IChuckJoke, IFilter } from './chuckJoke'

export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_RANDOM_JOKE = 'GET_RANDOM_JOKE'
export const ADD_FAVORITE = 'ADD_FAVORITE'
export const GET_CHUCK_JOKE = 'GET_CHUCK_JOKE'
export const GET_FILTERED_JOKES = 'GET_FILTERED_JOKES'

export interface CategoriesActionType {
    type: typeof GET_CATEGORIES
    categories: string[]
}

export interface ChuckJokeActionType {
    type: typeof GET_RANDOM_JOKE
    randomJoke: IChuckJoke
}

export interface RandomChuckJokeActionType {
    type: typeof GET_CHUCK_JOKE
    randomChuckJoke: IChuckJoke
}

export interface FilteredChuckJokeActionType {
    type: typeof GET_FILTERED_JOKES
    filteredeChuckJokes: IFilter
}

export type AppActions = 
    | CategoriesActionType
    | ChuckJokeActionType
    | RandomChuckJokeActionType
    | FilteredChuckJokeActionType