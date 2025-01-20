import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const PayCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <Text style={styles.tab}>Yaklaşan Ödemeler</Text>
        <Text style={styles.tab}>Ödenenler</Text>
        <Text style={styles.tab}>Tümü</Text>
      </View>
      <View style={styles.walletContainer}>
        <View style={styles.wallet}>
          <Image
            source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/wallet.png' }} 
            style={styles.walletIcon}
          />
          <Text style={styles.walletText}>Cüzdan Bakiyem : ₺0,00</Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <Image
          source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/minus.png' }} 
          style={styles.icon}
        />
        <Text style={styles.contentText}>Ödeme Bulunmamaktadır</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    width: '100%',
    alignSelf: 'center',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginTop: 20,
    height: 330,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-around', 
  },
  tab: {
    color: '#6528f7',
    fontWeight: 'bold',
  },
  walletContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20, 

  },
  wallet: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#6528f7',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  walletIcon: {
    width: 20,
    height: 20,
    tintColor: '#6528f7',
    marginRight: 5,
  },
  walletText: {
    color: '#6528f7',
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    marginTop: 20, 
  },
  icon: {
    width: 50,
    height: 50,
    tintColor: '#6a7c92',
    marginBottom: 10,
  },
  contentText: {
    color: '#6a7c92',
    textAlign: 'center',
  },
});

export default PayCard;
