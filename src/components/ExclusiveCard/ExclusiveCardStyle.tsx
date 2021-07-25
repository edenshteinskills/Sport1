import {Dimensions, Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const width = Dimensions.get('window').width;
export default StyleSheet.create({
  card: {
    width: width,
    height: 210,
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

    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
  },
  flatContainer: {
    height: 280,
    width: width,
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
  },
  image: {
    width: 217,
    height: 136,
    borderRadius: 20,
  },
  item: {
    marginLeft: 30,
    shadowOpacity: 2,
    justifyContent: 'center',
    marginBottom: 50,
  },
});
