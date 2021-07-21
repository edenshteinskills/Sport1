import React from 'react';
import {View, Image, ViewStyle} from 'react-native';
import styles from './CircleCardStyle';

interface IProps {
  image: any;
  cardStyle: ViewStyle;
}

const CircleCard = ({image, cardStyle}: IProps) => {
  return (
    <View style={[styles.card, cardStyle]}>
      <Image source={image} style={styles.img} />
    </View>
  );
};

export default CircleCard;
