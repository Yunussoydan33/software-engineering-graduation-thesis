import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Location from '../../Src/components/Location/Location';
import SearchScroll from '../../Src/components/SearchScrol/SearchScrol';  
import DoctorCard from '../../Src/components/DoctorCard/DoctorCard'; 

const DoctorListPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Location />
      <View style={styles.spacing} />
      <SearchScroll />  
      <View style={styles.spacing} />
      <DoctorCard />  
      <DoctorCard />  
      <DoctorCard />  
      <DoctorCard />  
      <DoctorCard />  
      <DoctorCard />  
      <DoctorCard />  
      <DoctorCard />  
      <DoctorCard />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#EDF2FE',
  },
  spacing: {
    height: 10, 
  },
});

export default DoctorListPage;
