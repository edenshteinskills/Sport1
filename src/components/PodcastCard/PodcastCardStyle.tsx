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
  podcastCard: {
    width: Platform.OS === 'ios' ? wp('100%') : wp('95%'),
    height: 58,
    borderRadius: 5,
    backgroundColor: '#3d003e',
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    flexDirection: 'row-reverse',
    marginTop: 50,
    justifyContent: 'space-between',
    padding: 10,
  },
  image: {width: 33, height: 41, marginRight: 10},
  image3: {width: 35, height: 15, marginRight: 11, marginTop: 8},
  title: {
    width: 201,
    height: 19,

    fontSize: 18,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: 'right',
    color: '#dfdfdf',
  },
  sub: {
    width: 209,
    height: 19,

    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: 'right',
    color: '#dfdfdf',
  },
  col: {},
  image2: {width: 25, height: 25, marginLeft: 3, marginTop: 5},
  podcastCard2: {
    width: Platform.OS === 'ios' ? wp('100%') : wp('95%'),
    height: 58,
    borderRadius: 5,
    backgroundColor: '#141414',
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    flexDirection: 'row-reverse',
    marginTop: 13,
    padding: 8,
    justifyContent: 'space-between',
  },
});
