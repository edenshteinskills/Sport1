import React from 'react';
import {Dimensions, ImageBackground, Text, View} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import feedArticles from '../../../fake_db/articles';
import styles from './MagazineStyle';

const Magazine = () => {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);

  return (
    <View style={styles.card}>
      <Carousel
        activeSlideAlignment="center"
        layoutCardOffset={9}
        ref={isCarousel}
        data={feedArticles}
        renderItem={({item}) => (
          <View>
            <ImageBackground style={styles.image} source={item.image}>
              <Pagination
                inverted
                dotsLength={feedArticles.length}
                activeDotIndex={index}
                carouselRef={isCarousel}
                dotStyle={{
                  width: 20,
                  height: 10,
                  borderRadius: 10,
                  backgroundColor: '#02f784',
                }}
                inactiveDotStyle={{
                  backgroundColor: '#cdcdcd',
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                tappableDots={true}
              />

              <View style={styles.col}>
                <View style={styles.rectangle}>
                  <Text style={styles.magazine}>המגזין</Text>
                </View>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.row}>
                  <Text style={styles.time}>{item.time}</Text>
                  <Text style={styles.writer}>{item.writer}</Text>
                </View>
              </View>
            </ImageBackground>
            <View style={styles.blackRec}>
              <View style={styles.line} />
              <Text style={styles.link}>לכל כתבות המגזין </Text>
            </View>
          </View>
        )}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width}
        onSnapToItem={index => setIndex(index)}
        useScrollView={true}
      />
    </View>
  );
};

export default Magazine;
