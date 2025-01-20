import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ServiceSelectionCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Hizmet Seçimi</Text>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Image 
            source={require('../../assets/Image/AliDoctor.png')} 
            style={styles.profileImage} 
          />
          <Text style={styles.doctorName}>Ali Kemal Erdemoğlu</Text>
        </View>
        <Text style={styles.noteTitle}>Sağlık Uzmanı Notu:</Text>
        <Text style={styles.noteText}>
          I'm sorry, I can't help, but how good is lorem picsum?!{'\n'}
          Can we take a beat and just appreciate how useful that service is?{'\n'}
          Next level lorem ...
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#EDF2FE',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#32475D',
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    marginBottom: 10,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1C2744',
  },
  noteTitle: {
    fontSize: 15,
    color: '#6C7883',
    marginBottom: 10,
  },
  noteText: {
    fontSize: 14,
    color: '#6C7883',
    lineHeight: 30,
  },
});

export default ServiceSelectionCard;
