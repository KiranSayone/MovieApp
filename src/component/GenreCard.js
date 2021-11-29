import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';
import COLORS from '../constants/colors';

const {width} = Dimensions.get('screen');
const setWidth = w => (width / 100) * w;

const GenreCard = ({genreName, active, onPress}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress(genreName);
      }}
      style={{
        ...styles.container,
        backgroundColor: active ? COLORS.ACTIVE : COLORS.WHITE,
      }}
      activeOpacity={0.5}>
      <Text
        style={{
          ...styles.genreText,
          color: active ? COLORS.WHITE : COLORS.BLACK,
        }}>
        {genreName}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#fff',
    paddingVertical: 8,
    marginVertical: 2,
    width: setWidth(25),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
  genreText: {
    fontSize: 13,
    color: COLORS.ACTIVE,
    fontFamily: 'NunitoSans-Bold',
  },
});
export default GenreCard;
