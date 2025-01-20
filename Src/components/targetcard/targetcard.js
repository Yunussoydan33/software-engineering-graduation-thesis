import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Targetcard() {
  return (
    <View style={styles.targetCard}>
      <View style={styles.row1}>
        <Text style={styles.targetLabel}>Hedef Ciro</Text>
        <Text style={styles.targetValue}>₺131.500</Text>
      </View>
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View style={[styles.progress, { width: '58%' }]} />
        </View>
      </View>
      <View style={styles.row2}>
        <View>
          <Text style={styles.label}>Yapılan Ciro</Text>
          <Text style={styles.value}>₺75.800</Text>
        </View>
        <View>
          <Text style={styles.labelciro}>Kalan Ciro</Text>
          <Text style={styles.valueciro}>₺55.700</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  targetCard: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 20,
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#6528f7',
    marginBottom: -10,
    height: 65,
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    padding: 20,
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  targetLabel: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: 'bold',
  },
  targetValue: {
    fontSize: 16,
    color: '#FFF',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#000',
  },
  value: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000',
  },
  labelciro: {
    fontSize: 16,
    marginBottom: 5,
    color: '#6528f7',
  },
  valueciro: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#6528f7',
  },
  progressContainer: {
    marginBottom: 8,
  },
  progressBar: {
    height: 25,
    backgroundColor: '#E0E0E0',
    borderRadius: 15,
    borderWidth: 4,
    borderColor: '#FFF',
    overflow: 'hidden',
  },
  progress: {
    height: 25,
    backgroundColor: '#a076f9',
  },
});
