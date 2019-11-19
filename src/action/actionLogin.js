import md5 from 'md5'
import {KODE} from '../constant'
import {
    LOGIN_PAYMENT_USER_SUCCESS,
    LOGIN_PAYMENT_USER_FAIL,
    SET_LOADING_LOGIN,
    SET_CLEAR_LOGIN,
    SET_LOGIN
} from './actionTypes'
import { loginPayment } from '../api'

export const checkLoginPayment = async (parentComponent) =>{
    const userPaymentSession = await localStorage.getItem('paymentUser')
    if (!userPaymentSession){
        alert ('Login Gagal !')
        return false
    }
    return true
}
export const getLoginPayment = (userPaymentPhone, userPassword) => async dispatch =>{
    dispatch(setLoading(true))

    const token = `${new Date().getFullYear()}-${
        new Date().getMonth()}-${
        new Date().getDate()}T${
        new Date().getHours()}:${
        new Date().getMinutes()}:${
        new Date().getSeconds()}`
    
    const password = md5(userPassword + KODE)
    const securityCode = md5(token + md5(password))

    const payload ={
        useID: userPaymentPhone,
        token,
        passwd: userPassword,
        securityCode
    }

    //console.log(payload)
    await loginPayment(payload).then(async ({data}) => {
        dispatch(userSuccess(data))
        //dispatch(setLoading(false))
    }).catch((error)=>{
        dispatch(userFail(error))
        //dispatch(userLoading(false))
    })
}

export const userSuccess = (responseData) => ({
    type: LOGIN_PAYMENT_USER_SUCCESS,
    response: responseData
  })
  
  export const userFail = (error) => ({
    type: LOGIN_PAYMENT_USER_FAIL,
    error: error.message
  })
  
  export const setClearLogin = () => dispatch => dispatch({
    type: SET_CLEAR_LOGIN
  })
  
  const setLoading = loading => ({
    type: SET_LOADING_LOGIN,
    loading
  })
  
  export const setLogin = login => ({
    type: SET_LOGIN,
    login
  })
