import axios from 'axios'
import {
  // BASE URL
  BASE_URL_PAYMENT,
  BASE_URL_LIVE,
  SALDO_BONUS,
  GET_TOTAL_DOWNLINE,
  GET_PROFILE,
  ACCOUNT_PROFILE,
  EDIT_EMAIL,
  // SETTING
  SET_SETTING_CHANGE_PASSWORD,
  SET_SETTING_CHANGE_PIN,
  GET_KEY,
  LOGOUT_PAYMENT,
  INACTIVE_TOKEN,
  // HISTORY
  GET_HISTORY,
  // WIDRAW
  //DUMMY_WIDRAW,
  WITHDRAW,
  // TRANSFER
  //GET_RECENT_TRANSFER,
  GET_MEMBER,
  GET_TRANSFER,
  RECENT_TRANSFER,
  BANK_DEPOSIT,
  DEPOSIT_INFO,
  // PULSA
  PULSA_PRODUCT,
  PULSA_PREFIX,
  // PAKET DATA
  PAKETDATA_PREFIX,
  PAKETDATA_PRODUCT,
  // SMS
  SMS_PREFIX,
  SMS_PRODUCT,
  // TELEPHONE
  TELEPHONE_PREFIX,
  TELEPHONE_PRODUCT,
  // TOKEN LISTRIK
  PLN_TOKEN_PRODUCT,
  // ETOLL
  ETOLL_PRODUCT,
  // ESALDO
  ESALDO_PRODUCT,
  // WIFI
  WIFI_PRODUCT,
  // GAME
  GAME_PRODUCT,
  GET_MEMBER_NETWORK,
  SET_JARINGAN,
  GET_TOTAL_GENERASI,
  GET_MEMBER_PER_GENERASI,
  REGISTER_NEW_MEMBER,
  ORDER_PRODUCT,
  PASCABAYAR_PRODUCT,
  PASCABAYAR_CEK,
  ORDER_PRODUCT_PASCABAYAR,
  NEWS,
  TRANSACTION_CHECK,
  CHECK_USER,
  DEVICE_USER,
  TOPUP_STATUS,
  GET_KOMPETISI,
  GET_LIST_MEMBER,
  EXCHANGE,
  APP_VERSION,
  UPGRADE_USER,
  UPDATE_REK_BANK,
  LOGIN,
  BANK_INDO,
  RESET_PASS,
  RESET_PIN,
  GET_OTP
} from '../constant'

import { URL_BASE } from '../config';

var BASE_URL = ''

if (URL_BASE === 'DEV') {
  BASE_URL = BASE_URL_PAYMENT
} else {
  BASE_URL = BASE_URL_LIVE
}

export const setSettingChangePassword = payload => axios.post(`${BASE_URL}/${SET_SETTING_CHANGE_PASSWORD}`, payload)
export const setSettingChangePIN = payload => axios.post(`${BASE_URL}/${SET_SETTING_CHANGE_PIN}`, payload)
export const getKEY = payload => axios.post(`${BASE_URL}/${GET_KEY}`, payload)
// HISTORY
export const getHistoryById = payload => axios.post(`${BASE_URL}/${GET_HISTORY}`, payload)
// WIDRAW
export const getBonusWidraw = payload => axios.post(`${BASE_URL}${WITHDRAW}`, payload)
// TRANFER
export const getMember = payload => axios.post(`${BASE_URL}/${GET_MEMBER}`, payload)
export const getTransfer = payload => axios.post(`${BASE_URL}/${GET_TRANSFER}`, payload)
export const getRecentTransfer = payload => axios.post(`${BASE_URL}/${RECENT_TRANSFER}`)
export const getBankDeposit = payload => axios.post(`${BASE_URL}${BANK_DEPOSIT}`, payload)
export const getDepositInfo = payload => axios.post(`${BASE_URL}${DEPOSIT_INFO}`, payload)
// PULSA
export const getPulsaPrefixApi = payload => axios.post(`${BASE_URL}${PULSA_PREFIX}`, payload)
export const getPulsaProductApi = payload => axios.post(`${BASE_URL}${PULSA_PRODUCT}`, payload)
// PAKET DATA
export const getPaketDataPrefixApi = payload => axios.post(`${BASE_URL}${PAKETDATA_PREFIX}`, payload)
export const getPaketDataProductApi = payload => axios.post(`${BASE_URL}${PAKETDATA_PRODUCT}`, payload)
// SMS
export const getSmsPrefixApi = payload => axios.post(`${BASE_URL}${SMS_PREFIX}`, payload)
export const getSmsProductApi = payload => axios.post(`${BASE_URL}${SMS_PRODUCT}`, payload)
// TELEPHONE
export const getTelephonePrefixApi = payload => axios.post(`${BASE_URL}${TELEPHONE_PREFIX}`, payload)
export const getTelephoneProductApi = payload => axios.post(`${BASE_URL}${TELEPHONE_PRODUCT}`, payload)
// TOKEN LISTRIK
export const getPLNTokenProductApi = payload => axios.post(`${BASE_URL}${PLN_TOKEN_PRODUCT}`, payload)
// ETOLL
export const getEtollProductApi = payload => axios.post(`${BASE_URL}${ETOLL_PRODUCT}`, payload)
// ESALDO
export const getEsaldoProductApi = payload => axios.post(`${BASE_URL}${ESALDO_PRODUCT}`, payload)
// WIFI
export const getWifiProductApi = payload => axios.post(`${BASE_URL}${WIFI_PRODUCT}`, payload)
// GAME
export const getGameProductApi = payload => axios.post(`${BASE_URL}${GAME_PRODUCT}`, payload)
// ORDER PRABAYAR
export const getOrderPrabayar = payload => axios.post(`${BASE_URL}${ORDER_PRODUCT}`, payload)
// TAGIHAN LISTRIK
export const getTagihanListrik = payload => axios.post(`${BASE_URL}/${PASCABAYAR_CEK}`, payload)
// BPJS
export const getBpjsCheck = payload => axios.post(`${BASE_URL}${PASCABAYAR_CEK}`, payload)
// TELKOM
export const checkTelkomPayment = payload => axios.post(`${BASE_URL}${PASCABAYAR_CEK}`, payload)
// TV KABEL
// PDAM
export const checkPDAMPayment = payload => axios.post(`${BASE_URL}${PASCABAYAR_CEK}`, payload)
// PBB
export const checkPBBPayment = payload => axios.post(`${BASE_URL}${PASCABAYAR_CEK}`, payload)
// PASCABAYAR
export const getPascabayarProducts = payload => axios.post(`${BASE_URL}/${PASCABAYAR_PRODUCT}`, payload)
export const checkPascabayar = payload => axios.post(`${BASE_URL}/${PASCABAYAR_CEK}`, payload)
// FINANCE
export const getFinance = payload => axios.post(`${BASE_URL}/${PASCABAYAR_CEK}`, payload)
export const getFinanceProduct = payload => axios.post(`${BASE_URL}/${PASCABAYAR_PRODUCT}`, payload)
// KARTU KREDIT
export const getKartuKredit = payload => axios.post(`${BASE_URL}/${PASCABAYAR_CEK}`, payload)
// PGN
export const getPGN = payload => axios.post(`${BASE_URL}/${PASCABAYAR_CEK}`, payload)
// ORDER PASCABAYAR
export const getOrderPascabayar = payload => axios.post(`${BASE_URL}${ORDER_PRODUCT_PASCABAYAR}`, payload)
// UNDEFINED
export const getProductType = payload => axios.post(`${BASE_URL}${PASCABAYAR_PRODUCT}`, payload)

