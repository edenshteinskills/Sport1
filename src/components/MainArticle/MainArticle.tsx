import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Text,
} from 'react-native';

import styles from './MainArticleStyle';

interface IProps {
  title: String;
  url: any;
  author: String;
}

const MainArticle = ({title, url, author}: IProps) => {
  return (
    <View style={styles.card}>
      <ImageBackground style={styles.image} source={url}>
        <Text style={styles.main}>{title}</Text>
        <Text style={styles.sub}>{author}</Text>
      </ImageBackground>
    </View>
  );
};

export default MainArticle;
