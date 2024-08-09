import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ExpertOpinion() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sana Özel</Text>
      <View style={styles.card}>
        <Image source={require('../../assets/Image/ExpertOpinion.jpeg')} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Burun Estetiği Temel Bilgiler</Text>
          <Text style={styles.subtitle}>
            Sağlıklı Yaşamın Temel İlkeleri. Erken teşhis ve önleme, sağlıklı bir yaşamın anahtarıdır.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EDF2FE',
    padding: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#7685AA',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 150,
  },
  textContainer: {
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
});
