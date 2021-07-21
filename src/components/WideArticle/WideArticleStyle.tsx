import {Dimensions, Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const width = Dimensions.get('window').width;
export default StyleSheet.create({
  card: {
    width: wp('92%'),
    height: 250,
    borderRadius: 9,
    backgroundColor: '#ffffff',
    shadowColor: 'rgba(33, 10, 70, 0.2)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 15,
    shadowOpacity: 5,
    marginTop: 35,
    elevation: 50,
    flexDirection: 'column',
    alignItems: 'flex-end',
  },

  writer: {
    color: '#a0a0a0',
    fontSize: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    flex: 1,
    justifyContent: 'space-between',
    width: wp('86%'),
  },
  time: {
    color: '#a0a0a0',
    fontSize: 20,
    textAlign: 'left',
  },
  image: {
    width: wp('92%'),
    height: 160,
  },
  title: {
    width: 331,
    height: 40,
    fontSize: 17,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: 'right',
    color: '#141414',
  },
});
