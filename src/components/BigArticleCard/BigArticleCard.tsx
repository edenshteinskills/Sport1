import React from 'react';
import {Text, View, ImageBackground} from 'react-native';
import styles from './BigArticleCardStyle';

interface IProps {
  title: String;
  image: any;
  section: String;
  writer: String;
}

const BigArticleCard = ({title, image, section, writer}: IProps) => {
  return (
    <View style={styles.card}>
      <ImageBackground style={styles.image} source={image}>
        <Text style={styles.section}>{section}</Text>
      </ImageBackground>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.writer}>{writer}</Text>
    </View>
  );
};

export default BigArticleCard;
