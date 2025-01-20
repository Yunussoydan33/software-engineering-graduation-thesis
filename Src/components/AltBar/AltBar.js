import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import HomePageSvg from '../../assets/Svg/HomePageSvg';
import AppointmentsSvg from '../../assets/Svg/AppointmentsSvg';
import MessageSvg from '../../assets/Svg/MessageSvg';
import KesfetSvg from '../../assets/Svg/KesfetSvg';
import PlusSvg from '../../assets/Svg/PlusSvg';
import TeklifToplaSvg from '../../assets/Svg/TeklifToplaSvg';
import SearchDoctorSvg from '../../assets/Svg/SearchDoctorSvg';
import { useNavigation } from '@react-navigation/native';

const AltBar = () => {
  const navigation = useNavigation();
  const [showAdditionalButtons, setShowAdditionalButtons] = useState(false);
  const rotation = useState(new Animated.Value(0))[0];

  const handlePlusPress = () => {
    Animated.timing(rotation, {
      toValue: showAdditionalButtons ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    setShowAdditionalButtons(!showAdditionalButtons);
  };

  const rotateInterpolate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '45deg'], 
  });

  const animatedStyle = {
    transform: [{ rotate: rotateInterpolate }],
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('HomePage')}>
        <HomePageSvg fill="#2A2A2A" width={28} height={28} />
        <Text style={styles.text}>Özet</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('MessagePage')}>
        <MessageSvg fill="#2A2A2A" width={28} height={28} />
        <Text style={styles.text}>Mesajlar</Text>
      </TouchableOpacity>

      <View style={styles.centerItem}>
        <TouchableOpacity style={styles.centerButton} onPress={handlePlusPress}>
          <Animated.View style={animatedStyle}>
            <PlusSvg />
          </Animated.View>
        </TouchableOpacity>
        {showAdditionalButtons && (
          <View style={styles.additionalButtonsContainer}>
            <TouchableOpacity 
              style={[styles.additionalButton, styles.blackButton, styles.firstButton]} 
              onPress={() => navigation.navigate('TeklifToplaPage')}
            >
              <TeklifToplaSvg fill="#FFFFFF" />
              <Text style={styles.additionalButtonText}>Teklif Topla</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.additionalButton, styles.blackButton, styles.secondButton]} 
              onPress={() => navigation.navigate('AppointmentPage')} 
            >
              <SearchDoctorSvg fill="#FFFFFF" />
              <Text style={styles.additionalButtonText}>Doktor Ara</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('AppointmentPage')}>
        <AppointmentsSvg fill="#2A2A2A" width={28} height={28} />
        <Text style={styles.text}>Randevular</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('DiscoverPage')}>
        <KesfetSvg fill="#2A2A2A" width={28} height={28} />
        <Text style={styles.text}>Keşfet</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 17,
    borderTopWidth: 1,
    borderColor: '#E5E5E5',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 20,
  },
  item: {
    alignItems: 'center',
    flex: 1,
  },
  text: {
    color: '#2A2A2A',
    fontSize: 12,
    marginTop: 5,
  },
  centerItem: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    flex: 1,
  },
  centerButton: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: '#363842',  
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -60,  
  },
  additionalButtonsContainer: {
    position: 'absolute',
    top: -80, 
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    zIndex: 1,
  },
  additionalButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 25,  
    borderRadius: 20,
    position: 'absolute',
    height: 50,  
  },
  blackButton: {
    backgroundColor: '#363842',
  },
  additionalButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    marginLeft: 10,
    lineHeight: 18,  
  },
  firstButton: {
    transform: [{ translateX: -100 }, { translateY: 0 }], 
  },
  secondButton: {
    transform: [{ translateX: 100 }, { translateY: 0 }], 
  },
});

export default AltBar;
