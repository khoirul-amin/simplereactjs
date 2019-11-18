import { LOGIN_SUCCESS, LOGIN_FAIL } from './actionTypes'
import {login} from '../api'

export const loginPayment=(phone,password) =>{
    const payload = {
        userID : phone,
        passwd : password,
        device: 'PC',
        ip_address: '127.0.0.1'
    }
    login(payload).then(({data})=>{
        return{
            type:LOGIN_SUCCESS,
            responseLogin:data
        }

    }).catch((error)=>{
        return{
            type:LOGIN_FAIL,
            errorLogin:error.message
        }
    })

}