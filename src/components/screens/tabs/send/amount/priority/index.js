import React from 'react';
import { View } from 'react-native';
import { translate } from 'react-i18next';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { B, P } from '../../../../../shared/toolBox/typography';
import withTheme from '../../../../../shared/withTheme';
import getStyles from './styles';
import InfoSvg from '../../../../../../assets/svgs/InfoSvg';
import { colors } from '../../../../../../constants/styleGuide';
import FormattedNumber from '../../../../../shared/formattedNumber';
import { fromRawLsk } from '../../../../../../utilities/conversions';

const svgcolor = { dark: colors.light.whiteSmoke, light: colors.light.zodiacBlue };

const PriorityFee = ({
  fee, styles, isSelected, onChange
}) => (
  <TouchableOpacity
    key={`${fee.amount}-${fee.title}`}
    containerStyle={[styles.feeButton, isSelected && styles.theme.activeFee]}
    onPress={onChange}
  >
    <P style={[styles.feeText, styles.theme.feeText, isSelected && styles.theme.activeText]}>
      {fee.title}
    </P>
    <FormattedNumber style={[styles.theme.feeText, isSelected && styles.theme.activeText]} type={B}>
      {Number(fromRawLsk(fee.amount)).toLocaleString()}
    </FormattedNumber>
  </TouchableOpacity>
);

const Priority = ({
  t, styles, theme, fees = [], selected, onChange, transactionFee
}) => (
  <View style={[styles.container]}>
    <View style={styles.row}>
      <P style={[styles.title, styles.theme.title]}>
        {t(fees?.length ? 'Priority' : 'Transaction Fee')}
      </P>
      <TouchableOpacity style={styles.infoButton}>
        <InfoSvg color={svgcolor[theme]} />
      </TouchableOpacity>
    </View>
    <View style={styles.row}>
      {fees?.length ? (
        fees.map((fee, i) => (
          <PriorityFee
            key={`${fee.amount}-${fee.title}`}
            fee={fee}
            styles={styles}
            isSelected={selected === i}
            onChange={() => onChange(i)}
          />
        ))
      ) : (
        <FormattedNumber type={B}>{transactionFee}</FormattedNumber>
      )}
    </View>
  </View>
);

export default withTheme(translate()(Priority), getStyles());
