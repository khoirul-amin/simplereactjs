/* eslint-disable no-param-reassign */
import axios from 'axios'
import { APLUSE, X_API_KEY } from '../constant/index'
// Create interceptors middleware for handling constant dynamic request headers and req body

export default async () => {
  await axios.interceptors.request.use(async (config) => {
    // const { user_id } = store.getState().currentUser.session
    // const access_token = store.getState().currentUser.session.token

    const session = await localStorage.getItem('paymentUser')
    if (session) {
      const sessionObj = JSON.parse(session)
      const formData = new FormData()
      formData.append('userID', sessionObj.userID)
      formData.append('accessToken', sessionObj.accessToken)
      formData.append('aplUse', APLUSE)

      console.warn('FORMDATA', formData)

      if (config.data) {
        Object.keys(config.data).forEach((key) => {
          formData.append(key, config.data[key])
        })
      } 

      config.headers['x-api-key'] = X_API_KEY
      config.headers['Content-Type'] = 'multipart/form-data'
      config.headers['User-Agent'] = 'okhttp/3.9.0'
      config.data = formData
      console.log('form Data by looping', config.data)
      console.log('form Data by spread operator')
    } else {
      const formData = new FormData()
      formData.append('aplUse', APLUSE)
      
      if (config.data) {
        Object.keys(config.data).forEach((key) => {
          formData.append(key, config.data[key])
        })
      }
      config.headers['x-api-key'] = X_API_KEY
      config.headers['Content-Type'] = 'multipart/form-data'
      config.headers['User-Agent'] = 'okhttp/3.9.0'
      config.data = formData
    }

    return config
  }, err => Promise.reject(err))
}
