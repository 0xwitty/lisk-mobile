import { themes, colors, boxes, fonts } from 'constants/styleGuide';

export default () => ({
  common: {
    wrapper: {
      flex: 1,
    },
    container: {
      paddingLeft: boxes.boxPadding,
      paddingRight: boxes.boxPadding,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    illustration: {
      marginBottom: 24,
    },
    title: {
      fontFamily: fonts.family.heading,
      fontSize: fonts.size.h3,
      marginBottom: 16,
      textAlign: 'center',
    },
    description: {
      fontFamily: fonts.family.context,
      fontSize: fonts.size.input,
      textAlign: 'center',
    },
    footer: {
      padding: boxes.boxPadding,
    },
    continueButton: {
      paddingHorizontal: 16,
    },
  },

  [themes.light]: {
    wrapper: {
      backgroundColor: colors.light.white,
    },
    title: {
      color: colors.light.zodiacBlue,
    },
    description: {
      color: colors.light.smoothGray,
    },
  },

  [themes.dark]: {
    wrapper: {
      backgroundColor: colors.dark.mainBg,
    },
    title: {
      color: colors.dark.ghost,
    },
    description: {
      color: colors.dark.ghost,
    },
  },
});
