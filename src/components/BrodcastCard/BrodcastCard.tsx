import React from 'react';
import {View, Text} from 'react-native';
import LittleTitle from '../LittleTitle/LittleTitle';

import styles from './BrodcastCardStyle';

interface IProps {
  firstTime: String;
  image: any;
  firstTeams: String;
  secondTime: String;
  secondTeams: String;
}

const BrodcastCard = ({
  firstTime,
  image,
  firstTeams,
  secondTime,
  secondTeams,
}: IProps) => {
  return (
    <View style={styles.brodcastCard}>
      <LittleTitle image={image} />
      <View style={styles.textCard1}>
        <Text style={styles.text}>{firstTime}</Text>
        <Text style={styles.teams}>{firstTeams}</Text>
      </View>
      <View style={styles.line} />
      <View style={styles.textCard2}>
        <Text style={styles.text}>{secondTime}</Text>
        <Text style={styles.teams}>{secondTeams}</Text>
      </View>
    </View>
  );
};

//const styles = StyleSheet.create({});

export default BrodcastCard;
