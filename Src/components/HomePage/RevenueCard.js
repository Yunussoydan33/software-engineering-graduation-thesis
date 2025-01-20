import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RevenueCard = () => {
  const navigation = useNavigation();
  const currentRevenue = 75800;
  const targetRevenue = 131500;
  const progressPercentage = (currentRevenue / targetRevenue) * 100;

  return (
    <TouchableOpacity onPress={() => navigation.navigate('TargetPage')} style={{ width: '100%' }}>
      <View style={styles.card}>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.title}>Yapılan Ciro</Text>
            <Text style={styles.amount}>{currentRevenue.toLocaleString('tr-TR')} TL</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.title}>Hedef ciro</Text>
            <Text style={styles.amount}>{targetRevenue.toLocaleString('tr-TR')}</Text>
          </View>
        </View>
        <View style={styles.progressBarBackground}>
          <View style={[styles.progressBar, { width: `${progressPercentage}%` }]}>
            <Text style={styles.progressText}>%{Math.round(progressPercentage)}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
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

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  column: {
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  amount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  progressBarBackground: {
    height: 30,
    borderRadius: 5,
    backgroundColor: '#e0e0e0',
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: 5,
    backgroundColor: '#4285F4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default RevenueCard;
