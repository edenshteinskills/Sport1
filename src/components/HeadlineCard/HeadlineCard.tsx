import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './HeadlineCardStyle';

interface IProps {
  title: String;
  image: any;
}

const HeadlineCard = ({title, image}: IProps) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default HeadlineCard;
