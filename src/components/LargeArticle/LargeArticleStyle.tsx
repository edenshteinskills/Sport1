import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('window').width;
export default StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: 30,
    height: 330,
    width: width,
    marginTop: 35,
    position: 'absolute',
  },
  image: {
    height: 240,
    width: width,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'right',
    bottom: 0,
    right: 0,
    paddingBottom: 20,
    paddingRight: 5,
    marginLeft: 30,
    position: 'absolute',
  },
  writer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    color: '#a0a0a0',
    paddingBottom: 8,
    paddingRight: 5,
  },
});
