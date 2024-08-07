import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../../Src/components/Header/Header';
import LoginButton from '../../Src/components/LoginButton/LoginButton';
import { useNavigation } from '@react-navigation/native';

export default function LoginPage() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <LoginButton onPress={() => navigation.navigate('HomePage')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingTop: 20, 
    paddingHorizontal: 20,
  },
});
