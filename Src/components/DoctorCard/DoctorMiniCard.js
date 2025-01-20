import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const DoctorMiniCard = () => {
  return (
    <View>
      <Text style={styles.headerText}>Tarih Seçimi</Text> 
      <View style={styles.card}>
        <Image 
          source={require('../../assets/Image/AliDoctor.png')} // Kendi görsel yolunuza göre düzenleyin
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.doctorName}>Ali Kemal Erdemoğlu</Text>
          <Text style={styles.specialty}>Nöroloji</Text>
          <View style={styles.ratingContainer}>
            <Image 
              source={require('../../assets/Image/stars.png')}
              style={styles.starImage}
            />
            <Image 
              source={require('../../assets/Image/stars.png')}
              style={styles.starImage}
            />
            <Image 
              source={require('../../assets/Image/stars.png')}
              style={styles.starImage}
            />
            <Image 
              source={require('../../assets/Image/stars.png')}
              style={styles.starImage}
            />
            <Image 
              source={require('../../assets/Image/halfstars.png')}
              style={styles.starImage}
            />
            <Text style={styles.reviewCount}>12 Yorum</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#32475D',
    marginBottom: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,  // Kartın köşe yumuşatma değeri artırıldı
    padding: 25,       // Kartın iç boşlukları artırıldı
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginVertical: 15, // Kartın dış boşlukları artırıldı
    alignItems: 'center',
  },
  image: {
    width: 90,
    height: 80,
    borderRadius: 10,
  },
  textContainer: {
    marginLeft: 10,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#32475D',
  },
  specialty: {
    fontSize: 14,
    color: '#32475D',
    marginVertical: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starImage: {
    width: 20,
    height: 20,
    marginRight: 2,
  },
  reviewCount: {
    fontSize: 14,
    color: '#32CD32', // Yeşil renk
    marginLeft: 5,
  },
});

export default DoctorMiniCard;
