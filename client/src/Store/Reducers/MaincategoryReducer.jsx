import { ADD_MAINCATEGORY_RED, DELETE_MAINCATEGORY_RED, GET_MAINCATEGORY_RED, UPDATE_MAINCATEGORY_RED } from "../Constant"
export default function MaincategoryReducer(state=[], action) {
    let newState, index
    switch (action.type) {
        case ADD_MAINCATEGORY_RED:
            newState = state
            newState.push(action.payload)
            return newState
        case GET_MAINCATEGORY_RED:
            return action.payload
        case UPDATE_MAINCATEGORY_RED:
            newState = state
            index = newState.findIndex((x) => x._id === action.payload._id)
            newState[index].name = action.payload.name
            return newState
        case DELETE_MAINCATEGORY_RED:
            newState = state
            index = newState.findIndex((x) => x._id === action.payload._id)
            newState.splice(index, 1)
            return newState
        default:
            return state
    }
}