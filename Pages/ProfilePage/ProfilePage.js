import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import AltBar from '../../Src/components/AltBar/AltBar';
import PersonalInfoCard from '../../Src/components/ProfilePage/PersonalInfoCard';
import ContactInfoCard from '../../Src/components/ProfilePage/ContactInfoCard'; 
import WorkInfoCard from '../../Src/components/ProfilePage/WorkInfoCard';
import DokumanlarimCard from '../../Src/components/ProfilePage/DokumanlarimCard';

const ProfilePage = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <PersonalInfoCard /> 
      <ContactInfoCard/>
      <WorkInfoCard/>
      <DokumanlarimCard/>
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

export default ProfilePage;