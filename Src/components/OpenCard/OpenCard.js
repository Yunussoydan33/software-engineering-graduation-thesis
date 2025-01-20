import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const OpenCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <Text style={styles.tab}>Açık</Text>
        <Text style={styles.tab}>Kapalı</Text>
        <Text style={styles.tab}>Başarısız</Text>
        <Text style={styles.tab}>İptal/İade</Text>
      </View>
      <View style={styles.contentContainer}>
        <Image
          source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/minus.png' }}
          style={styles.icon}
        />
        <Text style={styles.contentText}>Açık Kazanç Bulunmamaktadır</Text>
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
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around', 
    marginBottom: 20,
  },
  tab: {
    color: '#6528f7',
    fontWeight: 'bold',
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200, 
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

export default OpenCard;
