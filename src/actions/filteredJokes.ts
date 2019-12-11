import axios from 'axios'
import { Dispatch } from 'redux'
import { AppActions } from '../types/actions'
import { success } from '../components/loader/message'

export const getFilteredJokes = (text: string) => async (dispatch: Dispatch<AppActions>) => {
  success(text)
  try {
      const jokes = await axios.get(
          `https://api.chucknorris.io/jokes/search?query=${text}`
      )
      dispatch({
        type: 'GET_FILTERED_JOKES',
        filteredeChuckJokes: jokes.data
      })
  }
  catch {
      // None
  }
}
