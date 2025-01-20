import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DocumentUploadCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Dökümanlarını Tamamla</Text>
      <Text style={styles.subtitle}>Skorunuzu arttırmak için dokumanlarınızı tamamlayın</Text>

      <TouchableOpacity style={styles.uploadButton}>
        <Text style={styles.uploadText}>Fatura</Text>
        <Text style={styles.uploadLink}>yükle</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.uploadButton}>
        <Text style={styles.uploadText}>Adli Sicil Belgesi</Text>
        <Text style={styles.uploadLink}>yükle</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
  backgroundColor: '#f7f9fc',
  borderRadius: 10,
  padding: 20,
  shadowColor: '#000', // Gölge rengi
  shadowOffset: { width: 0, height: 2 }, // X: 0, Y: 2
  shadowOpacity: 0.2, // Opaklık: 20%
  shadowRadius: 3, // Blur: 3
  elevation: 3,
  marginHorizontal: 10,
  width: '90%',
  alignSelf: 'center',
  marginTop: 20,
},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  uploadButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#b3e5fc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 15,
  },
  uploadText: {
    fontSize: 16,
    color: '#333',
  },
  uploadLink: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default DocumentUploadCard;
