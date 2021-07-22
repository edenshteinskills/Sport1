import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('window').width;
export default StyleSheet.create({
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
    justifyContent: 'flex-end',
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
  img: {width: 20, height: 20, marginRight: 3},
  greenRec: {
    width: 6,
    height: 30,
    borderRadius: 5,
    backgroundColor: '#02f784',
  },
});
