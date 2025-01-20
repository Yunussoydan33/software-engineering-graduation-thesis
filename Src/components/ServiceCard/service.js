import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const services = [
  {
    id: 1, name: 'Ağız Sağlığı', details: [
      { id: 1, name: 'Diş implantları', price: '₺1.500', revenue: '₺100' },
      { id: 2, name: 'Diş telleri ve ortodontik işlemler', price: '₺3.500', revenue: '₺500' },
      { id: 3, name: 'Diş beyazlatma ve estetik diş hekimliği işlemleri', price: '₺5.500', revenue: '₺2.500' },
      { id: 4, name: 'Köprü çalışmaları', price: '₺10.500', revenue: '₺7.000' },
      { id: 5, name: 'Diş telleri ve ortodontik işlemler', price: '₺3.500', revenue: '₺500' },
      { id: 6, name: 'Diş koruma tedavileri', price: '₺3.500', revenue: '₺500' },
      { id: 7, name: 'Oral cerrahi işlemler', price: '₺3.500', revenue: '₺500' },
      { id: 8, name: 'Periodontal tedaviler', price: '₺6.500', revenue: '₺2.700' }
    ]
  },
  {
    id: 2, name: 'Kozmetik Plastik Cerrahi Operasyonlar', details: [
      { id: 1, name: 'Yüz germe (yüz liftingi)', price: '₺8.000', revenue: '₺5.000' },
      { id: 2, name: 'Rinoplasti (burun estetiği)', price: '₺6.500', revenue: '₺4.000' },
      { id: 3, name: 'Göğüs büyütme veya küçültme', price: '₺10.000', revenue: '₺7.500' },
      { id: 4, name: 'Liposuction (yağ alma)', price: '₺7.500', revenue: '₺3.000' },
      { id: 5, name: 'Karın germe (karın tuck)', price: '₺9.000', revenue: '₺6.000' },
      { id: 6, name: 'Blefaroplasti (göz kapağı ameliyatı)', price: '₺6.000', revenue: '₺4.500' },
      { id: 7, name: 'Kepçe kulak düzeltilmesi', price: '₺4.500', revenue: '₺2.000' },
      { id: 8, name: 'Kepçe dudak düzeltilmesi', price: '₺4.000', revenue: '₺1.500' },
      { id: 9, name: 'Saç ekimi', price: '₺6.500', revenue: '₺2.000' }
    ]
  },
  {
    id: 3, name: 'Kozmetik İşlemler', details: [
      { id: 1, name: 'Botoks enjeksiyonları', price: '₺3.000', revenue: '₺2.000' },
      { id: 2, name: 'Dolgu maddeleri enjeksiyonları', price: '₺2.500', revenue: '₺1.500' },
      { id: 3, name: 'Lazer cilt yenileme', price: '₺4.000', revenue: '₺2.000' },
      { id: 4, name: 'Kimyasal peeling', price: '₺3.500', revenue: '₺2.000' },
      { id: 5, name: 'Dövme kaldırma', price: '₺4.500', revenue: '₺3.000' },
      { id: 6, name: 'Lazer tüy alma', price: '₺2.500', revenue: '₺1.000' },
      { id: 7, name: 'Saç dökülmesi tedavileri', price: '₺6.000', revenue: '₺4.500' }
    ]
  },
];

const Service = ({ onServicePress }) => {
  const [expandedServiceId, setExpandedServiceId] = useState(null);

  const toggleServiceDetails = (serviceId) => {
    setExpandedServiceId(expandedServiceId === serviceId ? null : serviceId);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Hizmet</Text>
        <Text style={styles.headerText}>Ciro</Text>
      </View>
      {services.map((service) => (
        <View key={service.id}>
          <TouchableOpacity
            style={[
              styles.serviceRow,
              expandedServiceId === service.id && styles.selectedServiceRow
            ]}
            onPress={() => toggleServiceDetails(service.id)}
          >
            <Text
              style={[
                styles.serviceText,
                expandedServiceId === service.id && styles.selectedServiceText
              ]}
            >
              {service.name}
            </Text>
            <Ionicons
              name={expandedServiceId === service.id ? "chevron-up" : "chevron-down"}
              size={24}
              color={expandedServiceId === service.id ? "white" : "black"}
            />
          </TouchableOpacity>
          {expandedServiceId === service.id && (
            <View style={styles.detailsContainer}>
              {service.details.map(detail => (
                <TouchableOpacity 
                  key={detail.id} 
                  style={styles.detailRow}
                  onPress={() => onServicePress({ name: detail.name, limit: detail.price, totalLimit: detail.revenue })}
                >
                  <Text style={styles.detailText}>{detail.name}</Text>
                  <View style={styles.priceContainer}>
                    <Text style={styles.detailText}>{detail.price}</Text>
                    <Text style={styles.detailText}>{detail.revenue}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    marginTop: 20,
  },
  header: {
    backgroundColor: '#6200EE',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
  },
  serviceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  selectedServiceRow: {
    backgroundColor: '#6200EE',
  },
  serviceText: {
    fontSize: 16,
    color: 'black',
  },
  selectedServiceText: {
    color: 'white',
  },
  detailsContainer: {
    paddingHorizontal: 15,
    backgroundColor: 'white',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  detailText: {
    fontSize: 14,
    flex: 1,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 120,
  },
});

export default Service;
