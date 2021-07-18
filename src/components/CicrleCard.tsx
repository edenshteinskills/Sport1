import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

interface IProps {
  image: any;
}

const CircleCard = ({image}: IProps) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.img} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    borderColor: 'red',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.34,
    backgroundColor: '#F5F5F5',
    marginLeft: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 57,
    height: 35,
    resizeMode: 'contain',
    margin: 10,
  },
});

export default CircleCard;
