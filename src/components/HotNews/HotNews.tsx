import React from 'react';
import {FlatList, View} from 'react-native';
import TitleCard from '../TitleCard/TitleCard';
import VodCarousel from '../VodCarousel/VodCarousel';
import styles from './HotNewsStyle';
import largeArticles from '../../../fake_db/large_article';
import LargeArticle from '../LargeArticle/LargeArticle';
import feedArticles from '../../../fake_db/articles';
import BigArticleCard from '../BigArticleCard/BigArticleCard';

const HotNews = () => {
  const article =
    largeArticles[Math.floor(Math.random() * largeArticles.length)];

  return (
    <View style={styles.card}>
      <TitleCard sectionTitle="חדשות חמות" subTitle="" image={null} />
      <LargeArticle
        title={article.title}
        image={article.image}
        writer={article.writer}
      />
      <FlatList
        inverted
        horizontal={true}
        keyExtractor={(item): string => item.id}
        showsHorizontalScrollIndicator={false}
        data={feedArticles}
        renderItem={({item}) => (
          <View style={styles.item}>
            <BigArticleCard
              title={item.title}
              image={item.image}
              section={item.section}
              writer={item.writer}
            />
          </View>
        )}
      />
    </View>
  );
};

export default HotNews;
