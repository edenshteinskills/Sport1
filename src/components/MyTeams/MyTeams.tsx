import React from 'react';
import {StyleSheet, View, Text, Dimensions, FlatList} from 'react-native';
import TitleCard from '../TitleCard/TitleCard';
import teams from '../../../fake_db/teams';
import CircleCard from '../CircleCard/CicrleCard';
import feedArticles from '../../../fake_db/articles';
import ArticleCard from '../ArticleCard/ArticleCard';
import styles from './MyTeamsStyle';

import {star} from '../../../assets/index';

const MyTeams = () => {
  return (
    <View style={styles.card}>
      <TitleCard sectionTitle="הקבוצות שלי" subTitle="עריכה" image={star} />

      <FlatList
        inverted
        horizontal={true}
        keyExtractor={(item): string => item.id}
        showsHorizontalScrollIndicator={false}
        data={teams}
        renderItem={({item}) => (
          <View style={styles.item}>
            <CircleCard image={item.logo} />
            <Text style={styles.text}>{item.teamName}</Text>
          </View>
        )}
      />

      <FlatList
        inverted
        horizontal={true}
        keyExtractor={(item): string => item.id}
        showsHorizontalScrollIndicator={false}
        data={feedArticles}
        renderItem={({item}) => (
          <View style={styles.item}>
            <ArticleCard
              title={item.title}
              image={item.image}
              section={item.section}
            />
          </View>
        )}
      />
    </View>
  );
};

export default MyTeams;
