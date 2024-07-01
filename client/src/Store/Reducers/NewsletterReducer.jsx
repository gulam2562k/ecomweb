import { ADD_NEWSLETTER_RED, DELETE_NEWSLETTER_RED, GET_NEWSLETTER_RED } from "../Constant"
export default function NewsletterReducer(state=[], action) {
    let newState, index
    switch (action.type) {
        case ADD_NEWSLETTER_RED:
            newState = state
            newState.push(action.payload)
            return newState
        case GET_NEWSLETTER_RED:
            return action.payload
        case DELETE_NEWSLETTER_RED:
            newState = state
            index = newState.findIndex((x) => x._id === action.payload._id)
            newState.splice(index, 1)
            return newState
        default:
            return state
    }
}