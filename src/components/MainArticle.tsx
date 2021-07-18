import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Text,
} from 'react-native';

interface IProps {
  title: String;
  url: any;
  author: String;
}

const MainArticle = ({title, url, author}: IProps) => {
  return (
    <View style={styles.card}>
      <ImageBackground style={styles.image} source={url}>
        <Text style={styles.main}>{title}</Text>
        <Text style={styles.sub}>{author}</Text>
      </ImageBackground>
    </View>
  );
};
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'black',
    //position: 'absolute',
    height: deviceWidth * 0.8,
    width: deviceWidth * 1,
  },
  image: {
    flex: 1,
  },
  main: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'right',
    position: 'absolute',
    bottom: 0,
    right: 0,
    paddingBottom: 20,
    paddingRight: 10,
  },
  sub: {
    color: '#02f784',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'right',
    position: 'absolute',
    bottom: 0,
    right: 0,
    paddingRight: 10,
  },
});

export default MainArticle;
