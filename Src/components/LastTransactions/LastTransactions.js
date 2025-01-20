import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CircularProgress from 'react-native-circular-progress-indicator';

const LastTransactions = ({ transactionDetails }) => {
  const totalLimit = parseFloat(transactionDetails.limit.replace('₺', '').replace(',', '')) || 1;
  const remainingLimit = parseFloat(transactionDetails.totalLimit.replace('₺', '').replace(',', '')) || 0;
  const remainingPercentage = (remainingLimit / totalLimit) * 100;

  return (
    <View style={styles.card}>
      <CircularProgress
        value={remainingPercentage}
        radius={75}
        duration={1000}
        progressValueColor={'#6528f7'}
        activeStrokeColor={'#6528f7'}
        inActiveStrokeColor={'#e0e0e0'}
        inActiveStrokeOpacity={0.5}
        inActiveStrokeWidth={20}
        activeStrokeWidth={20}
        valueSuffix="%"
      />
      <Text style={styles.transactionName}>{transactionDetails.name}</Text>
      <View style={styles.limitContainer}>
        <Text style={styles.limitLabel}>Kalan Limit</Text>
        <Text style={styles.limitValue}>{transactionDetails.totalLimit}</Text>
      </View>
      <View style={styles.limitContainer}>
        <Text style={styles.totalLimitLabel}>Toplam Limit</Text>
        <Text style={styles.totalLimitValue}>{transactionDetails.limit}</Text>
      </View>
      <Text style={styles.lastTransactionsLabel}>Son İşlemler</Text>
      <View style={styles.noTransactionsContainer}>
        <Ionicons name="remove-circle-outline" size={24} color="#aaa" />
        <View style={styles.noTransactionsTextContainer}>
          <Text style={styles.noTransactions}>Henüz herhangi bir işlem</Text>
          <Text style={styles.noTransactions}>bulunmamaktadır</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 15,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 20,
    alignItems: 'center',
  },
  transactionName: {
    fontSize: 16,
    color: '#6528f7',
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 20,
  },
  limitContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 25,
  },
  limitLabel: {
    fontSize: 16,
    color: '#6528f7',
    marginRight: 5,
  },
  limitValue: {
    fontSize: 16,
    color: '#6528f7',
  },
  totalLimitLabel: {
    fontSize: 16,
    color: '#000',
    marginRight: 5,
  },
  totalLimitValue: {
    fontSize: 16,
    color: '#000',
  },
  lastTransactionsLabel: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
    marginVertical: 15,
  },
  noTransactionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  noTransactionsTextContainer: {
    marginLeft: 10,
  },
  noTransactions: {
    fontSize: 14,
    color: '#aaa',
    textAlign: 'center',
  },
});

export default LastTransactions;
