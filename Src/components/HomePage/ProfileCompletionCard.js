import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileCompletionCard = () => {
  const navigation = useNavigation();
  const personalInfoProgress = 40;
  const contactInfoProgress = 30;

  return (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ProfilePage')}>
      <Text style={styles.title}>Profilini Tamamla</Text>
      <Text style={styles.subtitle}>Skorunuzu arttırmak için profilinizi tamamlayın</Text>

      <View style={styles.progressContainer}>
        <Text style={styles.progressLabel}>Kişisel Bilgilerim</Text>
        <View style={styles.progressBarBackground}>
          <View style={[styles.progressBar, { width: `${personalInfoProgress}%` }]} />
          <Text style={styles.progressText}>%{personalInfoProgress}</Text>
        </View>
      </View>

      <View style={styles.progressContainer}>
        <Text style={styles.progressLabel}>İletişim Bilgileri</Text>
        <View style={styles.progressBarBackground}>
          <View style={[styles.progressBar, { width: `${contactInfoProgress}%` }]} />
          <Text style={styles.progressText}>%{contactInfoProgress}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
 card: {
  backgroundColor: '#f7f9fc',
  borderRadius: 10,
  padding: 20,
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  progressContainer: {
    marginBottom: 15,
  },
  progressLabel: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  progressBarBackground: {
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFF2CC',
    overflow: 'hidden',
    position: 'relative',
  },
  progressBar: {
    height: '100%',
    borderRadius: 20,
    backgroundColor: '#FFD966',
    position: 'absolute',
  },
  progressText: {
    position: 'absolute',
    top: 10,
    left: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default ProfileCompletionCard;
