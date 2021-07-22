import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './LittleTitleStyle';
import {sport1Tran, sport2Tran} from '../../../assets';

const LittleTitle = ({image}: any) => {
  return (
    <View style={styles.card}>
      <View style={styles.greenRec} />
      <Image style={styles.image} source={image} />
    </View>
  );
};

//const styles = StyleSheet.create({});

export default LittleTitle;
