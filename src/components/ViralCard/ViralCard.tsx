import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {viral} from '../../../assets';
import styles from './ViralCardStyle';

const ViralCard = () => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={viral} />
    </View>
  );
};

export default ViralCard;
