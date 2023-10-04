/* eslint-disable max-statements */
import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import i18next from 'i18next';
import Toast from 'react-native-toast-message';

import { useTheme } from 'contexts/ThemeContext';
import HeaderBackButton from 'components/navigation/headerBackButton';
import { H4, P } from 'components/shared/toolBox/typography';
import { decryptAccount } from 'modules/Auth/utils/decryptAccount';
import { useAccounts } from 'modules/Accounts/hooks/useAccounts';
import PasswordForm from '../PasswordForm';
import getStyles from './DecryptRecoveryPhrase.styles';

export default function DecryptRecoveryPhrase({
  account,
  finalCallback,
  withNavigationHeader = true,
  route,
  nextStep,
  navigation,
  style,
}) {
  const { setAccount } = useAccounts();
  const [isLoading, setIsLoading] = useState();
  const { styles } = useTheme({ styles: getStyles() });
  const { encryptedData, title, description } = route.params;
  const encryptedAccount = account || JSON.parse(encryptedData);

  const onSubmit = async (password) => {
    try {
      setIsLoading(true);
      const { successRoute } = route.params;
      const { recoveryPhrase } = await decryptAccount(encryptedAccount.crypto, password);
      setIsLoading(false);
      if (finalCallback) {
        finalCallback(account.metadata.address, password);
      } else if (nextStep && typeof nextStep === 'function') {
        nextStep({
          password,
          address: account.metadata.address,
          recoveryPhrase,
          encryptedAccount,
        });
      } else {
        setAccount(encryptedAccount);
        navigation.navigate(successRoute);
      }
    } catch (error) {
      setIsLoading(false);

      Toast.show({
        type: 'error',
        text2: i18next.t('auth.setup.decryptRecoveryPhraseError'),
      });
    }
  };

  const renderHeader = () => {
    if (withNavigationHeader) {
      return <HeaderBackButton title={title} onPress={navigation.goBack} />;
    }

    return (
      <>
        {title && (
          <H4 style={[styles.title, styles.theme.title, style?.title]}>{i18next.t(title)}</H4>
        )}
        {description && (
          <P style={[styles.description, styles.theme.description, style?.description]}>
            {i18next.t(description)}
          </P>
        )}
      </>
    );
  };

  const Container = withNavigationHeader ? View : SafeAreaView;

  return (
    <Container style={[styles.container, styles.theme.container, style?.container]}>
      {renderHeader()}

      <PasswordForm
        account={encryptedAccount}
        isLoading={isLoading}
        onSubmit={onSubmit}
        style={style?.form}
      />
    </Container>
  );
}
