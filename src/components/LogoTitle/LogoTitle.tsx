import React from 'react';
import {View, Image} from 'react-native';
import styles from './LogoTitleStyle';

const LogoTitle = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../../assets/images/sport1logo.png')}
      />
      <Image
        style={styles.connect}
        source={require('../../../assets/images/connect.png')}
      />
    </View>
  );
};

export default LogoTitle;
