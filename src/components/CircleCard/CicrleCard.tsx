import React from 'react';
import {View, Image} from 'react-native';
import styles from './CircleCardStyle';

interface IProps {
  image: any;
}

const CircleCard = ({image}: IProps) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.img} />
    </View>
  );
};

export default CircleCard;
