import React from 'react';
import {Dimensions, View} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import games from '../../../fake_db/last_games';
import VS_Card, {SLIDER_WIDTH, ITEM_WIDTH} from '../VS_Card/VS_Card';

const CarouselCards = () => {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);

  return (
    <View>
      <Carousel
        activeSlideAlignment="center"
        layoutCardOffset={9}
        ref={isCarousel}
        data={games}
        renderItem={({item}) => (
          <View>
            <VS_Card
              firstTeamName={item.firstTeamName}
              secondTeamName={item.secondTeamName}
              firstTeamImage={item.firstTeamImage}
              secondTeamImage={item.secondTeamImage}
              firstTeamScore={item.firstTeamScore}
              secondTeamScore={item.seconeTeamScore}
            />
          </View>
        )}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width}
        onSnapToItem={index => setIndex(index)}
        useScrollView={true}
      />
      <Pagination
        inverted
        dotsLength={games.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.92)',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  );
};

export default CarouselCards;
