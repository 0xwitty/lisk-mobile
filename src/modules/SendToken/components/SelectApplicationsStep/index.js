/* eslint-disable max-statements */
import React from 'react';
import { View } from 'react-native';
import { useController } from 'react-hook-form';
import i18next from 'i18next';

import { useTheme } from 'hooks/useTheme';
import { useBlockchainApplicationExplorer } from 'modules/BlockchainApplication/hooks/useBlockchainApplicationExplorer';
import DataRenderer from 'components/shared/DataRenderer';
import { PrimaryButton } from 'components/shared/toolBox/button';
import ResultScreen from 'components/screens/ResultScreen';
import ErrorIllustrationSvg from 'assets/svgs/ErrorIllustrationSvg';

import getSendTokenSelectApplicationsStepStyles from './styles';
import {
  SendTokenRecipientAccountField,
  SendTokenRecipientApplicationField,
  SendTokenSenderApplicationField,
} from './components';

export default function SendTokenSelectApplicationsStep({ nextStep, form }) {
  const { applicationsMetadata } = useBlockchainApplicationExplorer();

  const { field: senderApplicationChainIDField } = useController({
    name: 'senderApplicationChainID',
    control: form.control,
  });

  const { field: recipientApplicationChainIDField } = useController({
    name: 'recipientApplicationChainID',
    control: form.control,
  });

  const { field: recipientAccountAddressField } = useController({
    name: 'recipientAccountAddress',
    control: form.control,
  });

  const { field: addressFormatField } = useController({
    name: 'recipientAccountAddressFormat',
    control: form.control,
  });

  const { styles } = useTheme({
    styles: getSendTokenSelectApplicationsStepStyles(),
  });

  const disableNextStepButton =
    !form.watch('senderApplicationChainID') ||
    !form.watch('recipientApplicationChainID') ||
    !form.watch('recipientAccountAddress');

  return (
    <View style={[styles.wrapper, styles.theme.wrapper]}>
      <DataRenderer
        data={applicationsMetadata.data}
        isLoading={applicationsMetadata.isLoading}
        error={applicationsMetadata.error}
        renderData={(data) => (
          <>
            <View style={[styles.container]}>
              <SendTokenSenderApplicationField
                value={senderApplicationChainIDField.value}
                onChange={senderApplicationChainIDField.onChange}
                errorMessage={form.formState.errors.senderApplicationChainID?.message}
                applications={data}
                style={{ toggle: { container: { marginBottom: 16 } } }}
              />

              <SendTokenRecipientApplicationField
                value={recipientApplicationChainIDField.value}
                onChange={recipientApplicationChainIDField.onChange}
                errorMessage={form.formState.errors.recipientApplicationChainID?.message}
                applications={data}
                style={{ toggle: { container: { marginBottom: 16 } } }}
              />

              <SendTokenRecipientAccountField
                value={recipientAccountAddressField.value}
                onChange={(value) =>
                  form.handleChange(
                    'params.recipientAddress',
                    value,
                    recipientAccountAddressField.onChange
                  )
                }
                errorMessage={form.formState.errors.recipientAccountAddress?.message}
                addressFormat={addressFormatField.value}
                onAddressFormatChange={addressFormatField.onChange}
              />
            </View>

            <PrimaryButton
              onClick={nextStep}
              disabled={disableNextStepButton}
              title={i18next.t('sendToken.applicationsSelect.nextStepButtonText')}
              noTheme
            />
          </>
        )}
        renderError={() => (
          <ResultScreen
            illustration={<ErrorIllustrationSvg />}
            description="Error loading blockchain applications data. Please try again later."
          />
        )}
      />
    </View>
  );
}
