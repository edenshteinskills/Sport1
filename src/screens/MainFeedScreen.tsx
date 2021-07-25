import React, {useState, useCallback} from 'react';
import {
  View,
  ScrollView,
  RefreshControl,
  StyleSheet,
  SafeAreaView,
  Text,
} from 'react-native';
import MainArticle from '../components/MainArticle/MainArticle';
import articles from '../../fake_db/fake_main';
import Article from '../types';
import MyTeams from '../components/MyTeams/MyTeams';
import {useEffect} from 'react';
import LastGames from '../components/LastGames/LastGames';
import VOD_Card from '../components/VOD/VOD_Card';
import HotNews from '../components/HotNews/HotNews';
import BrodcastSchedule from '../components/BroadcastSchedule /BrodcastSchedule';
import GenericCircleList from '../components/GenericCircleList/GenericCircleList';
import GenericSportCard from '../components/GenericSportCard/GenericSportCard';

import feedArticles from '../../fake_db/articles';
import companies from '../../fake_db/companies';
import leagues from '../../fake_db/leagues';
import {star} from '../../assets';
import Magazine from '../components/Magzine/Magazine';
import ZoneCard from '../components/ZoneCard/ZoneCard';
import ViralCard from '../components/ViralCard/ViralCard';
import PodcastCard from '../components/PodcastCard/PodcastCard';
import ExclusiveCard from '../components/ExclusiveCard/ExclusiveCard';

const MainFeedScreen = () => {
  const wait = (timeout: any) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  const [refreshing, setRefreshing] = useState(false);
  const [article, setArticle] = useState<Article>({});

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setArticle(articles[Math.floor(Math.random() * articles.length)]);
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getData();
    wait(100).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <MainArticle
          title={article.title}
          url={article.url}
          author={article.author}
        />
        <MyTeams />
        <LastGames />
        <VOD_Card />
        <HotNews />
        <BrodcastSchedule />
        <GenericCircleList
          sectionTitle={'משתתפים וזוכים'}
          subTitle={'לכל הנבחרים >'}
          arrayData={companies}
          image={null}
        />
        <GenericSportCard
          sectionTitle={'כדורגל ישראלי'}
          subTitle={'לכל הכתבות >'}
          arrayArticles={feedArticles}
        />
        <GenericCircleList
          sectionTitle={'ליגות וענפים מועדפים'}
          subTitle={'עריכה'}
          arrayData={leagues}
          image={star}
          passedStyle={{fontSize: 15}}
        />

        <GenericSportCard
          sectionTitle={'כדורגל עולמי'}
          subTitle={'לכל הכתבות >'}
          arrayArticles={feedArticles}
        />
        <Magazine />
        <GenericSportCard
          sectionTitle={'כדורסל ישראלי'}
          subTitle={'לכל הכתבות >'}
          arrayArticles={feedArticles}
        />
        <ZoneCard />
        <GenericSportCard
          sectionTitle={'כדורסל עולמי'}
          subTitle={'לכל הכתבות >'}
          arrayArticles={feedArticles}
        />
        <ViralCard />
        <GenericSportCard
          sectionTitle={'ענפים נוספים'}
          subTitle={'לכל הכתבות >'}
          arrayArticles={feedArticles}
        />
        <ExclusiveCard />
        <PodcastCard />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  scrollView: {},
});

export default MainFeedScreen;
