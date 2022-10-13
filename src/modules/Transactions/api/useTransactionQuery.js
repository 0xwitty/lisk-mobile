import { useCustomQuery } from 'utilities/api/hooks/useCustomQuery';
import { useCurrentAccount } from 'modules/Accounts/hooks/useAccounts/useCurrentAccount';
import { useQueryKeys } from 'utilities/api/hooks/useQueryKeys';
import { GET_TRANSACTION_QUERY } from 'utilities/api/queries';
import { API_URL } from 'utilities/api/constants';

/**
 * Fetch a transaction based on provided ID.
 * Executes the API call once the hook is mounted.
 * @param {String} id - ID of the transaction to be fetched.
 * @param {Object} config - Custom configurations for the query.
 * @param {Object} options - Custom options for the query.
 * @returns - The query state of the API call. Includes the data,
 * loading state, error state, and more.
 */
export function useTransactionQuery(id, { config: customConfig = {}, options = {} } = {}) {
  const [currentAccount] = useCurrentAccount();

  const config = {
    url: `${API_URL}/transactions`,
    method: 'get',
    event: 'get.transaction',
    ...customConfig,
    params: {
      transactionID: id,
      senderAddress: currentAccount.metadata.address,
      ...(customConfig?.params || {}),
    },
  };

  const keys = useQueryKeys([GET_TRANSACTION_QUERY, config]);

  return useCustomQuery({
    keys,
    config,
    options,
  });
}
