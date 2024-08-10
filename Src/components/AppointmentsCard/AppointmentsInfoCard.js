import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppointmentsInfoCard() {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>Randevu Tarihi</Text>
          <Text style={styles.value}>12 Mayıs 2024</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>Randevu Saati</Text>
          <Text style={styles.value}>15:00-15:30</Text>
        </View>
      </View>

      <View style={styles.separator} />

      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>Servis Adı</Text>
          <Text style={styles.value}>Nöroloji</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>Servis Tipi</Text>
          <Text style={styles.value}>Online</Text>
        </View>
      </View>

      <View style={styles.separator} />

      <View style={styles.rowSingle}>
        <Text style={styles.label}>Randevu Adresi</Text>
        <Text style={styles.value}>-</Text>
      </View>

      <View style={styles.separator} />

      <View style={styles.rowSingle}>
        <Text style={styles.label}>Ödenen Tutar</Text>
        <Text style={styles.price}>300 Euro</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  rowSingle: {
    flexDirection: 'column', // Tek bir kolon olarak gösterim için
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  column: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    color: '#7D7D7D',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    color: '#32475D',
    fontWeight: '600',
    marginTop: 5, // Randevu Adresi "-" işaretinin hemen altında yer alması için
  },
  separator: {
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  price: {
    fontSize: 16,
    color: '#32475D',
    fontWeight: '600',
    marginTop: 5, // Ödenen Tutar metninin hemen altında yer alması için
  },
});
