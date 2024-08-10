import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function AppointmentsCard() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.tabContainer}>
        <TouchableOpacity style={[styles.tabButton, styles.activeTab]}>
          <Text style={styles.tabTextActive}>Yaklaşan Randevular</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tabButton, styles.inactiveTab]}>
          <Text style={styles.tabText}>Geçmiş Randevular</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 15,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#DDE5FB', // Butonların arka plan rengi
    borderRadius: 25,  // Yuvarlatılmış köşeler için
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#32475D',  // Aktif tabın rengi (Yaklaşan Randevular)
    elevation: 3,  // Hafif gölge efekti
  },
  inactiveTab: {
    backgroundColor: '#FFFFFF',  // Geçmiş Randevular için beyaz arka plan
    borderWidth: 1,
    borderColor: '#AAB7DA',  // Dış hat için renk
  },
  tabText: {
    color: '#32475D',
    fontSize: 14,
    fontWeight: '600',
  },
  tabTextActive: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});
