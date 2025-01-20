import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CashAltInfo = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Arda ve DR.Ercan ile Özgüven Yolculuğu</Text>
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>Kilit Açılımı <Text style={styles.bold}>25 kişi</Text></Text>
        <Text style={styles.participation}>%80 katılım</Text>
      </View>
      <View style={styles.progressBarContainer}>
        <View style={styles.progressBar}>
          <View style={styles.progress} />
        </View>
      </View>
      <View style={styles.infoRow}>
        <Icon name="person" size={20} color="#6528F7" />
        <Text style={styles.infoText}>Güzellik Koçu</Text>
        <Text style={styles.bold}>Arda Bektaş</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.infoRow}>
        <Icon name="medkit" size={20} color="#6528F7" />
        <Text style={styles.infoText}>Plastik Cerrah</Text>
        <Text style={styles.bold}>AHMET ERCAN DEMİRAY</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.infoRow}>
        <Icon name="location" size={20} color="#6528F7" />
        <Text style={styles.infoText}>Yer Bilgisi</Text>
        <Text style={styles.bold}>İstanbul</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.infoRow}>
        <Icon name="cash" size={20} color="#6528F7" />
        <Text style={styles.infoText}>Cashback</Text>
        <Text style={styles.bold}>10%</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.infoRow}>
        <Icon name="analytics" size={20} color="#6528F7" />
        <Text style={styles.infoText}>Mali Avantaj</Text>
        <Text style={styles.bold}>5 yılda - 54.450 TL</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.infoRow}>
        <Icon name="stats-chart" size={20} color="#6528F7" />
        <Text style={styles.infoText}>Kazanç ve Yatırım Bilgisi</Text>
        <Text style={styles.bold}>Özgüven ve Kar</Text>
      </View>
      <View style={styles.separator} />
      <Text style={styles.remainingTime}>Kalan Süre</Text>
      <Text style={styles.timer}>19 : 23 : 59 : 47</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Katılım Sağla</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: '100%',
  },
  title: {
    textAlign: 'center',
    fontSize: 16,
    color: '#6528F7',
    marginBottom: 16,
    fontWeight: 'bold',
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  progressText: {
    fontSize: 14,
  },
  participation: {
    fontSize: 14,
  },
  progressBarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  progressBar: {
    width: '100%',
    height: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progress: {
    width: '80%',
    height: '100%',
    backgroundColor: 'green',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    width: '100%',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    marginLeft: 8,
    flex: 1,
    color: '#333',
  },
  bold: {
    fontSize: 14,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'right',
    color: '#333',
  },
  remainingTime: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 16,
    marginBottom: 8,
    color: '#333',
    fontWeight: 'bold',
  },
  timer: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#6528F7',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CashAltInfo;
