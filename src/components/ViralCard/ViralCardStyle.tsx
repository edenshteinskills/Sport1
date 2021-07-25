import {Dimensions, Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const width = Dimensions.get('window').width;
export default StyleSheet.create({
  card: {
    width: Platform.OS === 'ios' ? wp('100%') : wp('105%'),
    height: 244,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    shadowColor: 'rgba(0, 0, 0, 0.03)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    flex: 1,
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: Platform.OS === 'ios' ? wp('100%') : wp('105%'),
    height: 244,
  },
});
