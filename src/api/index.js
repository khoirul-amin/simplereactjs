import axios from 'axios'

import {
    BASE_DEV,
    LOGIN
} from '../constant'

export const login= payload => axios.post(`${BASE_DEV}${LOGIN}`, payload)
