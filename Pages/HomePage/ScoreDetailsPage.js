import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ScoreCard from '../../Src/components/ScoreCard/ScoreCard';
import ScoreGraficCard from '../../Src/components/ScoreGraffic/ScoreGraficCard';
import BestHealty from '../../Src/components/BestHealty/BestHealty';

const ScoreDetailsPage = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.scoreCardContainer}>
        <ScoreCard />
        <ScoreGraficCard />
        <BestHealty />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF2FE',
  },
  scoreCardContainer: {
    marginTop: 20,  
    alignItems: 'center',
  },
});

export default ScoreDetailsPage;
