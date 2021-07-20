import React, {useRef} from 'react';
import {Dimensions, View} from 'react-native';
import Video from 'react-native-video';
import styles from './VideoCardStyle';

const VideoCard = ({video}: any) => {
  const videoRef = useRef(null);
  return (
    <View style={styles.videoCard}>
      <Video
        source={video}
        ref={videoRef}
        controls={true}
        paused={false}
        fullscreen={true}
        resizeMode="cover"
        style={styles.video}
        muted={true}
        repeat={true}
      />
    </View>
  );
};
export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
export default VideoCard;
