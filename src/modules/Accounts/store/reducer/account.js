import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import actionTypes from '../../actionTypes';

/**
 *
 * @param {Object} state
 * @param {type: String, encryptedAccount: Object} action
 */
export const current = (state = {}, { type, encryptedAccount }) => {
  switch (type) {
    case actionTypes.setCurrentAccount:
      return encryptedAccount;
    default:
      return state;
  }
};

/**
 *
 * @param {Object} state
 * @param {type: String, accountSummary: Object} action
 */
export const summary = (state = {}, { type, accountSummary }) => {
  switch (type) {
    case actionTypes.setAccountSummary:
      return accountSummary;
    case actionTypes.resetAccountSummary:
      return {};
    default:
      return state;
  }
};

/**
 *
 * @param {Object} state
 * @param {type: String, encryptedAccount: Object, address: string} action
 */
export const list = (state = {}, { type, encryptedAccount, address, accountData }) => {
  switch (type) {
    case actionTypes.addAccount:
      if (!encryptedAccount?.metadata?.address) {
        return state;
      }
      return {
        ...state,
        [encryptedAccount?.metadata?.address]: encryptedAccount,
      };

    case actionTypes.updateAccount:
      return {
        ...state,
        [address]: {
          ...state[address],
          metadata: {
            ...state[address].metadata,
            ...accountData,
          },
        },
      };

    case actionTypes.deleteAccount:
      delete state[address];
      return {
        ...state,
      };
    default:
      return state;
  }
};

const persistConfig = {
  key: 'account',
  storage: AsyncStorage,
  whitelist: ['list'], // only navigation will be persisted
  blacklist: ['current', 'summary'],
};

const accountReducer = combineReducers({ current, list, summary });

// eslint-disable-next-line import/prefer-default-export
const account = persistReducer(persistConfig, accountReducer);

export default account;
