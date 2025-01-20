import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import ServiceSelectionCard from '../../Src/components/DoctorCard/ServiceSelectionCard';
import AppointmentsType from '../../Src/components/Doctor/AppointmentsType';

const ServiceSelection = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <ServiceSelectionCard />
      <AppointmentsType /> 
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#EDF2FE',
    paddingVertical: 0,
  },
});

export default ServiceSelection;
