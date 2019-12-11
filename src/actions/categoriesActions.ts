import axios from 'axios'
import { Dispatch } from 'redux'
import { AppActions } from '../types/actions'

export const getCategories = () => async (dispatch: Dispatch<AppActions>) => {
  try {
      const allCategories = await axios.get(
          'https://api.chucknorris.io/jokes/categories'
      )
      dispatch({
          type: 'GET_CATEGORIES',
          categories: allCategories.data
      })
  }
  catch {
      // None
  }
}