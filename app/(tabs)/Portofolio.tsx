import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking, ScrollView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const PortfolioScreen = () => {
  const openCertificate = () => {
    Linking.openURL('#'); // Untuk Serti
  };

  const openLinkedIn = () => {
    Linking.openURL('https://www.linkedin.com/in/muhammad-samsu-hidayattullah'); // Linkedin
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Image
        source={require('@/assets/images/sampul.jpg')} // Sampul
        style={styles.backgroundImage}
      />
      <View style={styles.profileContainer}>
        <Image
          source={require('@/assets/images/Polio.jpg')} // Profil dayat
          style={styles.profileImage}
        />
        <Text style={styles.name}>Muhammad Samsu Hidayattullah</Text>
        <Text style={styles.bio}>
          Mahasiswa Universitas Bina Darma jurusan Teknik Informatika aktif dalam pengembangan Website dan desain UI/UX.
        </Text>
      </View>

    {/* Section: Pengalaman */}
    <Text style={styles.sectionTitle}>Pengalaman</Text>
      <View style={styles.sectionContainer}>
          <Image
            source={require('@/assets/icons/Maxy.png')} // Ganti dengan ikon sertifikat
            style={styles.certIcon}
          />
        <Text style={styles.itemTitle}>Maxy Academy</Text>
        <Text style={styles.itemText}>Anggota Studi Independen (2024 - Sekarang)</Text>
      </View>
      <View style={styles.sectionContainer}>
          <Image
            source={require('@/assets/icons/Kominfo.png')} // Ganti dengan ikon sertifikat
            style={styles.certIcon}
          />
        <Text style={styles.itemTitle}>Dinas Komunikasi dan Informatika Kota Palembang</Text>
        <Text style={styles.itemText}>UI/UX Designer (Feb 2024 - Juni 2024)</Text>
      </View>
      <View style={styles.sectionContainer}>
          <Image
            source={require('@/assets/icons/photo.png')} // Ganti dengan ikon sertifikat
            style={styles.certIcon}
          />
        <Text style={styles.itemTitle}>Digital Photo Studio</Text>
        <Text style={styles.itemText}>Teknik Informatika (Jan 2020 - Apr 2024)</Text>
      </View>

      {/* Section: Pendidikan */}
      <Text style={styles.sectionTitle}>Pendidikan</Text>
      
      <View style={styles.sectionContainer}>
        <Text style={styles.itemTitle}>Universitas Bina Darma</Text>
        <Text style={styles.itemText}>Teknik Informatika (2021 - Sekarang)</Text>
      </View>
      
      <View style={styles.sectionContainer}>
        <Text style={styles.itemTitle}>SMK ARINDA PALEMBANG</Text>
        <Text style={styles.itemText}>Jurusan Multimedia (2018 - 2021)</Text>
      </View>
      
      {/* Section: Sertifikat */}
      <Text style={styles.sectionTitle}>Sertifikat</Text>
      <View style={styles.sectionContainer}>
        <TouchableOpacity style={styles.certItem} onPress={openCertificate}>
          <Image
            source={require('@/assets/icons/palkom.png')} // Ganti dengan ikon sertifikat
            style={styles.certIcon}
          />
          <Text style={styles.certText}>Kursus Komputer Palcomtech</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.certItem} onPress={openCertificate}>
          <Image
            source={require('@/assets/icons/cisco.png')} // Ganti dengan ikon sertifikat
            style={styles.certIcon}
          />
          <Text style={styles.certText}>CCNAv7 : Switching,Routing,and Wireless Essensials</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.certItem} onPress={openCertificate}>
          <Image
            source={require('@/assets/icons/cisco.png')} // Ganti dengan ikon sertifikat
            style={styles.certIcon}
          />
          <Text style={styles.certText}>CCNAv7 : Introduction to Network</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.certItem} onPress={openCertificate}>
          <Image
            source={require('@/assets/icons/bnsp.png')} // Ganti dengan ikon sertifikat
            style={styles.certIcon}
          />
          <Text style={styles.certText}>Junior Web Development</Text>
        </TouchableOpacity>
      </View>

      {/* Section: Skills */}
      <Text style={styles.skillsTitle}>Skills:</Text>
      <View style={styles.skillsContainer}>
        <Image source={require('@/assets/icons/dayatHTML.png')} style={styles.skillIcon} />
        <Image source={require('@/assets/icons/DayatCSS.png')} style={styles.skillIcon} />
        <Image source={require('@/assets/icons/DayatJS.png')} style={styles.skillIcon} />
        <Image source={require('@/assets/icons/dayatReact.png')} style={styles.skillIcon} />
        <Image source={require('@/assets/icons/dayatnode.png')} style={styles.skillIcon} />
      </View>

      {/* Section: Projects */}
      <Text style={styles.projectTitle}>Proyek Saya:</Text>
      <View style={styles.projectContainer}>
        <TouchableOpacity style={styles.projectItem}>
          <Image
            source={require('@/assets/images/portopolio.jpg')} // Ganti dengan URL atau sumber gambar proyek
            style={styles.projectImage}
          />
          <Text style={styles.projectText}>Website Fortopolio</Text>
          <Text style={styles.projectDescription}>Website yang digunakan untuk menambah informasi pada seseorang.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.projectItem}>
          <Image
            source={require('@/assets/images/dayat66.jpg')} // Ganti dengan URL atau sumber gambar proyek
            style={styles.projectImage}
          />
          <Text style={styles.projectText}>Websiite Ahliskill</Text>
          <Text style={styles.projectDescription}>Sistem manajemen konten untuk blog pribadi yang responsif dan mudah digunakan.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.projectItem}>
          <Image
            source={require('@/assets/images/jelajahdesa.png')} // Ganti dengan URL atau sumber gambar proyek
            style={styles.projectImage}
          />
          <Text style={styles.projectText}>jelajahDesa</Text>
          <Text style={styles.projectDescription}>Website yang dibuat untuk membantu warga leunimalang dalam mengembangkan Umkm dan Wisata  </Text>
        </TouchableOpacity>
      </View>

      {/* Section: Link to LinkedIn */}
      <TouchableOpacity style={styles.linkButton} onPress={openLinkedIn}>
        <Text style={styles.linkText}>Lihat LinkedIn Saya</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  backgroundImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
  },
  profileContainer: {
    marginTop: 180,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 15,
    shadowColor: '#28A745',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    width: width * 0.9,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: '#28A745',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign:'center'
  },
  bio: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#333',
  },
  sectionContainer: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
    shadowColor: '#28A745',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 2,
    borderColor: '#28A745', 
    borderWidth: 1, 
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#28A745',
  },
  itemText: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  certItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  certIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  certText: {
    fontSize: 16,
    color: '#333',
  },
  skillsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  skillsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  skillIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
  projectTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  projectContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  projectItem: {
    backgroundColor: '#fff', 
    borderRadius: 10, 
    padding: 10,
    width: '30%',
    alignItems: 'center',
    borderColor: '#28A745',
    borderWidth: 1, 
  },
  projectImage: {
    width: '100%',
    height: 60,
    borderRadius: 5,
    marginBottom: 5,
  },
  projectText: {
    color: '#000',
    fontSize: 14,
    textAlign: 'center',
  },
  projectDescription: {
    color: '#',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
  },
  linkButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    borderColor: '#28A745', 
    borderWidth: 1,
  },
  linkText: {
    color: '#000',
    fontSize: 16,
    
  },
});

export default PortfolioScreen;
