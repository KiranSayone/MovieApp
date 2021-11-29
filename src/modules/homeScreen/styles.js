import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';
export default StyleSheet.create({
  container: {
    paddingTop: 40,
    marginBottom: 0,
    flex: 1,
    backgroundColor: COLORS.BASIC_BACKGROUND,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontFamily: 'NunitoSans-Regular',
  },
  headerSubtitle: {
    fontSize: 13,
    color: COLORS.ACTIVE,
    fontFamily: 'NunitoSans-Bold',
  },
  genreListContainer: {
    paddingVertical: 10,
  },
});
