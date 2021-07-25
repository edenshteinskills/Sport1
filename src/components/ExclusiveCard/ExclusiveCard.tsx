import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import style from '../../../storybook/stories/CenterView/style';
import TitleCard from '../TitleCard/TitleCard';
import styles from './ExclusiveCardStyle';
import exclusive from '../../../fake_db/exclusive';

const ExclusiveCard = () => {
  return (
    <View style={styles.card}>
      <TitleCard sectionTitle="בלעדי לספורט 1" subTitle="" image={null} />
      <View style={styles.flatContainer}>
        <FlatList
          inverted
          horizontal={true}
          keyExtractor={(item): string => item.id}
          showsHorizontalScrollIndicator={false}
          data={exclusive}
          renderItem={({item}) => (
            <View style={styles.item}>
              <Image style={styles.image} source={item.image} />
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default ExclusiveCard;
