import * as types from "../action/actionTypes";

const initialState={
    response:'',
    error:'',
    loading: false
}
const loginReducer=(state=initialState, action) =>{
    switch(action.type){
        case types.LOGIN_PAYMENT_USER_SUCCESS:
            const {response} = action
        if (response.errNumber === '0'){
            const paymentUser = {
                userID: response.userID,
                accessToken: response.mbr_token,
                carier: response.carier,
                h2hcarier: response.h2hcarier,
                nameMember: response.name_member,
                sts_upgrade: response.sts_upgrade
            }
            localStorage.setItem('paymentUser', JSON.stringify(paymentUser))
        }
        return{
            ...state,
            response: action.response
        }
        case types.LOGIN_PAYMENT_USER_FAIL:
            return{
                ...state,
                error: action.error
            }
        case types.SET_LOADING_LOGIN:
            return{
                ...state,
                loading: action.loading
            }
        case types.SET_CLEAR_LOGIN:
            return{
                ...state,
                response:null,
                error:null
            }
        default:
        return state

    }

}

export default loginReducer