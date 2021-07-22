import React from 'react';
import {View} from 'react-native';
import TitleCard from '../TitleCard/TitleCard';
import styles from './LastGamesStyle';
import CarouselCards from '../LastGamesCarousel/LastGamesCarousel';
import {greenSlide} from '../../../assets';
const LastGames = () => {
  return (
    <View style={styles.card}>
      <TitleCard
        sectionTitle="משחקים אחרונים"
        subTitle="לכל התוצאות"
        image={null}
      />
      <CarouselCards />
    </View>
  );
};

export default LastGames;
