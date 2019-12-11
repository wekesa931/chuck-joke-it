import { ChuckJokeActionType, RandomChuckJokeActionType } from '../types/actions'
import { IChuckJoke } from '../types/chuckJoke'

const defaultState: IChuckJoke = {
  categories: [],
  created_at: '',
  updated_at: '',
  icon_url: '',
  id : '',
  url : '',
  value :''
};

export const categoryJoke = (
  state = defaultState, action: ChuckJokeActionType | RandomChuckJokeActionType): IChuckJoke => {
  switch(action.type){
    case "GET_RANDOM_JOKE":
      return action.randomJoke
    case "GET_CHUCK_JOKE":
      return action.randomChuckJoke
    default:
      return state
  }
}