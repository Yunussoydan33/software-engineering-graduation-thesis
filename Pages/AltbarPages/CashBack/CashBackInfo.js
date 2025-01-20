import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import CashBackVideoCard from '../../../Src/components/CashBackCard/CashBackVideoCard'; 
import DoctorCardDetail from '../../../Src/components/CashBackCard/DoctorCardDetail';
import Info from '../../../Src/components/CashBackCard/Info';
import Graffic from '../../../Src/components/CashBackCard/Graffic';
import CashAltInfo from '../../../Src/components/CashBackCard/CashAltInfo'; 

const CashBackInfo = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <CashBackVideoCard />
        <DoctorCardDetail />
        <Info />
        <Graffic />
        <CashAltInfo /> 
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: '100%',
  },
});

export default CashBackInfo;
