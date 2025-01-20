import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const days = [
  { day: 'Prş', date: 16, fullDay: 'Perşembe' },
  { day: 'Cum', date: 17, fullDay: 'Cuma' },
  { day: 'Cmt', date: 18, fullDay: 'Cumartesi' },
  { day: 'Pz', date: 19, fullDay: 'Pazar' },
  { day: 'Pzt', date: 20, fullDay: 'Pazartesi' },
  { day: 'Sal', date: 21, fullDay: 'Salı' },
  // 22'den 30'a kadar devam eden günler
  { day: 'Çar', date: 22, fullDay: 'Çarşamba' },
  { day: 'Prş', date: 23, fullDay: 'Perşembe' },
  { day: 'Cum', date: 24, fullDay: 'Cuma' },
  { day: 'Cmt', date: 25, fullDay: 'Cumartesi' },
  { day: 'Pz', date: 26, fullDay: 'Pazar' },
  { day: 'Pzt', date: 27, fullDay: 'Pazartesi' },
  { day: 'Sal', date: 28, fullDay: 'Salı' },
  { day: 'Çar', date: 29, fullDay: 'Çarşamba' },
  { day: 'Prş', date: 30, fullDay: 'Perşembe' },
];

const DaySelect = () => {
  const [selectedDay, setSelectedDay] = useState(days[2]); // Başlangıçta 18. gün seçili

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Gün Seçiniz</Text>
        <Text style={styles.monthText}>Eylül</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
        {days.map((item, index) => (
          <TouchableOpacity 
            key={index} 
            style={[styles.dayContainer, item.date === selectedDay.date && styles.selectedDay]} 
            onPress={() => setSelectedDay(item)}
          >
            <Text style={[styles.dayText, item.date === selectedDay.date && styles.selectedDayText]}>{item.day}</Text>
            <Text style={[styles.dateText, item.date === selectedDay.date && styles.selectedDateText]}>{item.date}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Text style={styles.selectedDateDisplay}>
        {selectedDay.fullDay}, {selectedDay.date} Eylül
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  headerText: {
    fontSize: 16,
    color: '#6C7883',
  },
  monthText: {
    fontSize: 16,
    color: '#32CD32',
  },
  scrollContainer: {
    paddingHorizontal: 10,
  },
  dayContainer: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    marginRight: 10,
  },
  selectedDay: {
    backgroundColor: '#E0FFE6',
    borderColor: '#32CD32',
    borderWidth: 1,
  },
  dayText: {
    fontSize: 14,
    color: '#32475D',
  },
  dateText: {
    fontSize: 14,
    color: '#32475D',
  },
  selectedDayText: {
    color: '#32CD32',
    fontWeight: 'bold',
  },
  selectedDateText: {
    color: '#32CD32',
    fontWeight: 'bold',
  },
  selectedDateDisplay: {
    color: '#32475D',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
    fontSize: 16,
  },
});

export default DaySelect;
