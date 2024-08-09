import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProfileSvg from '../../assets/Svg/ProfileSvg';
import NotificationSvg from '../../assets/Svg/NotificitionSvg';

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <ProfileSvg style={styles.icon} />
      <Text style={styles.title}>Zuplink</Text>
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
