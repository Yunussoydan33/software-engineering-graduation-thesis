import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import AppointmentsDetailCard from '../../Src/components/AppointmentsCard/AppointmentsDetailCard';
import AppointmentsInfoCard from '../../Src/components/AppointmentsCard/AppointmentsInfoCard';
import AltBar from '../../Src/components/AltBar/AltBar';

export default function AppointmentsDetail() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <AppointmentsDetailCard />
          <AppointmentsInfoCard />
          <TouchableOpacity style={styles.messageButton}>
            <Text style={styles.messageButtonText}>Mesaj Gönder</Text>
          </TouchableOpacity>
        </View>
        <AltBar />
      </View>
    );
  }
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF2FE',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  messageButton: {
    backgroundColor: '#363842',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  messageButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
