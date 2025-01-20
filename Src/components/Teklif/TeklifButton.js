import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const TeklifButton = ({ selectedTab, onTabPress }) => {
  return (
    <View style={styles.tabBackground}>
      <TouchableOpacity
        style={[styles.tabButton, selectedTab === 'Açık' ? styles.activeTab : styles.inactiveTab]}
        onPress={() => onTabPress('Açık')}
      >
        <Text style={selectedTab === 'Açık' ? styles.tabTextActive : styles.tabText}>Açık Tekliflerim</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tabButton, selectedTab === 'Geçmiş' ? styles.activeTab : styles.inactiveTab]} // Güncellendi
        onPress={() => onTabPress('Geçmiş')}
      >
        <Text style={selectedTab === 'Geçmiş' ? styles.tabTextActive : styles.tabText}>Geçmiş Tekliflerim</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBackground: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    backgroundColor: '#E1E9F6',  
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
    backgroundColor: '#3F4452',
    elevation: 3,
  },
  inactiveTab: {
    backgroundColor: '#FFFFFF', // Seçili olmayan sekmenin arka planı beyaz
    borderWidth: 1,
    borderColor: '#AAB7DA', // Border rengi #AAB7DA
  },
  tabText: {
    color: '#37517E',  // Seçili olmayan sekme metin rengi
    fontSize: 14,
    fontWeight: '600',
  },
  tabTextActive: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default TeklifButton;
