import {LOGIN_SUCCESS,LOGIN_FAIL} from "../action/actionTypes";

const initialState={
    responseLogin:'',
    errorLogin:''
}
const loginReducer=(state=initialState, action) =>{
    switch(action.type){
        case LOGIN_SUCCESS:
            return {
                ...state,
                responseLogin: action.responseLogin
            }
        case LOGIN_FAIL:
            return {
                ...state,
                errorLogin: action.errorLogin
            }
        default:
            return state
    }

}

export default loginReducer