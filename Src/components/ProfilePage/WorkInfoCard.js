import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const WorkInfoCard = () => {
  const [workType, setWorkType] = useState('');
  const [salaryDay, setSalaryDay] = useState('');
  const [workPlace, setWorkPlace] = useState('');
  const [profession, setProfession] = useState('');
  const [title, setTitle] = useState('');

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Çalışma Bilgilerim</Text>
      <View style={styles.infoRow}>
        <Text style={styles.label}>Çalışma Tipi</Text>
        <TextInput
          style={styles.value}
          value={workType}
          onChangeText={setWorkType}
          placeholder="Çalışma tipinizi girin"
          textAlign="left"
        />
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.label}>Maaş Günü</Text>
        <TextInput
          style={styles.value}
          value={salaryDay}
          onChangeText={setSalaryDay}
          placeholder="Maaş gününüzü girin"
          textAlign="left"
        />
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.label}>Çalıştığı İş yeri Adı</Text>
        <TextInput
          style={styles.value}
          value={workPlace}
          onChangeText={setWorkPlace}
          placeholder="Çalıştığınız iş yeri adını girin"
          textAlign="left"
        />
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.label}>Meslek</Text>
        <TextInput
          style={styles.value}
          value={profession}
          onChangeText={setProfession}
          placeholder="Mesleğinizi girin"
          textAlign="left"
        />
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.label}>Ünvan</Text>
        <TextInput
          style={styles.value}
          value={title}
          onChangeText={setTitle}
          placeholder="Ünvanınızı girin"
          textAlign="left"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f7f9fc',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    marginHorizontal: 10,
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e6e7e8',
  },
  label: {
    fontSize: 16,
    color: '#333',
    flex:1,
  },
  value: {
    fontSize: 16,
    color: '#666',
    flex: 1,
    paddingHorizontal: 10,
    textAlign: 'left',
  },
});

export default WorkInfoCard;
