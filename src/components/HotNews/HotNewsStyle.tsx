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
    marginBottom: 10,
    height: 950,
    width: width,
    justifyContent: 'flex-start',
    flexDirection: 'row-reverse',
    flex: 1,
  },
  item: {alignItems: 'center', justifyContent: 'center'},
});
