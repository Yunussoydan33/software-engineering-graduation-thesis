import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import DoctorDetailsCard from '../../Src/components/DoctorCard/DoctorDetailsCard';
import Doctorİnfo from '../../Src/components/DoctorCard/Doctorİnfo';  

const DoctorDetails = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <DoctorDetailsCard />  
      <Doctorİnfo />  
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#EDF2FE',
    paddingTop: 20,
  },
});

export default DoctorDetails;
