import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import OnSvg from '../../assets/Svg/OnSvg';
import OffSvg from '../../assets/Svg/OffSvg';
import ManSvg from '../../assets/Svg/ManSvg';
import WomanSvg from '../../assets/Svg/WomanSvg';
import OtherSvg from '../../assets/Svg/OtherSvg';
import UploadSvg from '../../assets/Svg/UploadSvg';

const TeklifToplaComponents2 = ({ initialDetails }) => {
  const [selectedGender, setSelectedGender] = useState(initialDetails?.gender || 'Kadın');
  const [selectedHealthReport, setSelectedHealthReport] = useState(initialDetails?.healthReport || 'Var');
  const [selectedMedicineUsage, setSelectedMedicineUsage] = useState(initialDetails?.medicineUsage || true);
  const [chronicDiseases, setChronicDiseases] = useState(initialDetails?.chronicDiseases || '');
  const [isConsentGiven, setIsConsentGiven] = useState(initialDetails?.consent || false);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const handleSubmit = () => {
    if (!isConsentGiven) {
      Alert.alert("Uyarı", "Sağlık verilerinin kullanımına izin vermeniz gerekiyor.");
      return;
    }

    Alert.alert("Başarılı", "Teklif başarıyla oluşturuldu.", [
      {
        text: "Tamam",
        onPress: () => navigation.navigate('TekliflerimPage'),
      },
    ]);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.step}>2/2</Text>

        <Text style={styles.label}>Hasta Cinsiyeti</Text>
        <View style={styles.checkboxGroup}>
          {['Kadın', 'Erkek', 'Diğer'].map(gender => (
            <TouchableOpacity
              key={gender}
              style={[styles.checkbox, selectedGender === gender && styles.checkboxSelected]}
              onPress={() => setSelectedGender(gender)}
            >
              {gender === 'Kadın' && <WomanSvg />}
              {gender === 'Erkek' && <ManSvg />}
              {gender === 'Diğer' && <OtherSvg />}
              <Text style={styles.checkboxLabel}>{gender}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Sağlık Raporu ve Testler</Text>
        <View style={styles.checkboxGroup}>
          {['Yok', 'Var'].map(status => (
            <TouchableOpacity
              key={status}
              style={[styles.checkbox, selectedHealthReport === status && styles.checkboxSelected]}
              onPress={() => setSelectedHealthReport(status)}
            >
              <View style={styles.innerCheckbox}>
                {selectedHealthReport === status ? <OnSvg /> : <OffSvg />}
              </View>
              <Text style={styles.checkboxLabel}>{status}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.uploadButton}>
          <UploadSvg />
          <Text style={styles.uploadButtonText}>Dosya Yükle</Text>
        </TouchableOpacity>

        <Text style={styles.label}>İlaç Kullanımı</Text>
        <View style={styles.checkboxGroup}>
          {['Var', 'Yok'].map(status => (
            <TouchableOpacity
              key={status}
              style={[styles.checkbox, selectedMedicineUsage === (status === 'Var') && styles.checkboxSelected]}
              onPress={() => setSelectedMedicineUsage(status === 'Var')}
            >
              <View style={styles.innerCheckbox}>
                {selectedMedicineUsage === (status === 'Var') ? <OnSvg /> : <OffSvg />}
              </View>
              <Text style={styles.checkboxLabel}>{status}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Kronik Rahatsızlıklar</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Buraya örnek açıklama yazılacak yönlendirici"
          multiline
          numberOfLines={4}
          value={chronicDiseases}
          onChangeText={setChronicDiseases}
        />

        <View style={styles.checkboxGroup}>
          <TouchableOpacity
            style={styles.consentCheckbox}
            onPress={() => setIsConsentGiven(!isConsentGiven)}
          >
            <View style={styles.innerCheckbox}>
              {isConsentGiven ? <OnSvg /> : <OffSvg />}
            </View>
            <Text style={styles.consentLabel}>Sağlık verilerinin kullanımına izin veriyorum</Text>
          </TouchableOpacity>
        </View>

        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
        ) : (
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Teklif Oluştur</Text>
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
    marginBottom: 20,
    color: '#1F2937',
  },
  label: {
    fontSize: 14,
    marginBottom: 10,
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
  textArea: {
    height: 200,
    borderColor: '#D1D5DB',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  checkboxGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30,
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
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderRadius: 8,
    borderColor: '#D1D5DB',
    borderWidth: 1,
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  uploadButtonText: {
    fontSize: 16,
    color: '#1F2937',
    marginLeft: 10,
  },
  consentCheckbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  consentLabel: {
    fontSize: 16,
    color: '#1F2937',
    marginLeft: 10,
  },
  submitButton: {
    backgroundColor: '#111827',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loader: {
    marginTop: 20,
  },
});

export default TeklifToplaComponents2;
