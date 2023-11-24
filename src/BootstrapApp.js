/* eslint-disable max-statements */
import React from 'react';

import { useCurrentApplication } from 'modules/BlockchainApplication/hooks/useCurrentApplication';
import { useBootstrapCurrentApplication } from 'modules/BlockchainApplication/hooks/useBootstrapCurrentApplication';
import ErrorScreen from 'components/screens/ErrorFallbackScreen';
import LoadingScreen from 'components/screens/LoadingFallbackScreen/LoadingFallbackScreen';
import { useEvents } from '../libs/wcm/hooks/useEvents';
import { useBootstrapApplications } from './modules/BlockchainApplication/hooks/useBootstrapApplications';
import { useBootstrapAPI } from './utilities/api/hooks/useBootstrapAPI';

/**
 * Bootstrap the app by calling all previous business logic to load the required data.
 * @param {React.ReactNode} children - Components tree to provide the loaded data.
 */
export default function BootstrapApp({ children }) {
  const [currentApplication] = useCurrentApplication();

  // Bootstrap service API.
  const {
    isLoading: isLoadingBootstrapAPI,
    isError: isErrorBootstrapAPI,
    error: errorOnBootstrapAPI,
  } = useBootstrapAPI();

  const isLoading = currentApplication.status === 'loading' || isLoadingBootstrapAPI;
  const isError = currentApplication.status === 'error' || isErrorBootstrapAPI;
  const error = currentApplication.error || errorOnBootstrapAPI;

  // Bootstrap API client with current application.
  const retryBootstrapCurrentApplication = useBootstrapCurrentApplication();

  // Bootstrap applications
  useBootstrapApplications();

  // Bootstrap WC.
  useEvents();

  const handleRetry = () => retryBootstrapCurrentApplication();

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ErrorScreen onRetry={handleRetry} error={error} />;
  }

  return children;
}
