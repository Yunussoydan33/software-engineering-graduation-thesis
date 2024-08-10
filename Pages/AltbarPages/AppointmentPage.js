import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import AppointmentsCard from '../../Src/components/AppointmentsCard/AppointmentsCard';
import DoctorCard from '../../Src/components/AppointmentsCard/DoctorCard';

export default function AppointmentPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <AppointmentsCard />
      <DoctorCard />
      <DoctorCard />
      <DoctorCard />
      <DoctorCard />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: '#EDF2FE',
  },
});
