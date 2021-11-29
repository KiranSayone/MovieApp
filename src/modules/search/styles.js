import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

export default StyleSheet.create({
  mainContainer: {
    paddingTop: 40,
    marginBottom: 0,
    flex: 1,
    backgroundColor: COLORS.BASIC_BACKGROUND,
  },
  headerText: {
    fontSize: 30,
  },
  genreListContainer: {
    paddingVertical: 10,
  },
});
