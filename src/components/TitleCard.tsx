import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

interface IProps {
  sectionTitle: String;
  subTitle: String;
}

const TitleCard = ({sectionTitle, subTitle}: IProps) => {
  return (
    <View style={styles.card}>
      <Image
        source={require('../../assets/images/star.png')}
        style={styles.img}
      />
      <Text style={styles.section}>{sectionTitle}</Text>
      <Text style={styles.sub}>{subTitle}</Text>
    </View>
  );
};
const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  card: {
    flexDirection: 'row-reverse',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    height: 30,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    position: 'absolute',
  },
  section: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 3,
  },
  sub: {
    flex: 1,
    right: 12,
    color: '#a0a0a0',
    fontSize: 20,
    textAlign: 'left',
  },
  img: {width: 20, height: 20},
});

export default TitleCard;
