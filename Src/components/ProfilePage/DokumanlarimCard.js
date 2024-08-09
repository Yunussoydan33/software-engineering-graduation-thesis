import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const documents = [
  { name: 'Gelir Belgesi' },
  { name: 'Ek Gelir Belgesi' },
  { name: 'Fatura' },
  { name: 'Tabu' },
  { name: 'Adli Sicil belgesi' },
];

const DokumanlarimCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Dökümanlarım</Text>
      {documents.map((doc, index) => (
        <View key={index} style={styles.infoRow}>
          <Text style={styles.label}>{doc.name}</Text>
          <TouchableOpacity style={styles.uploadButton}>
            <Text style={styles.uploadButtonText}>yükle</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f7f9fc',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    marginHorizontal: 10,
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e6e7e8',
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
  uploadButton: {
    backgroundColor: 'transparent',
  },
  uploadButtonText: {
    fontSize: 16,
    color: '#666',
  },
});

export default DokumanlarimCard;
