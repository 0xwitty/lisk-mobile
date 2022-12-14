import { useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  addAccount as addAccountAction,
  deleteAccount as deleteAccountAction,
  updateAccount as updateAccountAction,
} from '../store/actions';
import { selectAccounts } from '../store/selectors';

export const useAccounts = () => {
  const dispatch = useDispatch();

  const accountsObject = useSelector(selectAccounts);

  const accounts = useMemo(() => Object.values(accountsObject), [accountsObject]);

  const setAccount = useCallback((account) => dispatch(addAccountAction(account)), [dispatch]);
  const updateAccount = useCallback(
    (address, data) => dispatch(updateAccountAction(address, data)),
    [dispatch]
  );
  const deleteAccount = useCallback(
    (address) => dispatch(deleteAccountAction(address)),
    [dispatch]
  );
  const getAccount = (address) => accountsObject[address];

  return {
    accounts,
    setAccount,
    updateAccount,
    deleteAccount,
    getAccount,
  };
};
