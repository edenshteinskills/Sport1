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
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 410,
    width: width,
  },
  item: {alignItems: 'center', justifyContent: 'center'},
  text: {
    marginLeft: 10,
  },
});
