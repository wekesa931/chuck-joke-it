import { CategoriesActionType } from '../types/actions'

const defaultState: string[] = [];

export const categories = (state = defaultState, action: CategoriesActionType): string[] => {
    switch(action.type){
        case "GET_CATEGORIES":
            return action.categories
        default:
            return state
    }
}