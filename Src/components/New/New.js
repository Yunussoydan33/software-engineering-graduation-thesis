import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import CalenderSvg from '../../assets/Svg/CalenderSvg'; // Takvim SVG'si için
import GroupSvg from '../../assets/Svg/GroupSvg'; // Grup SVG'si için

export default function New() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Yeni Başlayanlara</Text>
      <View style={styles.card}>
        <Image source={require('../../assets/Image/New.jpeg')} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Diş Sağlığı Elçisi Nasıl Olurum?</Text>
          <Text style={styles.subtitle}>
            Sağlıklı Yaşamın Temel İlkeleri. Erken teşhis ve önleme, sağlıklı bir yaşamın anahtarıdır.
          </Text>
        </View>
        <View style={styles.infoBox}>
          <View style={styles.infoItem}>
            <CalenderSvg style={styles.icon} />
            <Text style={styles.info}>9 August - Sun</Text>
          </View>
          <View style={styles.infoItem}>
            <GroupSvg style={styles.icon} />
            <Text style={styles.info2}>20 Sağlık Elçisi katılıyor.</Text>
          </View>
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
    marginBottom: 16,

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
    marginBottom: 16,
  },
  infoBox: {
    backgroundColor: '#DDE5FB', // Alt kısmın tamamını bu renkte yapıyoruz
    padding: 12,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    marginRight: 8,
  },
  info: {
    fontSize: 14,
    color: '#32475D',
  },
  info2: {
    fontSize: 14,
    color: '#4285F4',
  },
});
