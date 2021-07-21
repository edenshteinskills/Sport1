import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    width: 150,
    height: 33,
    borderRadius: 5,
    backgroundColor: '#251540',
    shadowColor: 'rgba(0, 0, 0, 0.12)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    flexDirection: 'row-reverse',
  },
  greenRec: {width: 8, height: 33, backgroundColor: '#02f784'},
  image: {width: 75, height: 26, marginTop: 5, marginRight: 5},
});
