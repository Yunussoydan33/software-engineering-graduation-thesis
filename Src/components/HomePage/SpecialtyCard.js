import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window'); 
const cardWidth = (width - 80) / 3.03; 

const specialties = [
  { title: 'Kalp ve Damar', specialists: 5, icon: require('../../assets/Image/heart.jpg') },
  { title: 'Üroloji', specialists: 5, icon: require('../../assets/Image/heart.jpg') },
  { title: 'Ortopedi', specialists: 5, icon: require('../../assets/Image/heart.jpg') },
  { title: 'Dahiliye', specialists: 5, icon: require('../../assets/Image/heart.jpg') },
  { title: 'Dermatoloji', specialists: 5, icon: require('../../assets/Image/heart.jpg') },
];

const SpecialtyCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Doktor Ağınız</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
        {specialties.map((specialty, index) => (
          <TouchableOpacity key={index} style={[styles.card, { width: cardWidth }]}>
            <Image source={specialty.icon} style={styles.icon} />
            <Text style={styles.title}>{specialty.title}</Text>
            <Text style={styles.specialists}>{specialty.specialists} Uzman</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    width: '94%',
    marginTop: 20,
    paddingRight: 10,
    alignSelf: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: 10,
  },
  scrollView: {
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: '#f7f9fc',
    borderRadius: 10,
    paddingVertical: 25,
    alignItems: 'center',
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 23,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    textAlign: 'center',
  },
  specialists: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});

export default SpecialtyCard;