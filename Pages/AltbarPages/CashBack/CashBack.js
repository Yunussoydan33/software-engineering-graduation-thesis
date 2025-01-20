import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import CashBackCard from '../../../Src/components/CashBackCard/CashBackCard';

const CashBack = () => {
  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
      <CashBackCard />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#EDF2FE',

  },
});

export default CashBack;
