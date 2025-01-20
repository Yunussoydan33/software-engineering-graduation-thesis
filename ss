import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Targetcard from '../Src/components/targetcard/targetcard';
import Service from '../Src/components/ServiceCard/service';
import LastTransactions from '../Src/components/LastTransactions/LastTransactions';

const TargetPage = () => {
  const [transactionDetails, setTransactionDetails] = useState({ name: '', limit: '', totalLimit: '' });

  const handleServicePress = (details) => {
    setTransactionDetails(details);
  };

  return (
    <ScrollView 
      contentContainerStyle={styles.scrollContainer} 
      scrollEventThrottle={16}
      decelerationRate="fast"
    >
      <View style={styles.card}>
        <Targetcard />
        <Service onServicePress={handleServicePress} />
      </View>
      <LastTransactions transactionDetails={transactionDetails} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 30,
    backgroundColor: '#f5f5f5',
  },
  card: {
    width: '90%',
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 20,
  },
});

export default TargetPage;
