import { themes, colors, fonts } from 'constants/styleGuide';

export default () => ({
  common: {
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
    },
    titleContainer: {
      flex: 1,
      marginLeft: 5,
      marginRight: 5,
    },
    subtitle: {
      paddingTop: 4,
      paddingBottom: 2,
      fontSize: fonts.size.small,
    },
    icon: {
      marginRight: 8,
    },
    arrow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    arrowIcon: {
      marginLeft: 5,
    },
  },

  [themes.light]: {
    title: {
      color: colors.light.maastrichtBlue,
    },
    subtitle: {
      color: colors.light.slateGray,
    },
  },

  [themes.dark]: {
    title: {
      color: colors.dark.platinum,
    },
    subtitle: {
      color: colors.light.slateGray,
    },
  },
});
