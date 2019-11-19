// LIVE

export const connectycubeConfig = [
    {
      appId: 34,
      authKey: 'Hjgj6STnRcrEskA',
      authSecret: 'PfaTnATw7OEG-6u'
    },
    {
      debug: { mode: 1 },
      chat: {
        streamManagement: {
          enable: true
        }
      },
      endpoints: {
        api: 'apiotuchat.connectycube.com',
        chat: 'chatotuchat.connectycube.com'
      },
      on: {
  
      }
    }
  ]
  
  // API DEV MY SERVER
  // export const connectycubeConfig = [
  //   {
  //     appId: 5,
  //     authKey: 'Kzm8FTGmJ7VCtOy',
  //     authSecret: 'Tap5fKyvHNpxNyJ'
  //   },
  //   {
  //     debug: { mode: 1 },
  //     chat: {
  //       streamManagement: {
  //         enable: true
  //       }
  //     },
  //     on: {
  
  //     },
  //     endpoints: {
  //       api: 'api.otuchat.com',
  //       chat: 'chat.otuchat.com'
  //     }
  //   }
  // ]
  
  // DEV
  
  // export const connectycubeConfig = [
  //   {
  //     appId: 36,
  //     authKey: 'ZUHAaaPdgYxj6t6',
  //     authSecret: 'p-FnXqd765XMxCn'
  //   },
  //   {
  //     debug: { mode: 1 },
  //     chat: {
  //       streamManagement: {
  //         enable: true
  //       }
  //     },
  //     endpoints: {
  //       api: 'apiotuchat.connectycube.com',
  //       chat: 'chatotuchat.connectycube.com'
  //     },
  //     on: {
  
  //     },
  //   }
  // ]
  
  export const STORAGE_PUBLIC = false
  
  export const callsConfig = {
    server: 'wss://janus.otuchat.com:8989',
    video: { quality: 'lowres' }
  }
  export const SENDER_ID = '1049407944702' //DEV = 1049407944702 || LIVE = 892351379069
  export const GOOGLE_MAP_APP_KEY = 'AIzaSyDE3Wq377Xlqq3ANoc6dZxXzUgG-hKVwuc'
  export const DEEP_LINK_PROTOCOL = 'otuchat://join/'
  export const OTUCHAT_LINK = 'https://otuchat.com'
  export const CHAT_NAME = 'OtuChat'
  export const OTU_TRANSAKSI = 364640  //DEV = 364640|| LIVE = 360091
  export const URL_BASE = 'DEV' // key 'DEV' ==> API DEVELOPMENT PAYMENT || 'PROD' ==> API LIVE PAYMENT
  export const STORY_EXPIRE = 1000 * 60 * 60 * 24
  