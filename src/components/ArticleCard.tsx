import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';

interface IProps {
  title: String;
  image: any;
  section: String;
}

const ArticleCard = ({title, image, section}: IProps) => {
  return (
    <View>
      <ImageBackground style={styles.image} source={image}>
        <Text style={styles.section}>{section}</Text>
      </ImageBackground>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 20,
    marginTop: 3,
    height: 370,
    width: width,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  image: {height: 158, width: 237, marginLeft: 20},
  title: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'right',
    bottom: 0,
    right: 0,
    paddingBottom: 20,
    paddingRight: 10,
    marginLeft: 30,
  },
  section: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'right',
    position: 'absolute',
    right: 5,
    top: 120,
    paddingBottom: 20,
    paddingRight: 10,
    backgroundColor: 'black',
    height: 22,
    width: 57,
  },
});

export default ArticleCard;
