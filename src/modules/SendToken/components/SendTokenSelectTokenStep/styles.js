import { themes, colors, boxes } from 'constants/styleGuide';

export default function getSendTokenSelectTokenStepStyles() {
  return {
    common: {
      wrapper: {
        flex: 1,
        paddingLeft: boxes.boxPadding,
        paddingRight: boxes.boxPadding
      },
      container: {
        flex: 1,
      },
      tokenNameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      tokenSvg: {
        marginLeft: 8,
      },
    },
    [themes.light]: {
      wrapper: {
        backgroundColor: colors.light.white,
      },
    },
    [themes.dark]: {
      wrapper: {
        backgroundColor: colors.dark.mainBg,
      },
    },
  };
}
