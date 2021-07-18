import React from 'react';
import {StyleSheet, View, Text, Dimensions, FlatList} from 'react-native';
import TitleCard from './TitleCard';
import teams from '../../fake_db/teams';
import CircleCard from './CicrleCard';
import feedArticles from '../../fake_db/articles';
import ArticleCard from './ArticleCard';

const MyTeams = () => {
  return (
    <View style={styles.card}>
      <TitleCard sectionTitle="הקבוצות שלי" subTitle="עריכה" />
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

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: 20,
    marginTop: 3,
    height: 410,
    width: width,
  },
  item: {alignItems: 'center', justifyContent: 'center'},
  text: {
    marginLeft: 10,
  },
});

export default MyTeams;
