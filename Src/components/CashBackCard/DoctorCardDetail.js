import React, { useState } from 'react';
import { View, Text, Image, Linking, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Video } from 'expo-av';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const DoctorCardDetail = () => {
  const [activeTab, setActiveTab] = useState('Hakkımda');
  const [showMore, setShowMore] = useState(false);
  const [comment, setComment] = useState('');
  const [showAllComments, setShowAllComments] = useState(false);
  const [comments, setComments] = useState([
    { name: 'Vuslat', text: 'Merhaba uygulamadan çok memnun kaldım' },
    { name: 'Yunus', text: 'Yorum deneme telefon başarılı' },
    { name: 'Yunus', text: 'Telefondan yorum deneme' },
    { name: 'Vuslat', text: 'yorum yazilip gonderildikten sonra uyari mesaji cikiyor ve 3 saniye sonra kayboluyor' },
  ]);

  const handleCommentSubmit = () => {
    setComments([{ name: 'Simsar', text: comment }, ...comments]);
    setComment('');
  };

  const renderContent = () => {
    if (activeTab === 'Hakkımda') {
      return (
        <Text style={styles.description}>
          Estetik, Plastik ve Rekonstrüktif Cerrahi uzmanı Dr. Ercan Demiray, 1968 yılında Ankara’da doğdu.
          Üniversite eğitimini 1992 yılında İstanbul Üniversitesi Cerrahpaşa Tıp Fakültesi’nde tamamladı. Uzmanl ...
          {showMore && (
            <Text>
              ık eğitimi öncesinde Plymouth Derriford Hastanesi Damar Cerrahisi Bölümü’nde eğitim almış, daha sonra İstanbul Tıp Fakültesi’nde Estetik, Plastik ve Rekonstrüktif Cerrahi eğitimi sırasında İngiltere’deki Birmingham Çocuk Hastanesi’nde kraniyofasiyal cerrahi konusunda misafir araştırmacı olarak çalışmıştır. İstanbul Üniversitesi’nden ... 1998 yılında uzmanlık eğitimini tamamladıktan sonra bazı özel hastanelerde Estetik ve Plastik Cerrahı Uzmanı olarak çalıştı. 2004 yılında kendi ...
            </Text>
          )}
          <Text style={styles.more} onPress={() => setShowMore(!showMore)}>
            {showMore ? "Daha Az Gör" : "Daha Fazla Gör"}
          </Text>
        </Text>
      );
    } else if (activeTab === 'Tedaviler') {
      return (
        <View style={styles.treatmentList}>
          {['Meme İmplantları', 'Meme Dikleştirme', 'Meme Küçültme', 'Endoskopik Yüz Germe', 'Sekonder Rinoplasti', 'Açık Rinoplasti', 'Karın Germe', 'Tam Abdominoplasti', 'Lipoabdominoplasti', 'VASER Lipo'].map((treatment, index) => (
            <Text key={index} style={styles.treatmentItem}>{treatment}</Text>
          ))}
        </View>
      );
    } else if (activeTab === 'Yorumlar') {
      const commentsToShow = showAllComments ? comments : comments.slice(0, 4);
      return (
        <View style={styles.commentsSection}>
          <Text style={styles.commentsTitle}>Yorum Ekle</Text>
          <TextInput
            style={styles.commentInput}
            placeholder="Yorum Giriniz..."
            value={comment}
            onChangeText={setComment}
          />
          <TouchableOpacity style={styles.submitButton} onPress={handleCommentSubmit}>
            <Text style={styles.submitButtonText}>Gönder</Text>
          </TouchableOpacity>
          {commentsToShow.map((comment, index) => (
            <View key={index} style={styles.comment}>
              <Text style={styles.commentName}>{comment.name}</Text>
              <Text style={styles.commentText}>{comment.text}</Text>
            </View>
          ))}
          {comments.length > 4 && (
            <Text style={styles.moreComments} onPress={() => setShowAllComments(!showAllComments)}>
              {showAllComments ? "Daha Az Gör" : "Tüm yorumları gör"}
            </Text>
          )}
        </View>
      );
    } else if (activeTab === 'Video') {
      return (
        <View style={styles.videoSection}>
          {['Video başlığı', 'Video başlığı', 'Video başlığı', 'Video başlığı'].map((title, index) => (
            <View key={index} style={styles.videoContainer}>
              <Video
                source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}
                style={styles.video}
                useNativeControls
                resizeMode="contain"
              />
              <Text style={styles.videoTitle}>{title}</Text>
            </View>
          ))}
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <View style={styles.headerText}>
            <Text style={styles.name}>AHMET ERCAN DEMİRAY</Text>
            <Text style={styles.title}>Estetik Cerrah</Text>
          </View>
          <Image 
            source={{uri: 'https://zupsie.vercel.app/static/media/ercan-demiray.4775cc2368d4b347828c.png'}}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.addressSection}>
          <View style={styles.addressHeader}>
            <MaterialIcons name="location-on" size={20} color="#6a1b9a" />
            <Text style={styles.addressTitle}>Açık Adres</Text>
          </View>
          <View style={styles.addressDetails}>
            <Text style={styles.address}>Caddebostan mah. Ogun sok. Şan Apt. No: 1/17 - Kadıköy</Text>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.google.com/maps')}>
              <Image 
                source={{uri: 'https://mapsgen.com/upload/content/content_2020-11-04_13-05-17.png'}}
                style={styles.mapImage}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.website} onPress={() => Linking.openURL('https://ercandemiray.com')}>
          Website : ercandemiray.com
        </Text>
        <View style={styles.socialMedia}>
          <TouchableOpacity onPress={() => Linking.openURL('https://instagram.com')}>
            <FontAwesomeIcon name="instagram" size={20} color="#6a1b9a" style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://facebook.com')}>
            <FontAwesomeIcon name="facebook" size={20} color="#6a1b9a" style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://linkedin.com')}>
            <FontAwesomeIcon name="linkedin" size={20} color="#6a1b9a" style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com')}>
            <FontAwesomeIcon name="twitter" size={20} color="#6a1b9a" style={styles.socialIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.tabs}>
          {['Hakkımda', 'Tedaviler', 'Yorumlar', 'Video'].map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[
                styles.tab,
                activeTab === tab && styles.activeTab,
              ]}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {renderContent()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ffffff',  // Burada arka plan rengi beyaz olarak ayarlandı
    alignItems: 'center',
    padding: 15,
    width: '107%',  
    alignSelf: 'center',
    paddingTop: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    width: '100%',  
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    borderWidth: 0,
    borderColor: '#e0e0e0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  headerText: {
    marginLeft: 15,
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    color: '#777',
  },
  addressSection: {
    marginTop: 20,
  },
  addressHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
  },
  addressTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  addressDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: -15,
    marginBottom: 40,
  },
  address: {
    fontSize: 14,
    color: '#555',
    flex: 1,
  },
  mapImage: {
    width: 100,
    height: 100,
    marginLeft: 10,
    marginTop: -20,
  },
  website: {
    fontSize: 14,
    color: '#000',
    marginTop: 10,
    textAlign: 'center',
  },
  socialMedia: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  socialIcon: {
    marginHorizontal: 15,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 10,
  },
  tab: {
    padding: 10,
  },
  tabText: {
    fontSize: 14,
    color: '#6528f7',
    fontWeight: 'bold',
  },
  activeTab: {
    backgroundColor: '#6528f7',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
    justifyContent: 'center',
  },
  activeTabText: {
    color: '#fff',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginTop: 20,
    lineHeight: 20,
  },
  more: {
    fontSize: 14,
    color: '#6528f7',
    marginTop: 10,
    textAlign: 'center',
  },
  treatmentList: {
    marginTop: 20,
  },
  treatmentItem: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  commentsSection: {
    marginTop: 20,
  },
  commentsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  commentInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: '#6528f7',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  comment: {
    marginBottom: 10,
  },
  commentName: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#6528f7',
    marginBottom: 5,
  },
  commentText: {
    color: '#555',
  },
  moreComments: {
    color: '#6528f7',
    marginTop: 20,
    textAlign: 'center',
  },
  videoSection: {
    marginTop: 20,
  },
  videoContainer: {
    marginBottom: 20,
  },
  video: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  videoTitle: {
    fontSize: 16,
    color: '#555',
    marginTop: 10,
  },
});

export default DoctorCardDetail;