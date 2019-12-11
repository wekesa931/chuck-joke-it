import axios from 'axios'
import { Dispatch } from 'redux'
import { AppActions } from '../types/actions'

export const getRandomJoke = (category: string) => async (dispatch: Dispatch<AppActions>) => {
  try {
      const joke = await axios.get(
          `https://api.chucknorris.io/jokes/random?category=${category}`
      )
      dispatch({
          type: 'GET_RANDOM_JOKE',
          randomJoke: joke.data
      })
  }
  catch {
      // None
  }
}

export const getChuckJoke = () => async (dispatch: Dispatch<AppActions>) => {
  try {
      const joke = await axios.get(
        'https://api.chucknorris.io/jokes/random'
      )
      dispatch({
        type: 'GET_CHUCK_JOKE',
        randomChuckJoke: joke.data
      })
  }
  catch {
      // None
  }
}
