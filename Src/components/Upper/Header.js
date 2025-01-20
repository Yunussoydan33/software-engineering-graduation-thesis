import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProfileSvg from '../../assets/Svg/ProfileSvg';
import NotificationSvg from '../../assets/Svg/NotificitionSvg';

export default function Header() {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('EarningsPage')}>
        <ProfileSvg style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.title}>SOYDAN</Text>
      <NotificationSvg style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#E8EFFF',
    height: 70,
    marginTop: -15,
  },
  icon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
});
