import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import DoctorMiniCard from '../../Src/components/DoctorCard/DoctorMiniCard';
import DaySelect from '../../Src/components/DoctorCard/DaySelect';
import ClockSelect from '../../Src/components/DoctorCard/ClockSelect';

const CalenderPage = () => {
  return (
    <View style={styles.container}>
      <DoctorMiniCard />
      <DaySelect />
      <ClockSelect />  

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.navButton, styles.prevButton]}>
          <Text style={[styles.navButtonText, styles.prevButtonText]}>Geri</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navButton, styles.nextButton]}>
          <Text style={[styles.navButtonText, styles.nextButtonText]}>İleri</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#EDF2FE',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30, 
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  prevButton: {
    backgroundColor: 'white',
    borderColor: '#32CD32',
    borderWidth: 2,
  },
  nextButton: {
    backgroundColor: '#32CD32',
    borderColor: '#32CD32',
    borderWidth: 2,
  },
  navButtonText: {
    fontSize: 16,
  },
  prevButtonText: {
    color: '#32CD32',
  },
  nextButtonText: {
    color: '#FFFFFF',
  },
});

export default CalenderPage;
