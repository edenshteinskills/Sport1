import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './FeedArticleStyle';

interface IProps {
  title: String;
  image: any;
  writer: String;
  time: String;
}

const FeedArticle = ({title, image, writer, time}: IProps) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.col}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.row}>
          <Text style={styles.time}>{time}</Text>
          <Text style={styles.writer}>{writer}</Text>
        </View>
      </View>
    </View>
  );
};

export default FeedArticle;
