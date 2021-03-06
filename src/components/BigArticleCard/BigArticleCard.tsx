import React from 'react';
import {Text, View, ImageBackground} from 'react-native';
import styles from './BigArticleCardStyle';

interface IProps {
  title: String;
  image: any;
  section: String;
  writer: String;
  time: String;
}

const BigArticleCard = ({title, image, section, writer, time}: IProps) => {
  return (
    <View style={styles.card}>
      <ImageBackground style={styles.image} source={image}>
        <Text style={styles.section}>{section}</Text>
      </ImageBackground>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.row}>
        <Text style={styles.time}>{time}</Text>
        <Text style={styles.writer}>{writer}</Text>
      </View>
    </View>
  );
};

export default BigArticleCard;
