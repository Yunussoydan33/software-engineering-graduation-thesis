import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import DiscoverCard from '../../Src/components/Discover/DiscoverCard'; 
import Travel from '../../Src/components/Travel/Travel'; 
import Special from '../../Src/components/Special/Special'; 
import New from '../../Src/components/New/New'; 
import Doctors from '../../Src/components/Doctor/Doctors'; 
import Special2 from '../../Src/components/Special2/Special2'; 
import ExpertOpinion from '../../Src/components/ExpertOpinion/ExpertOpinion'; 
import AltBar from '../../Src/components/AltBar/AltBar';
import CashBacCardScrollable from '../../Src/components/CashBackCard/CashBacCardScrollable'; 

export default function DiscoverPage() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.cardContainer}>
          <DiscoverCard /> 
        </View>
        <View style={styles.travelContainer}>
          <Travel /> 
        </View>
        <View style={styles.specialContainer}>
          <Special /> 
        </View>
        <View style={styles.newContainer}>
          <New /> 
        </View>
        <View style={styles.doctorsContainer}>
          <Doctors /> 
        </View>
        <View style={styles.special2Container}>
          <Special2 /> 
        </View>
        <View style={styles.expertOpinionContainer}>
          <ExpertOpinion /> 
        </View>
        <View style={styles.cashBacCardContainer}>
          <CashBacCardScrollable />  
        </View>
      </ScrollView>
      <View style={styles.altBarContainer}>
        <AltBar /> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF2FE',
    paddingTop: 30,
  },
  scrollContainer: {
    paddingBottom: 100, 
  },
  cardContainer: {
    marginBottom: 16,
  },
  travelContainer: {
    marginBottom: 16,
  },
  specialContainer: {
    marginBottom: 16,
  },
  newContainer: {
    marginBottom: 16,
  },
  doctorsContainer: {
    marginBottom: 16,
  },
  special2Container: {
    marginBottom: 16,
  },
  expertOpinionContainer: {
    marginBottom: 16,
  },
  cashBacCardContainer: {
    marginBottom: 16,
  },
  
});
