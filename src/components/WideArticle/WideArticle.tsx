import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './WideArticleStyle';

interface IProps {
  title: String;
  image: any;
  writer: String;
  time: String;
}

const WideArticle = ({title, image, writer, time}: IProps) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.row}>
        <Text style={styles.time}>{time}</Text>
        <Text style={styles.writer}>{writer}</Text>
      </View>
    </View>
  );
};

export default WideArticle;
