import React from 'react';
import {Text, View, ImageBackground} from 'react-native';
import styles from './ArticleCardStyle';

interface IProps {
  title: String;
  image: any;
  section: String;
}

const ArticleCard = ({title, image, section}: IProps) => {
  return (
    <View>
      <ImageBackground style={styles.image} source={image}>
        <Text style={styles.section}>{section}</Text>
      </ImageBackground>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default ArticleCard;
