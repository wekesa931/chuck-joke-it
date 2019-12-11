import { IFilter } from '../types/chuckJoke'
import { FilteredChuckJokeActionType } from '../types/actions'

const defaultState: IFilter = {
  total: -1,
  result: []
}

export const filteredJokes = (state = defaultState, action: FilteredChuckJokeActionType): IFilter => {
  switch(action.type){
      case "GET_FILTERED_JOKES":
          return action.filteredeChuckJokes
      default:
          return state
  }
}