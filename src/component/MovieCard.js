import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ColorPropType,
  ImageBackground,
} from 'react-native';
import COLORS from '../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {getPoster, getLanguage} from '../services/MovieServices';
const IMDB = require('../assets/images/IMDB.png');

const MovieCard = ({
  title,
  size,
  language,
  voteLanguage,
  voteCount,
  voteAverage,
  poster,
}) => {
  const [liked, setLiked] = useState(false);
  const [voteCountValue, setVoteCountValue] = useState(voteCount);
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View
        style={{...styles.container, height: 340 * size, width: 230 * size}}>
        <ImageBackground
          style={{...styles.container, height: 340 * size, width: 230 * size}}
          imageStyle={{borderRadius: 12}}
          source={{uri: getPoster(poster)}}>
          <View style={{...styles.imdbContainer, paddingVertical: 3 * size}}>
            <Image
              source={IMDB}
              resizeMode="cover"
              style={{...styles.imdbImage, height: 20 * size, width: 50 * size}}
            />
            <Text
              style={{
                ...styles.imdbRating,
                marginRight: 5 * size,
                fontSize: 15 * size,
              }}>
              {voteAverage}
            </Text>
          </View>
          <TouchableOpacity
            style={{position: 'absolute', bottom: 10 * size, left: 10 * size}}
            onPress={() => {
              setLiked(!liked);
              setVoteCountValue(
                liked ? voteCountValue - 1 : voteCountValue + 1,
              );
            }}>
            <Ionicons
              name={liked ? 'heart' : 'heart-outline'}
              size={25 * size}
              color={liked ? COLORS.HEART : COLORS.WHITE}
            />
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <View>
        <Text
          style={{...styles.movieTitle, width: 230 * size}}
          numberOfLines={3}>
          {title}
        </Text>
        <View style={styles.movieSubtitleContainer}>
          <Text style={styles.movieSubtitle}>
            {' '}
            {getLanguage(language).english_name}
          </Text>
          <View style={styles.rowAndCenter}>
            <Ionicons
              name="heart"
              size={17 * size}
              color={COLORS.HEART}
              style={{marginRight: 5}}
            />
            <Text>{voteCountValue}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 340,
    width: 230,
    borderRadius: 20,
  },
  movieTitle: {
    fontFamily: 'NunitoSans-ExtraBold',
    width: 230,
  },
  movieSubtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  movieSubtitle: {
    fontFamily: 'NunitoSans-Regular',
  },
  rowAndCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imdbContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    backgroundColor: COLORS.YELLOW,
    borderBottomLeftRadius: 5,
    borderTopRightRadius: 12,
    paddingVertical: 3,
  },
  imdbImage: {
    height: 20,
    width: 50,
    borderBottomLeftRadius: 5,
  },
  imdbRating: {
    marginRight: 5,
    color: COLORS.HEART,
    fontFamily: 'NunitoSans-ExtraBold',
  },
});
export default MovieCard;
