/* eslint-disable complexity */
/* eslint-disable max-statements */
import { useEffect, useRef, useState } from 'react';

import { useAuth } from 'modules/Auth/hooks/useAuth';
import { useNetworkStatusQuery } from 'modules/Network/api/useNetworkStatusQuery';
import { useCurrentAccount } from 'modules/Accounts/hooks/useCurrentAccount';
import { useCommandParametersSchemasQuery } from 'modules/Network/api/useCommandParametersSchemasQuery';

import { Transaction } from '../utils/Transaction';
import { usePriorityFee } from './usePriorityFee';

/**
 * Creates a transaction object with all required build-in
 * functionalities (sign, encode, decode, update and more).
 * @param {Object} params
 * @param {String} params.module - Module of the transaction (optional).
 * @param {String} params.command - Command of the transaction (optional).
 * @param {String} params.encodedTransaction - Encoded transaction to create a transaction object from (optional).
 * @returns {Object} The created transaction data, isLoading and error states.
 */
export function useCreateTransaction({ module = null, command = null, encodedTransaction = null }) {
  const transactionRef = useRef(new Transaction());
  const [isSuccess, setIsSuccess] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentAccount] = useCurrentAccount();
  const { address, pubkey } = currentAccount?.metadata ?? {};

  const transaction = transactionRef.current;

  const {
    data: networkStatusData,
    // isLoading: isNetworkStatusLoading,
    isSuccess: isNetworkStatusSuccess,
    isError: isErrorOnNetworkStatus,
  } = useNetworkStatusQuery();

  const {
    data: authData,
    // isLoading: isAuthLoading,
    isSuccess: isAuthSuccess,
    isError: isErrorOnAuth,
  } = useAuth(address);

  const {
    data: commandParametersSchemasData,
    // isLoading: isCommandParametersSchemasLoading,
    isSuccess: isCommandParametersSchemasSuccess,
    isError: isErrorOnCommandParametersSchemas,
  } = useCommandParametersSchemasQuery();

  const {
    data: priorityFeeData,
    //  isLoading: isPriorityFeeLoading,
    isSuccess: isPriorityFeeSuccess,
    isError: isErrorPriorityFee,
  } = usePriorityFee();

  const isInitDataSuccess =
    isNetworkStatusSuccess &&
    isAuthSuccess &&
    isCommandParametersSchemasSuccess &&
    isPriorityFeeSuccess;

  const isErrorOnInitData =
    isErrorOnNetworkStatus ||
    isErrorOnAuth ||
    isErrorOnCommandParametersSchemas ||
    isErrorPriorityFee;

  const transactionSchema = commandParametersSchemasData?.data?.transaction?.schema;

  useEffect(
    () => {
      if (isInitDataSuccess && transactionSchema) {
        try {
          transaction.init({
            pubkey,
            networkStatus: networkStatusData?.data,
            auth: authData,
            priorityFee: priorityFeeData,
            commandParametersSchemas: commandParametersSchemasData?.data.commands,
            module,
            command,
            encodedTransaction,
            schema: transactionSchema,
          });

          setIsLoading(false);
          setIsSuccess(true);
        } catch (e) {
          setError(new Error('Error on transaction initialization.'));
          setIsLoading(false);
          setIsSuccess(false);
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isInitDataSuccess, transaction, encodedTransaction, module, pubkey, command, transactionSchema]
  );

  useEffect(() => {
    if (isErrorOnInitData) {
      setError(new Error('Error during transaction data initialization.'));
      setIsLoading(false);
      setIsSuccess(false);
    }
  }, [isErrorOnInitData]);

  return { data: transaction, isLoading, isSuccess, error };
}
