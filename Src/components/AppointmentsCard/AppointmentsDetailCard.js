import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function AppointmentsDetailCard() {
  return (
    <View style={styles.card}>
      <Image 
        source={require('../../assets/Image/AliDoctor.png')} 
        style={styles.image} 
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>Ali Kemal Erdemoğlu</Text>
        <Text style={styles.specialty}>Nöroloji</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    alignItems: 'center',
  },
  image: {
    width: 74,
    height: 72,
    borderRadius: 10,
    marginRight: 15,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#32475D',
  },
  specialty: {
    fontSize: 15,
    color: '#32475D',
    fontWeight: '600',
  },
});
