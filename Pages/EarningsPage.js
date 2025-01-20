import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Targetcard from '../Src/components/targetcard/targetcard'; 
import OpenCard from '../Src/components/OpenCard/OpenCard';
import PayCard from '../Src/components/targetcard/PayCard';
const EarningsPage = () => {
  return (
    <ScrollView 
      contentContainerStyle={styles.scrollContainer} 
      scrollEventThrottle={16}
      decelerationRate="fast"
    >
      <View style={styles.targetCardWrapper}>
        <Targetcard /> 
        <View style={styles.cardSpacing}>
          <OpenCard />
        </View>
        <PayCard/>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 80,
    paddingBottom: 40, 

  },
  targetCardWrapper: {
    width: '90%',
  },
  cardSpacing: {
    marginBottom: 20, 
  },
});

export default EarningsPage;
