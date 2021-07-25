import React from 'react';
import {Image, Text, View} from 'react-native';
import TitleCard from '../TitleCard/TitleCard';
import styles from './PodcastCardStyle';
import {podcast1, podcast2, podcast3} from '../../../assets';

const PodcastCard = () => {
  return (
    <View style={styles.card}>
      <TitleCard sectionTitle="האזינו" subTitle="" image={null} />
      <View style={styles.podcastCard}>
        <Image style={styles.image} source={podcast1} />
        <View style={styles.col}>
          <Text style={styles.title}>בשירות הוד מלכותה</Text>
          <Text style={styles.sub}>תוכנית הספורט של הליגה האנגלית</Text>
        </View>
        <Image style={styles.image2} source={podcast3} />
      </View>
      <View style={styles.podcastCard2}>
        <Image style={styles.image3} source={podcast2} />
        <View style={styles.col}>
          <Text style={styles.title}>תכנית הספורט 103fm</Text>
          <Text style={styles.sub}>תוכנית הספורט היומית להאזנה</Text>
        </View>
        <Image style={styles.image2} source={podcast3} />
      </View>
    </View>
  );
};

export default PodcastCard;
