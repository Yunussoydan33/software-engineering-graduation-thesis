import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function AppointmentsCard() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.tabBackground}>
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
  tabBackground: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    backgroundColor: '#DDE5FB',  
    borderRadius: 25,
    padding: 5,  
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 5,  
    borderRadius: 25,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#32475D',
    elevation: 3,
  },
  inactiveTab: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#AAB7DA',
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
