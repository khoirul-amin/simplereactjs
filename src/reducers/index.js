import { combineReducers } from 'redux'


// paymentReducer
// import BannerReducer from './BannerReducer'
import LoginPaymentReducer from './loginReducer'
// import SaldoBonusPaymentReducer from './saldoBonusPaymentReducer'
// import widrawReducer from './widrawReducer'
// import upgradeReducer from './upgradeReducer'
// import TopupReducer from './TopupReducer'
// import TransferSaldo from './TransferSaldo'
// import recentTransfer from './recentTransfer'
// import SettingChangePassword from './settingChangePassword'
// import SettingChangePIN from './settingChangePIN'
// import GetDataKEY from './getKEY'
// import GetDataOTP from './getOTP'
// import NewsReducer from './newsReducer'
// import TopMemberReducer from './TopMemberReducer'
// import PromoReducer from './PromoReducer'
// import History from './HistoryReducer'
// import PulsaPrefixReducer from './PulsaPrefixReducer'
// import PaketDataPrefixReducer from './PaketDataPrefixReducer'
// import SmsReducer from './SmsReducer'
// import TelephoneReducer from './TelephoneReducer'
// import tokenListrikProductReducer from './tokenListrikProductReducer'
// import ETollReducer from './ETollReducer'
// import ESaldoReducer from './ESaldoReducer'
// import WifiReducer from './WifiReducer'
// import VoucherGameReducer from './VoucherGameReducer'
// import orderProductReducer from './orderProductReducer'
// import TagihanListrik from './TagihanListrikReducers'
// import BPJSReducer from './BPJSReducer'
// import telkomReducer from './telkomReducer'
// import TVKabelReducer from './TVKabelReducer'
// import pdamReducer from './pdamReducer'
// import PascabayarReducer from './PascabayarReducer'
// import Finance from './financeReducer'
// import KartuKredit from './KartuKreditReducer'
// import PGN from './PGNReducers'
// import OrderPascabayar from './OrderPascabayarReducer'
// import settingShare from './settingShare'
// import settingShareBonus from './settingShareBonus'
// import settingShareTotalDownline from './settingShareTotalDownline'
// import settingShareProfile from './settingShareProfile'
// import memberNetwork from './SettingJaringan'
// import settingAccountProfile from './settingAccountProfile'
// import LogoutPayment from './logoutPayment'
// import inActiveAccount from './inActiveAccount'
// import RegisterReducer from './RegistrationReducer'
// import CheckUser from './checkUser'
// import DeviceUser from './deviceUser'
// import Exchange from './exchangeReducer'
// import appVersion from './appVersion'
// import rekeningAdd from './rekeningAdd'
// import PBBReducer from './PBBReducer'
// import bankIndoReducer from './bankIndoReducer'
// import resetPassReducer from './resetPassReducer'
// import resetPinReducer from './resetPinReducer'


const RESET_APP = 'RESET_APP'

const appReducer = combineReducers({
  

  // paymentReducer
//   BannerReducer,
  LoginPaymentReducer,
//   SaldoBonusPaymentReducer,
//   widrawReducer,
//   TopupReducer,
//   TransferSaldo,
//   recentTransfer,
//   NewsReducer,
//   TopMemberReducer,
//   PromoReducer,
//   History,
//   PulsaPrefixReducer,
//   PaketDataPrefixReducer,
//   SmsReducer,
//   TelephoneReducer,
//   tokenListrikProductReducer,
//   ETollReducer,
//   ESaldoReducer,
//   WifiReducer,
//   VoucherGameReducer,
//   orderProductReducer,
//   TagihanListrik,
//   BPJSReducer,
//   telkomReducer,
//   TVKabelReducer,
//   pdamReducer,
//   PascabayarReducer,
//   Finance,
//   KartuKredit,
//   PGN,
//   OrderPascabayar,
//   settingShare,
//   SettingChangePassword,
//   SettingChangePIN,
//   settingShareBonus,
//   settingShareProfile,
//   settingShareTotalDownline,
//   settingAccountProfile,
//   GetDataOTP,
//   GetDataKEY,
//   LogoutPayment,
//   inActiveAccount,
//   memberNetwork,
//   CheckUser,
//   RegisterReducer,
//   DeviceUser,
//   Exchange,
//   appVersion,
//   upgradeReducer,
//   rekeningAdd,
//   PBBReducer,
//   upgradeReducer,
//   bankIndoReducer,
//   resetPassReducer,
//   resetPinReducer
})

export const resetStore = () => {
  appReducer({}, { type: RESET_APP })
}

export default appReducer
