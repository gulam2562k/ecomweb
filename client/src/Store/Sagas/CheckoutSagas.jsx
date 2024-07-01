import { createData, deleteData, getData, getUserData, updateData } from "./Services/CheckoutService"
import { ADD_CHECKOUT, ADD_CHECKOUT_RED, DELETE_CHECKOUT, DELETE_CHECKOUT_RED, GET_CHECKOUT, GET_CHECKOUT_RED, GET_USER_CHECKOUT, GET_USER_CHECKOUT_RED, UPDATE_CHECKOUT, UPDATE_CHECKOUT_RED } from "../Constant"
import { put,takeEvery } from "redux-saga/effects"
function* createSaga(action) {
    var response = yield createData(action.payload)
    yield put({ type: ADD_CHECKOUT_RED, payload: response.data })
}
function* getSaga() {
    var response = yield getData()
    yield put({ type: GET_CHECKOUT_RED, payload: response.data })
}
function* getUserSaga() {
    var response = yield getUserData()
    yield put({ type: GET_USER_CHECKOUT_RED, payload: response.data })
}
function* updateSaga(action) {
    var response = yield updateData(action.payload)
    yield put({ type: UPDATE_CHECKOUT_RED, payload: action.payload })
}
function* deleteSaga(action) {
    yield deleteData(action.payload)
    yield put({ type: DELETE_CHECKOUT_RED, payload: action.payload })
}

export default function* checkoutSaga(){
    yield takeEvery(ADD_CHECKOUT,createSaga)    
    yield takeEvery(GET_CHECKOUT,getSaga)    
    yield takeEvery(GET_USER_CHECKOUT,getUserSaga)    
    yield takeEvery(UPDATE_CHECKOUT,updateSaga)    
    yield takeEvery(DELETE_CHECKOUT,deleteSaga)    
}  