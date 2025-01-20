import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DoctorInfo = () => {
  const [selectedTab, setSelectedTab] = useState('Hakkında');

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tabButton, selectedTab === 'Hakkında' && styles.activeTab]}
          onPress={() => setSelectedTab('Hakkında')}
        >
          <Text style={[styles.tabText, selectedTab === 'Hakkında' && styles.activeTabText]}>Hakkında</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tabButton, selectedTab === 'Hizmetler' && styles.activeTab]}
          onPress={() => setSelectedTab('Hizmetler')}
        >
          <Text style={[styles.tabText, selectedTab === 'Hizmetler' && styles.activeTabText]}>Hizmetler</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tabButton, selectedTab === 'İş Deneyimi' && styles.activeTab]}
          onPress={() => setSelectedTab('İş Deneyimi')}
        >
          <Text style={[styles.tabText, selectedTab === 'İş Deneyimi' && styles.activeTabText]}>İş Deneyimi</Text>
        </TouchableOpacity>
      </View>

      {selectedTab === 'Hakkında' && (
        <View style={styles.contentContainer}>
          <Text style={styles.contentTitle}>Hakkında</Text>
          <Text style={styles.contentText}>
            1967 yılında Mersinde doğdum. İlk, orta ve lise öğrenimimi yine Mersinde tamamladıktan sonra 1984 
            yılında Hacettepe Üniversitesi Tıp Fakültesinde Tıp Eğitimime başladım. 1991 yılında mezun oldum. 
            1991-1997 yılları arasında Genel Cerrahi Uzmanlığını kazanarak Hacettepe Üniversitesi Tıp Fakültesi 
            Genel Cerrahi Anabilim Dalı’nda çalıştım. Uzmanlık sonrası 1997-1999 yılları arasında çeşitli özel 
            hastanelerde çalıştım. 2000-2003 yılında...
          </Text>
        </View>
      )}

      {selectedTab === 'Hizmetler' && (
        <View style={styles.contentContainer}>
          <Text style={styles.contentTitle}>Hizmetler</Text>
          <Text style={styles.contentText}>
            Buraya Hizmetler ile ilgili bilgiler gelecek.
          </Text>
        </View>
      )}

      {selectedTab === 'İş Deneyimi' && (
        <View style={styles.contentContainer}>
          <Text style={styles.contentTitle}>İş Deneyimi</Text>
          <Text style={styles.contentText}>
            Buraya İş Deneyimi ile ilgili bilgiler gelecek.
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  activeTab: {
    backgroundColor: '#22C55E',
  },
  tabText: {
    fontSize: 16,
    color: '#333',
  },
  activeTabText: {
    color: '#FFF',
  },
  contentContainer: {
    backgroundColor: '#F9FAFB',
    borderRadius: 10,
    padding: 15,
  },
  contentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1C2744',
  },
  contentText: {
    fontSize: 16,
    color: '#6C7883',
    lineHeight: 30,
  },
});

export default DoctorInfo;
