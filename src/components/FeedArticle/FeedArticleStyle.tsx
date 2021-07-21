import {Dimensions, Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const width = Dimensions.get('window').width;
export default StyleSheet.create({
  card: {
    width: 349,
    height: 150,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    flexDirection: 'row-reverse',
    marginTop: 10,
  },
  image: {width: wp('35%'), height: 150},
  title: {
    width: 176,
    height: 57,
    fontSize: 16,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: 'right',
    color: '#141414',
  },
  writer: {color: '#a0a0a0', fontSize: 20},

  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    flex: 1,
    justifyContent: 'space-between',
  },
  time: {color: '#a0a0a0', fontSize: 20, textAlign: 'left'},
  col: {
    flexDirection: 'column',
  },
});
