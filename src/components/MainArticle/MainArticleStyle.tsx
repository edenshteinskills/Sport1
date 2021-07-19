import {Dimensions, StyleSheet} from 'react-native';

const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
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
