import React from 'react';
import {Dimensions, View} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import videos from '../../../fake_db/videos';
import VideoCard, {ITEM_WIDTH, SLIDER_WIDTH} from '../VideoCard/VideoCard';

const VodCarousel = () => {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);

  return (
    <View>
      <Carousel
        layoutCardOffset={9}
        ref={isCarousel}
        data={videos}
        renderItem={({item}) => (
          <View>
            <VideoCard video={item.video} />
          </View>
        )}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width}
        onSnapToItem={index => setIndex(index)}
        useScrollView={true}
      />
      <Pagination
        inverted
        dotsLength={videos.length}
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

export default VodCarousel;
