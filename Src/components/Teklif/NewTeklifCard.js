import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CalenderSvg from '../../assets/Svg/CalenderSvg';
import LocationSvg from '../../assets/Svg/LocationSvg';

const NewTeklifCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Saç Ekimi Uzmanı Aranıyor</Text>
      <View style={styles.row}>
        <CalenderSvg width={16} height={16} />
        <Text style={styles.infoText}>14.11.2024</Text>
      </View>
      <View style={styles.row}>
        <LocationSvg width={16} height={16} />
        <Text style={styles.infoText}>Adana</Text>
      </View>
      <View style={styles.offerContainer}>
        <View style={styles.offer}>
          <View style={styles.offerRow}>
            <Text style={styles.offerLabel}>Teklif Veren</Text>
            <Text style={styles.offerValue}>Medikal Hastanesi</Text>
          </View>
          <View style={styles.separator} /> 
          <View style={styles.offerRow}>
            <Text style={styles.offerLabel}>Teklif</Text>
            <Text style={styles.offerValue}>2500 TL</Text>
          </View>
        </View>
        <View style={styles.offer}>
          <View style={styles.offerRow}>
            <Text style={styles.offerLabel}>Teklif Veren</Text>
            <Text style={styles.offerValue}>Medikal Hastanesi</Text>
          </View>
          <View style={styles.separator} /> 
          <View style={styles.offerRow}>
            <Text style={styles.offerLabel}>Teklif</Text>
            <Text style={styles.offerValue}>2500 TL</Text>
          </View>
        </View>
      </View>
      <Text style={styles.details}>Detaylı gör</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FAF4FE',
    padding: 15,
    borderRadius: 16,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#675772',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  infoText: {
    marginLeft: 5,
    color: '#675772',
    fontSize: 14,
  },
  offerContainer: {
    marginTop: 15,
  },
  offer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 10,
    borderColor: '#ECEBED',
    borderWidth: 1,
    marginBottom: 10, 
  },
  offerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  separator: {
    height: 1,
    backgroundColor: '#ECEBED', // İnce çizginin rengi
    marginVertical: 5,
  },
  offerLabel: {
    color: '#8E8E93',
    fontSize: 14,
  },
  offerValue: {
    color: '#67758D',
    fontSize: 14,
    fontWeight: '600',
  },
  details: {
    color: '#333333',
    textAlign: 'right',
    marginTop: 10,
    fontWeight: '600',
  },
});

export default NewTeklifCard;
