import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import HistorySvg from '../../assets/Svg/HistorySvg';
import BankCardSvg from '../../assets/Svg/BankCardSvg';
import ErrorSvg from '../../assets/Svg/ErrorSvg';
import { useNavigation } from '@react-navigation/native'; 

const AppointmentsType = () => {
  const navigation = useNavigation(); 

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Randevu Tipi</Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.leftButton]}>
          <Text style={styles.buttonText}>Online</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.rightButton]}>
          <Text style={styles.buttonText}>Şahsen</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitle}>Şahsen Danışma</Text>
      
      <View style={styles.infoContainer}>
        <View style={styles.infoBox}>
          <HistorySvg width={20} height={20} />
          <Text style={styles.infoText}>45 dk</Text>
        </View>
        <View style={styles.infoBox}>
          <BankCardSvg width={20} height={20} />
          <Text style={styles.infoText}>300 Euro</Text>
        </View>
      </View>

      <View style={styles.warningContainer}>
        <ErrorSvg width={20} height={20} />
        <Text style={styles.warningText}>En Erken Randevu: 27 Mart 2024</Text>
      </View>

      <View style={styles.navigationContainer}>
        <TouchableOpacity style={[styles.navButton, styles.prevButton]}>
          <Text style={[styles.navButtonText, styles.prevButtonText]}>Geri</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.navButton, styles.nextButton]}
          onPress={() => navigation.navigate('CalenderPage')} 
        >
          <Text style={[styles.navButtonText, styles.nextButtonText]}>İleri</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#EDF2FE',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6C7883',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    paddingVertical: 25,
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#B0C4DE',
  },
  leftButton: {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    marginRight: 5,
  },
  rightButton: {
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: '#E0FFE6',
    borderColor: '#66CDAA',
    marginLeft: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#32475D',
  },
  subtitle: {
    fontSize: 16,
    color: '#6C7883',
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 16,
    color: '#32475D',
    marginLeft: 10,
  },
  warningContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
    backgroundColor: '#FFF8E7',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  warningText: {
    fontSize: 14,
    color: '#6F5D29',
    marginLeft: 10,
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10, 
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  prevButton: {
    backgroundColor: 'white', // İleri butonunun arka plan rengi
    borderColor: '#32CD32', // İleri butonunun sınır rengi
    borderWidth: 2,
  },
  nextButton: {
    backgroundColor: '#32CD32', // Geri butonunun arka plan rengi
    borderColor: '#32CD32', // Geri butonunun sınır rengi
    borderWidth: 2,
  },
  navButtonText: {
    fontSize: 16,
  },
  prevButtonText: {
    color: '#32CD32', // İleri butonunun metin rengi
  },
  nextButtonText: {
    color: '#FFFFFF', // Geri butonunun metin rengi
  },
});

export default AppointmentsType;
