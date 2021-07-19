import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: 20,
    marginTop: 32,
    height: 100,
    width: 310,
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {},
  img1: {width: 20, height: 20, margin: 10},
  firstRow: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    flex: 1,
  },
  secondRow: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'left',
    flex: 1,
  },
  score: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
  },
});