// jaringan
export const getMemberNetworks = payload => axios.post(`${BASE_URL}${GET_MEMBER_NETWORK}`, payload)
export const updateJaringan = () => axios.post(`${BASE_URL}${SET_JARINGAN}`)
export const getTotalGenerasi = (payload) => axios.post(`${BASE_URL}${GET_TOTAL_GENERASI}`, payload)
export const getMemberGenerasi = (payload) => axios.post(`${BASE_URL}${GET_MEMBER_PER_GENERASI}`, payload)

// Account Profile
export const accountProfile = () => axios.post(`${BASE_URL}${ACCOUNT_PROFILE}`)
export const editEmail = payload => axios.post(`${BASE_URL}${EDIT_EMAIL}`, payload)

/* SHARE */
export const setSettingShareBonus = payload => axios.post(`${BASE_URL}/${SALDO_BONUS}`, payload)
export const setSettingShareTotalDownline = payload => axios.post(`${BASE_URL}/${GET_TOTAL_DOWNLINE}`, payload)
export const setSettingShareProfile = payload => axios.post(`${BASE_URL}/${GET_PROFILE}`, payload)

// INACTIVE
export const setInactiveAccount = payload => axios.post(`${BASE_URL}/${INACTIVE_TOKEN}`, payload)

// LOGOUT
export const logoutPayment = payload => axios.post(`${BASE_URL}/${LOGOUT_PAYMENT}`, payload)

// Register
export const checkUser = payload => axios.post(`${BASE_URL}${CHECK_USER}`, payload)
export const setRegisterMember = payload => axios.post(`${BASE_URL}/${REGISTER_NEW_MEMBER}`, payload)

// news
export const getNews = payload => axios.post(`${BASE_URL}${NEWS}`, payload)
export const postCheckingStatusTransaction = payload => axios.post(`${BASE_URL}${TRANSACTION_CHECK}`, payload)

// device user
export const deviceUser = payload => axios.post(`${BASE_URL}${DEVICE_USER}`, payload)
export const saldoBonus = () => axios.post(`${BASE_URL}${SALDO_BONUS}`)
export const getStatusTopup = payload => axios.post(`${BASE_URL}${TOPUP_STATUS}`, payload)

// EXCHANGE
export const exchange = payload => axios.post(`${BASE_URL}${EXCHANGE}`, payload)

// App version
export const appVersion = payload => axios.post(`${BASE_URL}${APP_VERSION}`, payload)
// Top Member

export const getKompetisi = payload => axios.post(`${BASE_URL}${GET_KOMPETISI}`, payload)
export const getListMember = payload => axios.post(`${BASE_URL}${GET_LIST_MEMBER}`, payload)

// API ADD REKENING
export const get = payload => axios.post(`${BASE_URL}${GET_LIST_MEMBER}`, payload)

//Upgrade Member 
export const Upgrade = payload => axios.post(`${BASE_URL}${UPGRADE_USER}`, payload)

//Update Bank
export const rekeningBank = payload => axios.post(`${BASE_URL}${UPDATE_REK_BANK}`, payload)

//Login
export const loginPayment = payload => axios.post(`${BASE_URL}${LOGIN}`, payload)

//BANK INDONESIA
export const getbankIndo = payload => axios.post(`${BASE_URL}${BANK_INDO}`, payload)

//RESET PASSWORD
export const getresetPass = payload => axios.post(`${BASE_URL}${RESET_PASS}`, payload)

//RESET PIN
export const getresetPin = payload => axios.post(`${BASE_URL}${RESET_PIN}`, payload)

//OTP 
export const getOTP = payload => axios.post(`${BASE_URL}${GET_OTP}`, payload)