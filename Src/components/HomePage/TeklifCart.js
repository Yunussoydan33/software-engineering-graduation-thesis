import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native'; // Navigation için gerekli import

const TeklifCart = () => {
  const navigation = useNavigation(); // Navigation'ı kullanabilmek için hook

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>Teklifleriniz</Text>
        <TouchableOpacity onPress={() => navigation.navigate('TekliflerimPage')}> 
          <Text style={styles.seeAll}>tümünü gör</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.offerContainer}>
        <View style={styles.offer}>
          <View style={styles.offerDotYellow} />
          <Text style={styles.offerText}>Saç Ekimi</Text>
          <Text style={[styles.offerLocation, { marginLeft: -50 }]}>Samsun</Text>
          <Text style={styles.offerDate}>29 Haziran</Text>
          <Text style={styles.offerResponse}><Text style={styles.responseNumber}>0</Text> Cevap</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.offer}>
          <View style={styles.offerDotBlue} />
          <Text style={styles.offerText}>Ortodonti</Text>
          <Text style={[styles.offerLocation, { marginLeft: -50 }]}>Adana</Text>
          <Text style={styles.offerDate}>13 Haziran</Text>
          <Text style={styles.offerResponse}><Text style={styles.responseNumber}>3</Text> Cevap</Text>
        </View>
      </View>
      <TouchableOpacity 
        style={styles.createOfferButton}
        onPress={() => navigation.navigate('TeklifToplaPage')} // Yönlendirme işlemi burada yapılıyor
      >
        <Text style={styles.createOfferText}>Teklif Oluştur</Text>
        <Icon name="navigate-next" size={20} color="#fff" style={styles.icon}/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
  backgroundColor: '#F7F9FC',
  borderRadius: 10,
  padding: 15,
  shadowColor: '#000', // Gölge rengi
  shadowOffset: { width: 0, height: 2 }, // X: 0, Y: 2
  shadowOpacity: 0.2, // Opaklık: 20%
  shadowRadius: 3, // Blur: 3
  elevation: 3,
  marginHorizontal: 10,
  width: '90%',
  alignSelf: 'center',
  marginTop: 20,
},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  seeAll: {
    fontSize: 14,
    color: '#333333',
  },
  offerContainer: {
    backgroundColor: '#FAF4FE', // Pembe arka plan rengi
    borderRadius: 5,
    padding: 10,
  },
  offer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  separator: {
    height: 1,
    backgroundColor: 'black', // Çizgi rengi
    marginVertical: 5,
  },
  offerDotYellow: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FFC107',
    marginRight: 10,
  },
  offerDotBlue: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#00BCD4',
    marginRight: 10,
  },
  offerText: {
    fontSize: 14,
    color: '#333',
    flex: 2.5,
  },
  offerLocation: {
    fontSize: 14,
    color: '#000000',
    flex: 1.5,
    textAlign: 'center',
  },
  offerDate: {
    fontSize: 14,
    color: '#000000',
    flex: 1.5,
    textAlign: 'center',
  },
  offerResponse: {
    fontSize: 14,
    color: '#333',
    flex: 1.2,  // Cevap metni için genişliği artırdım
    textAlign: 'right',
    fontWeight: 'bold',
  },
  responseNumber: {
    fontWeight: 'bold',
  },
  createOfferButton: {
    backgroundColor: '#333',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    marginTop: 10,
    alignSelf: 'flex-start',
    flexDirection: 'row',
  },
  createOfferText: {
    color: '#fff',
    fontSize: 16,
    marginRight: 5,
  },
  icon: {
    marginLeft: 5,
  },
});

export default TeklifCart;
