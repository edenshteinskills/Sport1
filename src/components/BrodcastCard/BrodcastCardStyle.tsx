import {Dimensions, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const width = Dimensions.get('window').width;
export default StyleSheet.create({
  brodcastCard: {
    width: 150,
    height: 200,
    borderRadius: 9,
    backgroundColor: '#ffffff',
    shadowColor: 'rgba(33, 10, 70, 0.2)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 15,
    shadowOpacity: 5,
    marginRight: 10,
    elevation: 50,
  },
  text: {
    fontSize: 17,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'right',
    color: '#a1a1a1',
    marginTop: 5,
    paddingRight: 8,
  },
  teams: {
    fontSize: 16,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: 'right',
    color: '#404040',
    padding: 10,
  },
  textCard1: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  textCard2: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: '#f8f8f8',
  },
  line: {
    width: 150,
    height: 1,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#ebebeb',
  },
});
