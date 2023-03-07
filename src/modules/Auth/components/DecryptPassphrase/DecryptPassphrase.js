/* eslint-disable max-statements */
import React from 'react';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { translate } from 'react-i18next';

import { useTheme } from 'contexts/ThemeContext';
import HeaderBackButton from 'components/navigation/headerBackButton';
import { decryptAccount } from 'modules/Auth/utils/decryptAccount';
import DropDownHolder from 'utilities/alert';
import { useAccounts } from 'modules/Accounts/hooks/useAccounts';
import PasswordForm from '../PasswordForm';
import getStyles from './DecryptPassphrase.styles';

const DecryptPassphrase = ({ account, route, nextStep, t }) => {
  const navigation = useNavigation();
  const { setAccount } = useAccounts();
  const { styles } = useTheme({ styles: getStyles });

  const { title, encryptedData } = route.params;
  const encryptedAccount = account || JSON.parse(encryptedData);

  const onSubmit = async (password) => {
    try {
      const { successRoute } = route.params;
      const { recoveryPhrase } = await decryptAccount(
        encryptedAccount.encryptedPassphrase,
        password
      );
      if (nextStep && typeof nextStep === 'function') {
        nextStep({
          recoveryPhrase,
          encryptedAccount,
        });
      } else {
        setAccount(encryptedAccount);
        navigation.navigate(successRoute);
      }
    } catch (error) {
      DropDownHolder.error(t('Error'), t('auth.setup.decryptPassphraseError'));
    }
  };

  return (
    <SafeAreaView style={[styles.container, styles.theme.wrapper]}>
      <HeaderBackButton title={title} onPress={navigation.goBack} />
      <PasswordForm account={encryptedAccount} onSubmit={onSubmit} />
    </SafeAreaView>
  );
};

export default translate()(DecryptPassphrase);
