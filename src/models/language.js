import enUS from '../locale/en-US'
import zhTW from '../locale/zh-TW'
import zhCN from '../locale/zh-CN'

export default {

  namespace: 'language',

  state: {
    key: 'en',
    locale: 'en',
    messages: enUS,
    lans: [
      // Add new language here:
      // Example
      // {
      //   locale: 'en',    // https://github.com/yahoo/react-intl
      //   messages: enUS,  // import your files
      // },
      {
        locale: 'en',
        messages: enUS,
      }, {
        locale: 'zh-tw',
        messages: zhTW,
      }, {
        locale: 'zh-cn',
        messages: zhCN,
      }],
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' })
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload }
    },
    update(state, { payload }) {
      return {
        ...state,
        locale: payload.locale,
        key: payload.key,
        messages: payload.messages,
      }
    },
  },

}
