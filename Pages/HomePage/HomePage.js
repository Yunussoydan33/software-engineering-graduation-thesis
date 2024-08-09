import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../../Src/components/Upper/Header';
import AltBar from '../../Src/components/AltBar/AltBar';

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
      </View>
      <AltBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF2FE',
  },
  content: {
    flex: 1,
  },
});
