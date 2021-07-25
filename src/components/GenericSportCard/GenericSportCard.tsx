import React from 'react';
import {View} from 'react-native';
import largeArticles from '../../../fake_db/large_article';
import FeedArticle from '../FeedArticle/FeedArticle';
import TitleCard from '../TitleCard/TitleCard';
import WideArticle from '../WideArticle/WideArticle';
import styles from './GenericSportCardStyle';
import feedArticles from '../../../fake_db/articles';
import HeadlineCard from '../HeadlineCard/HeadlineCard';
import {articleBurger} from '../../../assets';

interface IProps {
  sectionTitle: String;
  subTitle: String;
  arrayArticles: Array<T>;
}
const GenericSportCard = ({sectionTitle, subTitle, arrayArticles}: IProps) => {
  const article =
    largeArticles[Math.floor(Math.random() * largeArticles.length)];
  const first = Math.floor(Math.random() * largeArticles.length);
  const second = Math.floor(Math.random() * largeArticles.length);
  const third = Math.floor(Math.random() * largeArticles.length);
  return (
    //Test
    <View style={styles.card}>
      <TitleCard sectionTitle={sectionTitle} subTitle={subTitle} image={null} />
      <WideArticle
        title={article.title}
        image={article.image}
        writer={article.writer}
        time={article.time}
      />
      <FeedArticle
        title={arrayArticles[first].title}
        image={arrayArticles[first].image}
        writer={arrayArticles[first].writer}
        time={arrayArticles[first].time}
      />
      <FeedArticle
        title={arrayArticles[second].title}
        image={arrayArticles[second].image}
        writer={arrayArticles[second].writer}
        time={arrayArticles[second].time}
      />
      <FeedArticle
        title={arrayArticles[third].title}
        image={arrayArticles[third].image}
        writer={arrayArticles[third].writer}
        time={arrayArticles[third].time}
      />
      <HeadlineCard title={arrayArticles[first].title} image={articleBurger} />
      <HeadlineCard title={arrayArticles[third].title} image={articleBurger} />
    </View>
  );
};

export default GenericSportCard;
