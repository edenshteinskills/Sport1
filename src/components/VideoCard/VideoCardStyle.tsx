import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  videoCard: {
    //width: 300,
    height: 300,
    marginTop: 30,
    alignContent: 'center',
    alignItems: 'center',
    paddingRight: 42,
  },
  video: {width: wp('90%'), height: 400},
});
