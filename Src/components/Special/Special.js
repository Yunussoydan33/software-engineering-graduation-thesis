import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import PlasticSvg from '../../assets/Svg/PlasticSvg'; // En Yeni Estetik Trendleri SVG'si için
import PlastickSvg from '../../assets/Svg/PlastickSvg'; // Popüler Kozmetik Prosedürleri SVG'si için

export default function Special() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sana Özel</Text> 
      <ScrollView 
        horizontal 
        pagingEnabled 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={styles.scrollContainer}
      >
        <View style={styles.column}>
          <View style={styles.card}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>En Yeni Estetik Trendleri</Text>
              <Text style={styles.subtitle}>Doktor Görüşleri ve hasta hikayeleri</Text>
            </View>
            <PlasticSvg style={styles.icon} />
          </View>
          <View style={styles.card}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>Popüler Kozmetik Prosedürleri</Text>
              <Text style={styles.subtitle}>Liposectiondan, burun ameliyatına</Text>
            </View>
            <PlastickSvg style={styles.icon} />
          </View>
        </View>

        <View style={styles.column}>
          <View style={styles.card}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>En Yeni Estetik Trendleri</Text>
              <Text style={styles.subtitle}>Doktor Görüşleri ve hasta hikayeleri</Text>
            </View>
            <PlasticSvg style={styles.icon} />
          </View>
          <View style={styles.card}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>Popüler Kozmetik Prosedürleri</Text>
              <Text style={styles.subtitle}>Liposectiondan, burun ameliyatına</Text>
            </View>
            <PlastickSvg style={styles.icon} />
          </View>
        </View>
      </ScrollView>
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
  scrollContainer: {
    paddingLeft: 8, // Kartları daha sola hizalamak için sol boşluk ekliyoruz
  },
  column: {
    flexDirection: 'column',
    marginRight: 15,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    width: 370, 
    flexDirection: 'row', // İkonları ve metni yatay hizalar
    alignItems: 'center',
    marginLeft: -7, // Kartları daha sola hizalamak için ayarlama yapıyoruz
  },
  icon: {
    width: 50,
    height: 50,
    marginLeft: 'auto', // İkonları sağa hizalar
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
});
