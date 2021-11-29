import React from 'react';
import {View, Text, Image, Button} from 'react-native';
import styles from './styles';

const profile = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headerText}>This is the Profile screen.</Text>
      <Button
        title="Sample button."
        onPress={() => {
          alert('you have pressed this button');
        }}
      />
    </View>
  );
};

export default profile;
