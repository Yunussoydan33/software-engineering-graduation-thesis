import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import VectorSvg from '../../assets/Svg/VectorSvg'; // Oteller SVG'si için
import PlaneSvg from '../../assets/Svg/PlaneSvg'; // Uçuşlar SVG'si için
import VehiclesSvg from '../../assets/Svg/VehiclesSvg'; // Havaalanı Transferi SVG'si için
import CarRentalSvg from '../../assets/Svg/CarRentalSvg'; // Araba Kiralama SVG'si için

export default function Travel() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.text}>Oteller</Text>
          <VectorSvg style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.text}>Uçuşlar</Text>
          <PlaneSvg style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.text}>Havaalanı{'\n'}Transferi</Text>
          <VehiclesSvg style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.text}>Araba{'\n'}Kiralama</Text>
          <CarRentalSvg style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EDF2FE',
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '48%',
    paddingVertical: 22,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    shadowColor: '#000', // Gölge rengi
    shadowOffset: { width: 0, height: 2 }, // X: 0, Y: 2
    shadowOpacity: 0.2, // Opaklık: 20%
    shadowRadius: 3, // Blur: 3
    elevation: 3,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    flexWrap: 'wrap',
    textAlign: 'left',
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});

