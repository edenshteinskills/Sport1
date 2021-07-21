import React from 'react';
import {View} from 'react-native';
import largeArticles from '../../../fake_db/large_article';
import FeedArticle from '../FeedArticle/FeedArticle';
import LargeArticle from '../LargeArticle/LargeArticle';
import TitleCard from '../TitleCard/TitleCard';
import WideArticle from '../WideArticle/WideArticle';
import styles from './IsraeliFootballStyle';
import feedArticles from '../../../fake_db/articles';

const IsraeliFootball = () => {
  const article =
    largeArticles[Math.floor(Math.random() * largeArticles.length)];
  return (
    <View style={styles.card}>
      <TitleCard
        sectionTitle="כדורגל ישראלי"
        subTitle="לכל הכתבות >"
        image={null}
      />
      <WideArticle
        title={article.title}
        image={article.image}
        writer={article.writer}
        time={article.time}
      />
      <FeedArticle
        title={feedArticles[0].title}
        image={feedArticles[0].image}
        writer={feedArticles[0].writer}
        time={feedArticles[0].time}
      />
      <FeedArticle
        title={feedArticles[1].title}
        image={feedArticles[1].image}
        writer={feedArticles[1].writer}
        time={feedArticles[1].time}
      />
      <FeedArticle
        title={feedArticles[2].title}
        image={feedArticles[2].image}
        writer={feedArticles[2].writer}
        time={feedArticles[2].time}
      />
    </View>
  );
};

export default IsraeliFootball;
