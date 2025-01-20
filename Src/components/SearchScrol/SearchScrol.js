import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const specialties = [
  { title: 'Kalp ve Damar' },
  { title: 'Üroloji' },
  { title: 'Ortopedi' },
  { title: 'Dahiliye' },
  { title: 'Dermatoloji' },
];

const SearchScroll = () => {
  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        <TouchableOpacity style={[styles.button, styles.activeButton]}>
          <Text style={[styles.buttonText, styles.activeButtonText]}>Tümü</Text>
        </TouchableOpacity>
        {specialties.map((specialty, index) => (
          <TouchableOpacity key={index} style={styles.button}>
            <Text style={styles.buttonText}>{specialty.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  scrollView: {
    alignItems: 'center',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    marginRight: 10,
  },
  activeButton: {
    backgroundColor: '#22C55E',
    borderColor: '#22C55E',
  },
  buttonText: {
    fontSize: 14,
    color: '#4B5563',
  },
  activeButtonText: {
    color: '#FFFFFF',
  },
});

export default SearchScroll;
