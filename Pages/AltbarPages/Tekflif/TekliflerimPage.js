import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../../../Src/components/Header/Header';
import TeklifButton from '../../../Src/components/Teklif/TeklifButton';
import NewTeklifButton from '../../../Src/components/Teklif/NewTeklifButton';
import NewTeklifCard from '../../../Src/components/Teklif/NewTeklifCard';

const TekliflerimPage = () => {
  const [selectedTab, setSelectedTab] = useState('Açık');

  return (
    <View style={styles.container}>
      <Header title="Tekliflerim" />
      <View style={styles.content}>
        <TeklifButton selectedTab={selectedTab} onTabPress={setSelectedTab} />
        <NewTeklifCard />
        <NewTeklifButton onPress={() => {/* Yeni teklif oluşturma işlemi */}} />

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  content: {
    flex: 1,
    padding: 20,
  },
});

export default TekliflerimPage;
