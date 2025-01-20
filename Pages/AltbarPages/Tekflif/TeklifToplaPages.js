import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '../../../Src/components/Header/Header';
import TeklifComponents from '../../../Src/components/Teklif/TeklifComponents';
import AltBar from '../../../Src/components/AltBar/AltBar';
import { useNavigation } from '@react-navigation/native';

const TeklifToplaPages = () => {
  const navigation = useNavigation();

  const handleCreateOffer = async (offerDetails) => {
    navigation.navigate('TeklifToplaPages2', { offerDetails });
  };

  return (
    <View style={styles.container}>
      <Header title="Teklif Oluştur" />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <TeklifComponents onNextStep={handleCreateOffer} />
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
  scrollViewContent: {
    paddingBottom: 100,
  },
});

export default TeklifToplaPages;
