import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const times = [
  '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
  '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
  '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
  '7:00 PM'
];

const ClockSelect = () => {
  const [selectedTime, setSelectedTime] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Saat Seçiniz</Text>
      <View style={styles.grid}>
        {times.map((time, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.timeButton, selectedTime === time && styles.selectedTimeButton]}
            onPress={() => setSelectedTime(time)}
          >
            <Text style={[styles.timeText, selectedTime === time && styles.selectedTimeText]}>
              {time}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  headerText: {
    fontSize: 16,
    color: '#6C7883',
    marginBottom: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  timeButton: {
    width: '23%', // Butonları yan yana 4 tane sığacak şekilde genişlik ayarı
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  selectedTimeButton: {
    backgroundColor: '#E0FFE6',
    borderColor: '#32CD32',
    borderWidth: 1,
  },
  timeText: {
    fontSize: 14,
    color: '#32475D',
  },
  selectedTimeText: {
    color: '#32CD32',
    fontWeight: 'bold',
  },
});

export default ClockSelect;
