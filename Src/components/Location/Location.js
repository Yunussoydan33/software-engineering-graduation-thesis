import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LocationSvg from '../../assets/Svg/LocationSvg';
import RightBoxSvg from '../../assets/Svg/RightBoxSvg';

const Location = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.iconContainer}>
        <LocationSvg width={20} height={20} />
      </View>
      <Text style={styles.text}>Turkey</Text>
      <View style={styles.iconContainerRight}>
        <RightBoxSvg width={20} height={20} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 12,
    backgroundColor: '#F9FAFB',
  },
  iconContainer: {
    marginRight: 8,
  },
  text: {
    fontSize: 16,
    color: '#4B5563',
    flex: 1,
  },
  iconContainerRight: {
    marginLeft: 8,
  },
});

export default Location;
