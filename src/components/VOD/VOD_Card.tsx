import React, {useRef} from 'react';
import {View} from 'react-native';
import {miniLogo} from '../../../assets';
import TitleCard from '../TitleCard/TitleCard';
import styles from './VOD_CardStyle';
import Video from 'react-native-video';

const VOD_Card = () => {
  return (
    <View style={styles.card}>
      <TitleCard sectionTitle="VOD" subTitle="לכל הקטעים >" image={miniLogo} />
    </View>
  );
};

export default VOD_Card;
