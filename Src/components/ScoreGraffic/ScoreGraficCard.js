import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Rect, G, Text as SvgText } from 'react-native-svg';

const ScoreGraficCard = () => {
  const data = [
    40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 155, 150, 145, 140, 135, 
    130, 120, 110, 100, 90, 82, 70, 60, 50, 40, 30, 20, // 30 veri, 24. veri %82
  ];

  const barWidth = 8.5;  // Çubuk genişliğini ayarladım
  const barSpacing = 3;  // Çubuklar arasındaki boşluğu ayarladım
  const chartHeight = 160;  // Grafik yüksekliği
  const svgWidth = data.length * (barWidth + barSpacing) + 60; // SVG genişliği

  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        Tüm Sağlık Elçilerinin <Text style={styles.boldText}>%82</Text>'sinden daha öndesiniz.
      </Text>
      <Svg height={chartHeight + 60} width={svgWidth} style={styles.svgContainer}>
        <G y={chartHeight + 10}>
          {/* Sol tarafta dikey yazıyı tam sola hizalamak için */}
          <SvgText
            x={110}  // Metni daha sola kaydırdım
            y={chartHeight / 15}  // Yatay olarak ortalanmış
            fill="#333"
            fontSize="12"
            fontWeight="300"  // 'light' font ağırlığı
            transform="rotate(-90)"  // Dikey hale getirme
            textAnchor="middle"
          >
            % Tüm Elçiler
          </SvgText>
          {data.map((value, index) => (
            <Rect
              key={index}
              x={index * (barWidth + barSpacing) } // Çubukların x koordinatını biraz daha sağa kaydırdım
              y={-value}
              width={barWidth}
              height={value}
              fill={index === 23 ? '#FFA500' : '#5D9CEC'} // 24. çubuk turuncu (#FFA500)
            />
          ))}
          <Rect
            x={23 * (barWidth + barSpacing) } // %82 çubuğu konumu
            y={-82 - 20}
            width={40}
            height={20}
            fill="black"
            rx={5}
            ry={5}
          />
          <SvgText
            x={23 * (barWidth + barSpacing) +20} // %82 etiketi konumu
            y={-82 - 5}
            fill="white"
            fontSize="12"
            fontWeight="bold"
            textAnchor="middle"
          >
            %82
          </SvgText>
        </G>
      </Svg>
      <Text style={[styles.xAxisLabel, { marginTop: -20 }]}> 
        Skor
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    marginHorizontal: 10,
    alignSelf: 'center',
    width: '90%',
    marginTop: 20,
  },
  title: {
    fontSize: 12,
    fontWeight: '300',  // 'light' font ağırlığı
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  boldText: {
    color: '#000',  // Tam siyah renk
    fontWeight: 'bold',
  },
  xAxisLabel: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
});

export default ScoreGraficCard;
