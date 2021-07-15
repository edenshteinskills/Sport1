import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import MainArticle from '../components/MainArticle';
import articles from '../../fake_db/fake_main';
import Article from '../types';

const MainFeedScreen = () => {
  const [article, setArticle] = useState<Article>({});
  useEffect(() => {
    const interval = setInterval(() => {
      setArticle(articles[Math.floor(Math.random() * articles.length)]);
    }, 30000); //change article every 3 minutes
    return () => clearInterval(interval);
  }, []);

  return (
    <View>
      <MainArticle
        title={article.title}
        url={article.url}
        author={article.author}
      />
    </View>
  );
};

//const styles = StyleSheet.create({});

export default MainFeedScreen;
