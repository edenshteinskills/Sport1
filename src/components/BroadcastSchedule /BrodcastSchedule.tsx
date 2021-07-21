import React from 'react';
import {FlatList, View} from 'react-native';
import BrodcastCard from '../BrodcastCard/BrodcastCard';
import TitleCard from '../TitleCard/TitleCard';
import styles from './BrodcastScheduleStyle';
import brodcast from '../../../fake_db/brodcast';

const BrodcastSchedule = () => {
  return (
    <View style={styles.card}>
      <TitleCard
        sectionTitle="לוח שידורים"
        subTitle="ללוח המלא >"
        image={null}
        cardStyle={{backgroundColor: '#251540'}}
        sectionStyle={{color: 'white'}}
      />
      <FlatList
        inverted
        horizontal={true}
        keyExtractor={(item): string => item.id}
        showsHorizontalScrollIndicator={false}
        data={brodcast}
        renderItem={({item}) => (
          <BrodcastCard
            firstTime={item.firstTime}
            image={item.image}
            firstTeams={item.firstTeams}
            secondTime={item.secondTime}
            secondTeams={item.secondTeams}
          />
        )}
      />
    </View>
  );
};

//const styles = StyleSheet.create({});

export default BrodcastSchedule;
