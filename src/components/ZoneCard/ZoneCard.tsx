import React from 'react';
import {View, Text, Image, FlatList, ImageBackground} from 'react-native';
import TitleCard from '../TitleCard/TitleCard';
import styles from './ZoneCardStyle';
import {gossip2, yellowLogo} from '../../../assets';
import gossip from '../../../fake_db/gossip';
const ZoneCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.purpleCard}>
        <Image style={styles.image} source={yellowLogo} />
        <Text style={styles.title}>ברחבה</Text>
        <Text style={styles.subTitle}>לכל הכתבות </Text>
      </View>
      <View style={styles.flatContainer}>
        <FlatList
          inverted
          horizontal={true}
          keyExtractor={(item): string => item.id}
          showsHorizontalScrollIndicator={false}
          data={gossip}
          renderItem={({item}) => (
            <View style={styles.item}>
              <ImageBackground style={styles.listImage} source={item.image}>
                <Text style={styles.text}>{item.title}</Text>
              </ImageBackground>
            </View>
          )}
        />
      </View>
      <View style={styles.grayCard}></View>
    </View>
  );
};

//const styles = StyleSheet.create({});

export default ZoneCard;
