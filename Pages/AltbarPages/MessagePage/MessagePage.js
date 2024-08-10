import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MessagePage() {
  return (
    <View style={styles.container}>
      <Text>Mesajlar Sayfası</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDF2FE',
  },
});
