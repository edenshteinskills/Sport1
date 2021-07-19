import {Dimensions, Platform, StyleSheet} from 'react-native';

const width = Dimensions.get('window').width;
export default StyleSheet.create({
  card: {
    flex: 1,
    padding: 20,
    marginTop: 3,
    height: 370,
    width: width,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  image: {height: 158, width: 237, marginLeft: 20},
  title: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'right',
    bottom: 0,
    right: 0,
    paddingBottom: 20,
    paddingRight: 10,
    marginLeft: 30,
  },
  section: {
    color: 'white',
    fontSize: Platform.OS === 'ios' ? 10 : 8,
    fontWeight: 'bold',
    textAlign: 'right',
    position: 'absolute',
    right: 5,
    top: 120,
    paddingBottom: 2,
    paddingRight: 8,
    backgroundColor: 'black',
    height: 25,
    width: 57,
  },
});
