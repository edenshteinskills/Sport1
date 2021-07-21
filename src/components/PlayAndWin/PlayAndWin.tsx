import React from 'react';
import {FlatList, Text, View} from 'react-native';
import companies from '../../../fake_db/companies';
import CircleCard from '../CircleCard/CicrleCard';
import TitleCard from '../TitleCard/TitleCard';
import styles from './PlayAndWinStyle';

const PlayAndWin = () => {
  return (
    <View style={styles.card}>
      <TitleCard
        sectionTitle="משתתפים וזוכים"
        subTitle="לכל הנבחרים >"
        image={null}
      />
      <FlatList
        inverted
        horizontal={true}
        keyExtractor={(item): string => item.id}
        showsHorizontalScrollIndicator={false}
        data={companies}
        renderItem={({item}) => (
          <View style={styles.item}>
            <CircleCard
              image={item.logo}
              passedStyle={{
                width: 90,
                height: 90,
                shadowColor: 'rgba(84, 84, 84, 0.17)',
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowRadius: 5,
                shadowOpacity: 1,
                borderStyle: 'solid',
                borderWidth: 0.5,
                borderColor: '#cacaca',
              }}
            />
            <Text style={styles.text}>{item.tournament}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default PlayAndWin;
