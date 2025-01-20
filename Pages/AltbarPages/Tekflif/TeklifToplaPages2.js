import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '../../../Src/components/Header/Header';
import TeklifToplaComponents2 from '../../../Src/components/Teklif/TeklifToplaComponents2';
import AltBar from '../../../Src/components/AltBar/AltBar';
import { useRoute } from '@react-navigation/native';

const TeklifToplaPages2 = () => {
  const route = useRoute();
  const { offerDetails } = route.params; 

  return (
    <View style={styles.container}>
      <Header title="Teklif Oluştur" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TeklifToplaComponents2 initialDetails={offerDetails} />
      </ScrollView>
      <AltBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 100, 
  },
});

export default TeklifToplaPages2;
