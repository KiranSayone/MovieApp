import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');
const setWidth = w => (width / 100) * w;

const ItemSeparator = ({height, width}) => {
  return <View style={{width, height}}></View>;
};

ItemSeparator.defaultProps = {
  height: 0,
  width: 0,
};

export default ItemSeparator;
