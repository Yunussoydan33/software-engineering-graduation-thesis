import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import AppointmentsCard from '../../Src/components/AppointmentsCard/AppointmentsCard';
import DoctorCard from '../../Src/components/AppointmentsCard/DoctorCard';
import AltBar from '../../Src/components/AltBar/AltBar';

export default function AppointmentPage() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <AppointmentsCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
      </ScrollView>
      <AltBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF2FE',
  },
  scrollContent: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    paddingBottom: 100, 

  },
});
