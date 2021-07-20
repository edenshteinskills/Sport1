import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './LargeArticleStyle';

interface IProps {
  title: String;
  image: any;
  writer: String;
}

const LargeArticle = ({title, image, writer}: IProps) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.writer}>{writer}</Text>
    </View>
  );
};

export default LargeArticle;
