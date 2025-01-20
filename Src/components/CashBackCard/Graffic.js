import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const Graffic = () => {
  const screenWidth = Dimensions.get('window').width;

  const data = {
    labels: [
      'İlk İşlem Yılı', 
      'İkinci İşlem Yılı', 
      'Üçüncü İşlem Yılı', 
      'Dördüncü İşlem Yılı', 
      'Beşinci İşlem Yılı'
    ],
    datasets: [
      {
        data: [9000, 14000, 21600, 30240, 54432],
      }
    ]
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dudak Dolgusu İşlemi Maliyeti</Text>
      <Text style={styles.subtitle}>5 Yıl Boyunca Fiyat Artışı Tahmini</Text>
      
      <BarChart
        style={styles.chart}
        data={data}
        width={screenWidth * 0.8}
        height={300}
        yAxisLabel=""
        chartConfig={{
          backgroundColor: '#FFFFFF',
          backgroundGradientFrom: '#FFFFFF',
          backgroundGradientTo: '#FFFFFF',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(142, 68, 173, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16
          },
        }}
        verticalLabelRotation={-25} // Az bir eğim ile yazıları sola kaydırma
        xLabelsOffset={-5} // X ekseni etiketlerini biraz daha sola kaydırma
        yLabelsOffset={10} // X ekseni etiketlerini çok az aşağıya kaydırma
        showBarTops={true}
        fromZero={true}
      />

      <Text style={styles.description}>
        Bu grafik, dudak dolgusu işlemi maliyetinin gelecekteki beş yıl içindeki tahmini artışını göstermektedir. Fiyatlar, yıllık ürün hizmet ve tedariki ile değişen ortalama bir fiyat artışı ve döviz kuru artışı dikkate alınarak hesaplanmıştır.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 16,
    textAlign: 'center',
  },
  chart: {
    borderRadius: 16,
  },
  description: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    marginTop: 16,
    textAlign: 'center',
  },
});

export default Graffic;
