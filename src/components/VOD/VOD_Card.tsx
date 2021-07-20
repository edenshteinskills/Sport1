import React from 'react';
import {StyleSheet, View} from 'react-native';
import {miniLogo} from '../../../assets';
import TitleCard from '../TitleCard/TitleCard';
import VodCarousel from '../VodCarousel/VodCarousel';
import styles from './VOD_CardStyle';

const VOD_Card = () => {
  return (
    <View style={styles.card}>
      <TitleCard
        sectionTitle="VOD"
        subTitle="לכל הקטעים >"
        image={miniLogo}
        cardStyle={{backgroundColor: 'black'}}
        sectionStyle={{color: '#fff'}}
      />
      <VodCarousel />
    </View>
  );
};
const propStyle = StyleSheet.create({
  card: {
    backgroundColor: 'black',
  },
  section: {
    color: 'white',
  },
});

export default VOD_Card;
