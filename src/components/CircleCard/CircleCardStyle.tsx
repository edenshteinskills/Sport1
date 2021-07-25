import {StyleSheet} from 'react-native';

export default StyleSheet.create({
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
    width: 56,
    height: 39,
    resizeMode: 'contain',
    margin: 10,
  },
});
