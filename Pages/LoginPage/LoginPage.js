import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from '../../Src/components/Header/Header';
import LoginButton from '../../Src/components/LoginButton/LoginButton';
import { useNavigation } from '@react-navigation/native';

export default function LoginPage() {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Header title="Giriş Yap" />
        <View style={styles.content}>
          <LoginButton onPress={() => navigation.navigate('HomePage')} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    width: '100%',
    marginTop: 0, 
  },
});
