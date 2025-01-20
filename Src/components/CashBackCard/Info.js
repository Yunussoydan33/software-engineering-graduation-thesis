import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';

const Info = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.timeline}>
        <View style={styles.event}>
          <View style={styles.circle} />
          <Text style={styles.date}>Nisan{'\n'}27.04.2024</Text>
          <View style={styles.details}>
            <Text style={styles.title}>Danışma ve İlk Değerlendirme</Text>
            <Text style={styles.description}>
              Arda ve grubun diğer üyeleri, Ercan Bey ile bir araya gelir ve dudak dolgusu hakkında daha fazla bilgi alır. {'\n\n'}
              Her katılımcının özel ihtiyaçları ve beklentileri değerlendirilir. {'\n\n'}
              Doktor, her bir katılımcının işlem öncesi fotoğraflarını çeker ve işlem sonrası sonuçları daha iyi karşılaştırabilmek için kaydeder.
            </Text>
          </View>
        </View>

        <View style={styles.event}>
          <View style={styles.circle} />
          <Text style={styles.date}>Mayıs{'\n'}17.05.2024</Text>
          <View style={styles.details}>
            <Text style={styles.title}>İşlem ve Tedavi</Text>
            <Text style={styles.description}>
              Her bir katılımcı, doktor Ercan Bey tarafından dudak dolgusu işlemine alınır. {'\n\n'}
              İşlem, özenle ve profesyonelce gerçekleştirilir. {'\n\n'}
              Doktor, dudakları daha dolgun ve doğal bir şekilde şekillendirir. {'\n\n'}
              Her bir katılımcı, işlem sonrası bakım ve talimatlar alır.
            </Text>
          </View>
        </View>

        <View style={styles.event}>
          <View style={styles.circle} />
          <Text style={styles.date}>Haziran{'\n'}10.06.2024</Text>
          <View style={styles.details}>
            <Text style={styles.title}>Sonuçların Kutlanması ve Toplu Buluşma</Text>
            <Text style={styles.description}>
              İşlem sonrası dönemde, katılımcılar grupla bir araya gelir ve sonuçları kutlar. {'\n\n'}
              Toplu buluşma, bir kahve içme fırsatı sunar ve grup üyelerinin birbirini daha yakından tanımasına olanak tanır. {'\n\n'}
              Katılımcılar, dudaklarının muhteşemliğini paylaşır ve özgüvenlerini artırır. {'\n\n'}
              Ercan Bey, her bir katılımcının işlem öncesi ve sonrası fotoğraflarını sunar, böylece sonuçları gözler önüne serer.
            </Text>
          </View>
        </View>

        <View style={styles.event}>
          <View style={styles.circle} />
          <Text style={styles.date}>Aralık{'\n'}11.12.2024</Text>
          <View style={styles.details}>
            <Text style={styles.title}>Sonuçların Paylaşılması ve Cashback Kazanımı</Text>
            <Text style={styles.description}>
              Katılımcılar, işlem sonuçlarını ve özgüvenlerindeki artışı sosyal medya ve diğer platformlarda paylaşır. {'\n\n'}
              Grubun diğer üyeleri, bu deneyimi gördüklerinde ilham alır ve güzellik yolculuklarına başlamak isteyebilir. {'\n\n'}
              Her katılımcı, %10 cashback kazanır ve kazancını kutlar.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    width: '100%',  
    alignSelf: 'center',
    
  },
  timeline: {
    borderLeftWidth: 2,
    borderLeftColor: '#8E44AD',
    paddingLeft: 20,
    marginVertical: 20,
  },
  event: {
    marginBottom: 40,
    position: 'relative',
  },
  circle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#8E44AD',
    position: 'absolute',
    left: -29,
    top: 0,
  },
  date: {
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#8E44AD',
  },
  details: {
    marginLeft: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
});

export default Info;
