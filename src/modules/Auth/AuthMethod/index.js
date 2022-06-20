import React, { useEffect } from 'react';
import {
  LogBox,
  View,
  SafeAreaView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { translate } from 'react-i18next';
import RNFS from 'react-native-fs';
import SplashScreen from 'react-native-splash-screen';
import DocumentPicker from 'react-native-document-picker';
import withTheme from 'components/shared/withTheme';
import PassphraseSvg from 'assets/svgs/PassphraseSvg';
import UploadSvg from 'assets/svgs/UploadSvg';
import {
  settingsRetrieved
} from '../../Settings/actions';
import getStyles from './styles';
import Splash from '../components/splash';
import CreateAccount from '../components/createAccount';
import AuthTypeItem from '../components/AuthType';

// there is a warning in RNOS module. remove this then that warning is fixed
LogBox.ignoreAllLogs();

// eslint-disable-next-line max-statements
const AuthMethod = ({
  styles,
  route,
  t,
  navigation,
}) => {
  const signOut = route.params?.signOut;
  const settings = useSelector(state => state.settings);
  const dispatch = useDispatch();

  const init = () => {
    SplashScreen.hide();
  };

  useEffect(() => {
    if (settings.showedIntro) {
      dispatch(settingsRetrieved());
      init();
    } else {
      navigation.push('Intro');
    }
  }, []);

  const selectEncryptedJSON = async () => {
    try {
      const file = await DocumentPicker.pickSingle({ type: DocumentPicker.types.allFiles });
      const data = await RNFS.readFile(file.uri);
      console.log(data);
      navigation.navigate('DecryptPhrase', { title: 'auth.setup.decrypt_passphrase', address: 'lskqzpfr3uq8bm2jee5dkv4ns79uuswjzc9bbpezu', successRoute: 'SecretRecoveryPhrase' });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={[styles.wrapper, styles.theme.wrapper]}>
      <View style={[styles.container]}>
        <Splash animate={!signOut} showSimplifiedView={false} />
        <View>
          <AuthTypeItem illustration={<PassphraseSvg />} label={t('auth.setup.secret_phrase')} onPress={() => navigation.navigate('SecretRecoveryPhrase')} testID="secret-phrase" />
          <AuthTypeItem illustration={<UploadSvg />} label={t('auth.setup.restore_file')} onPress={selectEncryptedJSON} testID="restore-from-file" />
        </View>
        <CreateAccount />
      </View>
    </SafeAreaView>
  );
};

export default withTheme(
  translate()(AuthMethod),
  getStyles()
);
