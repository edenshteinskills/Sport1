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
import PlayAndWin from '../components/PlayAndWin/PlayAndWin';
import IsraeliFootball from '../components/IsraeliFootball/IsraeliFootball';

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
        <PlayAndWin />
        <IsraeliFootball />
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
