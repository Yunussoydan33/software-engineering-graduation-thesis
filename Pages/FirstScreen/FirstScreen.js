import React from 'react';
import { StyleSheet, View } from 'react-native';
import Welcome from '../../Src/components/Welcome/Welcome';

export default function FirstScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Welcome navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
