import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import styles from './VS_CardStyle';

interface IProps {
  firstTeamName: String;
  secondTeamName: String;
  firstTeamImage: any;
  secondTeamImage: any;
  firstTeamScore: Number;
  secondTeamScore: Number;
}

const VS_Card = ({
  firstTeamName,
  secondTeamName,
  firstTeamImage,
  secondTeamImage,
  firstTeamScore,
  secondTeamScore,
}: IProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.secondRow}>
        <Text style={styles.text}>{secondTeamName}</Text>
        <Image style={styles.img1} source={secondTeamImage} />
      </View>
      <View style={styles.score}>
        <Text>{secondTeamScore}</Text>
        <Text> - </Text>
        <Text>{firstTeamScore}</Text>
      </View>
      <View style={styles.firstRow}>
        <Text style={styles.text}>{firstTeamName}</Text>
        <Image style={styles.img1} source={firstTeamImage} />
      </View>
    </View>
  );
};
export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
export default VS_Card;
