import React, {useEffect, useState} from 'react';
import {View, Text, Image, Button, StatusBar} from 'react-native';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import styles from './styles';
import GenreCard from '../../component/GenreCard';
import ItemSeparator from '../../component/ItemSeparator';
import MovieCard from '../../component/MovieCard';
import {
  getNowPlayingMovies,
  getUpcomingMovies,
  getAllGenres,
} from '../../services/MovieServices';
import colors from '../../constants/colors';

const homeScreen = () => {
  const [activeGenre, setActiveGenre] = useState('All');
  const [nowPlayingMovies, setNowPlayingMovies] = useState({});
  const [upcomingMovies, setUpcomingMovies] = useState({});
  const [genres, setGenres] = useState([{id: 10110, name: 'All'}]);

  useEffect(() => {
    getNowPlayingMovies().then(movieResponse =>
      setNowPlayingMovies(movieResponse.data),
    );
    getUpcomingMovies().then(movieResponse =>
      setUpcomingMovies(movieResponse.data),
    );
    getAllGenres().then(genreResponse =>
      setGenres([...genres, ...genreResponse.data.genres]),
    );
  }, []);
  return (
    <ScrollView style={styles.container}>
      <StatusBar />
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Now Showing</Text>
        <Text style={styles.headerSubtitle}>View All</Text>
      </View>
      <View style={styles.genreListContainer}>
        <FlatList
          data={genres}
          horizontal={true}
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <ItemSeparator width={30} />}
          ListHeaderComponent={() => <ItemSeparator width={10} />}
          ListFooterComponent={() => <ItemSeparator width={10} />}
          renderItem={({item, index}) => {
            return (
              <GenreCard
                genreName={item.name}
                active={item.name === activeGenre ? true : false}
                onPress={setActiveGenre}
              />
            );
          }}
        />
      </View>
      <View style={styles.genreListContainer}>
        <FlatList
          data={nowPlayingMovies.results}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={() => <ItemSeparator width={20} />}
          ListHeaderComponent={() => <ItemSeparator width={20} />}
          ListFooterComponent={() => <ItemSeparator width={20} />}
          renderItem={({item}) => (
            <MovieCard
              title={item.title}
              language={item.original_language}
              voteAverage={item.vote_average}
              voteCount={item.vote_count}
              poster={item.poster_path}
              size={1}
            />
          )}
        />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Coming Soon</Text>
        <Text style={styles.headerSubtitle}>View All</Text>
      </View>
      <View style={styles.genreListContainer}>
        <FlatList
          data={upcomingMovies.results}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={() => <ItemSeparator width={20} />}
          ListHeaderComponent={() => <ItemSeparator width={20} />}
          ListFooterComponent={() => <ItemSeparator width={20} />}
          renderItem={({item}) => (
            <MovieCard
              title={item.title}
              language={item.original_language}
              voteAverage={item.vote_average}
              voteCount={item.vote_count}
              poster={item.poster_path}
              size={0.6}
            />
          )}
        />
      </View>
    </ScrollView>
  );
};

export default homeScreen;
