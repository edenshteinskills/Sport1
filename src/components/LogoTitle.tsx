import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const LogoTitle = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/images/sport1logo.png')}
      />
      <Image
        style={styles.connect}
        source={require('../../assets/images/connect.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexDirection: 'row-reverse',
  },
  logo: {
    width: 85,
    height: 20,
  },
  connect: {
    position: 'absolute',
    right: 12,
  },
});

export default LogoTitle;
