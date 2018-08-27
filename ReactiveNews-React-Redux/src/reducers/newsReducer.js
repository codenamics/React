import { GET_NEWS, SEARCH_NEWS } from "../actions/types"

const initialState = {
  news: [],
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        news: action.payload,
      }
    case SEARCH_NEWS:
      return {
        ...state,
        news: action.payload,
      }
    default:
      return state
  }
}
