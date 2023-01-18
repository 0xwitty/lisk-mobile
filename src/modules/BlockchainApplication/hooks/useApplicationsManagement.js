/* eslint-disable max-statements */
import { useCallback, useEffect } from 'react';

import { useApplications } from '../context/ApplicationsContext';
import { useApplicationsMetaQuery } from '../api/useApplicationsMetaQuery';
import { useApplicationsStorage } from './useApplicationsStorage';
import { transformApplicationsMetaQueryResult } from '../utils';
import { APPLICATIONS_STORAGE_KEY } from '../constants';

/**
 * Provides an API to add, delete and read the blockchain applications saved by the user.
 * @returns {Object} applications (data, loading and error states), addApplication callback
 * and deleteApplication callback.
 */
export function useApplicationsManagement() {
  const { applications } = useApplications();

  // Fetch default apps metadata from server.
  const {
    data: defaultApplicationsMetaData,
    status: defaultApplicationsMetaDataStatus,
    refetch: refetchApplicationsMetaData,
    error: errorOnDefaultApplicationsMetaData,
  } = useApplicationsMetaQuery({
    config: { transformResult: transformApplicationsMetaQueryResult, params: { isDefault: true } },
  });

  const {
    getApplications: getApplicationsStorageData,
    addApplication: addApplicationToStorage,
    deleteApplication: deleteApplicationFromStorage,
  } = useApplicationsStorage(APPLICATIONS_STORAGE_KEY);

  const addApplication = useCallback(
    (application) =>
      addApplicationToStorage(application.chainID).then(() =>
        applications.dispatchData({ type: 'add', application })
      ),
    [addApplicationToStorage, applications]
  );

  const deleteApplication = useCallback(
    (chainID) =>
      deleteApplicationFromStorage(chainID).then(() =>
        applications.dispatchData({ type: 'delete', chainID })
      ),
    [deleteApplicationFromStorage, applications]
  );

  const retry = useCallback(() => refetchApplicationsMetaData(), [refetchApplicationsMetaData]);

  console.log(JSON.stringify(defaultApplicationsMetaData));

  useEffect(() => {
    if (!applications.data && defaultApplicationsMetaData) {
      getApplicationsStorageData().then((cachedChainIDs) => {
        console.log({ cachedChainIDs });
        // const initApplications = getInitContextApplications({
        //   applications: applicationsData,
        //   defaultApplications: defaultApplicationsData,
        //   cachedChainIDs,
        // });

        const initApplications = defaultApplicationsMetaData.data;

        applications.dispatchData({ type: 'init', applications: initApplications });
      });
    }
  }, [applications, defaultApplicationsMetaData, getApplicationsStorageData]);

  // Set current application status and error based on default applications on-chain
  // and off-chain data query statuses.
  useEffect(() => {
    applications.setStatus(defaultApplicationsMetaDataStatus);
  }, [defaultApplicationsMetaDataStatus, applications]);
  useEffect(() => {
    applications.setError(errorOnDefaultApplicationsMetaData);
  }, [errorOnDefaultApplicationsMetaData, applications]);

  return {
    applications,
    addApplication,
    deleteApplication,
    retry,
  };
}
