import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function DoctorCard() {
    const navigation = useNavigation();  return (
        
    <View style={styles.card}>
      <View style={styles.header}>
        <Image 
          source={require('../../assets/Image/AliDoctor.png')} 
          style={styles.image} 
        />
        <View style={styles.headerText}>
          <Text style={styles.name}>Ali Kemal Erdemoğlu</Text>
          <Text style={styles.specialty}>Nöroloji</Text>
          <View style={styles.dateContainer}>
            <Image source={require('../../assets/Image/calendar.png')} style={styles.icon} />
            <Text style={styles.dateText}>31-05-2024 / 15:00-15:30</Text>
          </View>
        </View>
      </View>

      <View style={styles.separator} />

      <Text style={styles.status}>Görüşmeniz Başlamak üzere</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AppointmentsDetail')}>
        <Text style={styles.buttonText}>Doktor Ara</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginBottom: 40, 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 74,
    height: 72,
    borderRadius: 10,
    marginRight: 10,
  },
  headerText: {
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
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  dateText: {
    fontSize: 14,
    color: '#32475D',
    fontWeight: '600',
  },
  separator: {
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  status: {
    fontSize: 15,
    color: '#32475D',
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#32475D',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
