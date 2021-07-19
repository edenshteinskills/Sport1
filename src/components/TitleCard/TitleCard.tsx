import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './TitleCardStyle';

interface IProps {
  sectionTitle: String;
  subTitle: String;
  image: any;
}

const TitleCard = ({sectionTitle, subTitle, image}: IProps) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.img} />
      <Text style={styles.section}>{sectionTitle}</Text>
      <Text style={styles.sub}>{subTitle}</Text>
    </View>
  );
};

TitleCard.defaultProps = {
  initialValues: {
    image: null,
  },
};

export default TitleCard;
