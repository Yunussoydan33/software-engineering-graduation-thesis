import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';

export default function CashBackVideoCard() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const images = [
    'https://zupsie.vercel.app/static/media/card4.2d1eeb733a7b2a2929ea.jpg',
    'https://zupsie.vercel.app/static/media/card1.836f165af44f3142fd88.jpg',
    'https://zupsie.vercel.app/static/media/card5.125adb0874e3ac7eba31.jpg',
    'https://zupsie.vercel.app/static/media/card3.11d74c8172284c762f8f.jpg',
  ];

  const text = `Selam herkese! Ben Arda, uzun yıllardır bir makyaj eğitmeniyim ve güzellik dünyasında daima yeni şeyler öğrenmeye açık birisiyim. Ancak, son zamanlarda dudaklarımda küçük bir değişiklik yapma fikri beni büyülemeye başladı. Daha dolgun ve çekici dudaklara sahip olmak istedim.
  ---
  Bu serüvenim, kendi doktorum Ercan Bey ile tanıştığımda başladı. Ercan Bey, bir plastik cerrahi uzmanı olarak hem global hem de Türkiye'de tanınmış bir isimdir. Kendisi sayısız hastaya başarılı tedaviler yapmış ve bu alandaki en iyi uzmanlardan biri olarak kabul ediliyor.
  ---
  Ercan Bey, muhteşem dudaklar yaratma konusundaki deneyimiyle ünlüydü. Onunla tanıştığımızda, beni dudak dolgusu işlemi hakkında ayrıntılı bir şekilde bilgilendirdi ve doğal bir görünüm elde etmenin mümkün olduğunu gösterdi.
  ---
  Karar vermek zor olmadı çünkü kendime ve Ercan Bey'e güvendim. İşlem sırasında, Ercan Bey harika bir iş çıkardı ve sonuçtan çok mutlu kaldım. Dudaklarımda hafif bir değişiklik, beni daha güzel ve özgüvenli hissettirdi. Ercan Bey, bu işlemi gerçekleştirirken doğal bir sonuç elde etti ve ben sadece kendim gibi görünmek istedim.
  ---
  Bu değişim, içimde bir coşku yarattı. Neden bu güzellik ve özgüveni sadece kendime saklasın ki? İşte burada devreye girdim. Kendi takipçilerime ve arkadaşlarıma bu fırsatı sunmak istedim. Oluşturduğum özel bir grup, alanında uzman olan Ercan Bey'in yönlendirmesiyle bu değişimi yaşamak isteyen insanlar için harika bir fırsat sunuyor.
  ---
  Ve işte bu fırsatla birlikte geliyor: Grubumuzda yer alan 20 kişi, bu fırsattan yararlanmaya karar verdiklerinde, her birimize %10 cashback kazanma fırsatı verilecek. Evet, yanlış duymadınız, dudak dolgusu işlemi sonrası %10 cashback kazanma şansına sahip olabilirsiniz!
  ---
  Daha da güzeli, bu yolculuğu toplu bir şekilde yaşayacağız. İşte burası gerçekten özel: Grubumuz, tedavi sonrası bir araya gelip bir kahve içmeyi planlıyoruz. Hem dudaklarımızın muhteşemliğini kutlamak hem de birbirimizi daha yakından tanımak için bir fırsat.
  ---
  Bu fırsat, sadece benim değil, aynı zamanda takipçilerimin ve arkadaşlarımın da güzelleşmeleri için bir yolculuk başlatma fırsatı sunuyor. Daha fazla güzellik ve özgüven arayan herkesi bu heyecan verici fırsatı kaçırmamaya davet ediyorum. Birlikte muhteşem dudaklara sahip olabiliriz!
  ---
  Siz de bu heyecan verici değişim yolculuğuna katılmak ister misiniz? Daha fazla bilgi almak ve bu fırsattan yararlanmak için benimle iletişime geçebilirsiniz. İşte bu güzellik koçu olarak yaşadığım heyecan verici özgüven yolculuğunun başlangıcı!`;

  const textPreview = text.split('---').slice(0, 4).join('\n\n');

  return (
    <View style={styles.container}>
      <Video
        source={{ uri: 'https://zupsie.vercel.app/static/media/cardVideo.60e32305ba2c373ed187.mp4' }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        isLooping
        useNativeControls
        style={styles.video}
      />
      <View style={styles.imagesContainer}>
        {images.map((image, index) => (
          <View key={index} style={styles.imageWrapper}>
            <Image source={{ uri: image }} style={styles.image} />
          </View>
        ))}
      </View>
      <Text style={styles.title}>Arda ve DR.Ercan ile Özgüven Yolculuğu</Text>
      <Text style={styles.paragraph}>{showMore ? text : textPreview}</Text>
      <TouchableOpacity onPress={toggleShowMore}>
        <Text style={styles.showMore}>
          {showMore ? 'Daha Az Göster' : 'Daha Fazla Göster'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    padding: 16,
    marginVertical: 16,
    width: '100%', // Genişlik yüzde olarak ayarlandı
    alignSelf: 'center',
  },
  video: {
    width: '100%',
    height: 500, // Videonun yüksekliği sabitlendi
    borderRadius: 10,
  },
  imagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  imageWrapper: {
    width: '48%', // İki resmin yan yana gelmesi için genişliği yüzde olarak ayarladık
    marginBottom: 16, // Alt alta resimler arasında boşluk bırakmak için
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    color: 'purple',
    marginVertical: 16,
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 16,
    color: '#555',
    lineHeight: 20, // Bu değeri azaltarak paragraf aralarını sıkılaştırdık
  },
  showMore: {
    color: 'blue',
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },
});

