import React from 'react';
import {FlatList, Text, View} from 'react-native';
import CircleCard from '../CircleCard/CicrleCard';
import TitleCard from '../TitleCard/TitleCard';
import styles from './GenericCircleListStyle';

interface IProps {
  sectionTitle: String;
  subTitle: String;
  arrayData: Array<T>;
  image: any;
  passedStyle: any;
}

const GenericCircleList = ({
  sectionTitle,
  subTitle,
  arrayData,
  image,
  passedStyle,
}: IProps) => {
  return (
    <View style={styles.card}>
      <TitleCard
        sectionTitle={sectionTitle}
        subTitle={subTitle}
        image={image}
      />
      <FlatList
        inverted
        horizontal={true}
        keyExtractor={(item): string => item.id}
        showsHorizontalScrollIndicator={false}
        data={arrayData}
        renderItem={({item}) => (
          <View style={styles.item}>
            <CircleCard
              image={item.logo}
              passedStyle={{
                width: 90,
                height: 90,
                shadowColor: 'rgba(84, 84, 84, 0.17)',
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowRadius: 5,
                shadowOpacity: 1,
                borderStyle: 'solid',
                borderWidth: 0.5,
                borderColor: '#cacaca',
              }}
            />
            <Text style={[styles.text, passedStyle]}>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default GenericCircleList;
