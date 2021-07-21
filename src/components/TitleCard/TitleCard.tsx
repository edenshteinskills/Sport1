import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './TitleCardStyle';

interface IProps {
  sectionTitle: String;
  subTitle: String;
  image: any;
  cardStyle: any;
  sectionStyle: any;
}

const TitleCard = ({
  sectionTitle,
  subTitle,
  image,
  cardStyle,
  sectionStyle,
}: IProps) => {
  return (
    <View style={[styles.card, cardStyle]}>
      <Image source={image} style={styles.img} />
      <Text style={[styles.section, sectionStyle]}>{sectionTitle}</Text>
      <Text style={styles.sub}>{subTitle}</Text>
    </View>
  );
};

TitleCard.defaultProps = {
  initialValues: {
    image: null,
    cardStyle: null,
    sectionStyle: null,
  },
};

export default TitleCard;
