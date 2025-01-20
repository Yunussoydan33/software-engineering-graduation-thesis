import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert, ActivityIndicator } from 'react-native';
import OnSvg from '../../assets/Svg/OnSvg'; 
import OffSvg from '../../assets/Svg/OffSvg'; 

const TeklifComponents = ({ onNextStep }) => {
  const [selectedHizmetTipi, setSelectedHizmetTipi] = useState('Diğer');
  const [selectedKonaklama, setSelectedKonaklama] = useState('Var');
  const [countryInfoForPatient, setCity] = useState('');
  const [serviceDate, setServiceDate] = useState('');
  const [operationDetails, setOperationDetails] = useState('');
  const [loading, setLoading] = useState(false);

  const handleNextStep = async () => {
    if (!countryInfoForPatient || !serviceDate || !operationDetails) {
      Alert.alert("Hata", "Lütfen tüm alanları doldurun.");
      return;
    }

    const offerDetails = {
      countryInfoForPatient,
      serviceType: selectedHizmetTipi,
      serviceDate,
      accommodation: selectedKonaklama,
      operationDetails
    };

    setLoading(true);
    try {
      onNextStep(offerDetails);  
    } catch (error) {
      Alert.alert("Hata", "Bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.step}>1/2</Text>
        <Text style={styles.label}>Yaşadığınız Şehir</Text>
        <TextInput 
          style={[styles.input, styles.largeInput]} 
          placeholder="Şehir" 
          value={countryInfoForPatient}
          onChangeText={setCity}
        />
        <Text style={styles.label}>Hizmet Tipi</Text>
        <View style={styles.checkboxGroup}>
          <TouchableOpacity 
            style={[
              styles.checkbox, 
              selectedHizmetTipi === 'Onkoloji' && styles.checkboxSelected
            ]}
            onPress={() => setSelectedHizmetTipi('Onkoloji')}
          >
            <View style={styles.innerCheckbox}>
              {selectedHizmetTipi === 'Onkoloji' ? <OnSvg /> : <OffSvg />}
            </View>
            <Text style={styles.checkboxLabel}>Onkoloji</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[
              styles.checkbox, 
              selectedHizmetTipi === 'Diğer' && styles.checkboxSelected
            ]}
            onPress={() => setSelectedHizmetTipi('Diğer')}
          >
            <View style={styles.innerCheckbox}>
              {selectedHizmetTipi === 'Diğer' ? <OnSvg /> : <OffSvg />}
            </View>
            <Text style={styles.checkboxLabel}>Diğer</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.label}>Hizmet Tarihi</Text>
        <TextInput 
          style={[styles.input, styles.largeInput]} 
          placeholder="gg.aa.yyyy" 
          value={serviceDate}
          onChangeText={setServiceDate}
        />
        <Text style={styles.label}>Konaklama ve Transfer Hizmeti</Text>
        <View style={styles.checkboxGroup}>
          <TouchableOpacity 
            style={[
              styles.checkbox, 
              selectedKonaklama === 'Yok' && styles.checkboxSelected
            ]}
            onPress={() => setSelectedKonaklama('Yok')}
          >
            <View style={styles.innerCheckbox}>
              {selectedKonaklama === 'Yok' ? <OnSvg /> : <OffSvg />}
            </View>
            <Text style={styles.checkboxLabel}>Yok</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[
              styles.checkbox, 
              selectedKonaklama === 'Var' && styles.checkboxSelected
            ]}
            onPress={() => setSelectedKonaklama('Var')}
          >
            <View style={styles.innerCheckbox}>
              {selectedKonaklama === 'Var' ? <OnSvg /> : <OffSvg />}
            </View>
            <Text style={styles.checkboxLabel}>Var</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.label}>Operasyon Detayları</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Buraya örnek açıklama yazılacak yönlendirici"
          multiline
          numberOfLines={4}
          value={operationDetails}
          onChangeText={setOperationDetails}
        />
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleNextStep}>
            <Text style={styles.buttonText}>Sonraki Adım</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
  },
  step: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1F2937',
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
    color: '#1F2937',
  },
  input: {
    height: 40,
    borderColor: '#D1D5DB',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#F9FAFB',
  },
  largeInput: {
    height: 50,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
    borderColor: '#D1D5DB',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
  checkboxGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    height: 60,
    borderRadius: 8,
    borderColor: '#D1D5DB',
    borderWidth: 1,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    backgroundColor: '#F9FAFB',
    marginBottom: 10,
  },
  checkboxSelected: {
    backgroundColor: '#E0F2FE',
    borderColor: '#3B82F6',
  },
  innerCheckbox: {
    width: 25,
    height: 25,
    borderRadius: 5,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxLabel: {
    fontSize: 16,
    color: '#1F2937',
  },
  button: {
    backgroundColor: '#111827',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loader: {
    marginTop: 20,
  },
});

export default TeklifComponents;
