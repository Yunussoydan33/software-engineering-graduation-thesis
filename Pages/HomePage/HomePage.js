import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import Score from '../../Src/components/HomePage/score';
import RevenueCard from '../../Src/components/HomePage/RevenueCard';
import ProfileCompletionCard from '../../Src/components/HomePage/ProfileCompletionCard';
import DocumentUploadCard from '../../Src/components/HomePage/DocumentUploadCard';
import DoctorSearch from '../../Src/components/HomePage/DoctorSearch';
import SpecialtyCard from '../../Src/components/HomePage/SpecialtyCard';
import SectionCard from '../../Src/components/HomePage/SectionCard';
import Header from '../../Src/components/Upper/Header';
import AltBar from '../../Src/components/AltBar/AltBar';

const HomePage = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Score />
        <RevenueCard />
        <ProfileCompletionCard />
        <DocumentUploadCard />
        <DoctorSearch />
        <SpecialtyCard />
        <SectionCard />
      </ScrollView>
      <AltBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#E8EFFF',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingBottom: 60,
  },
});

export default HomePage;