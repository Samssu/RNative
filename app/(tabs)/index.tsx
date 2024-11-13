import { Image, StyleSheet, View, TouchableOpacity, ImageBackground } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#ffff', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/dayat66.jpg')} 
          style={styles.companyLogo}
          resizeMode="cover"
          borderRadius={20}
        />
      }
    >

      {/* Section: Welcome & Company Overview */}
      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="title">Welcome to DayatCompany</ThemedText>
        <ThemedText style={styles.descriptionText}>
        <ThemedText type="defaultSemiBold">DayatCompany</ThemedText>, Perusahaan yang bergerak di bidang teknologi dan inovasi, berdedikasi untuk menyediakan solusi yang efektif dan efisien untuk berbagai kebutuhan bisnis. Kami percaya bahwa teknologi adalah kunci untuk mencapai kesuksesan dan inovasi dalam dunia yang terus berkembang ini.
        </ThemedText>
      </ThemedView>

      {/* Hero Section with Background Image */}
      <ThemedView style={styles.heroSection}>
        <ImageBackground
          source={require('@/assets/images/Gedung.jpg')} // Ganti dengan gambar latar belakang Anda
          style={styles.backgroundImage} // Tambahkan style untuk gambar latar belakang
          resizeMode="cover"
        >
          <ThemedText style={styles.heroTitle} type="title">
            Innovate. Create. Lead.
          </ThemedText>
          <TouchableOpacity style={styles.ctaButton}>
            <ThemedText type="defaultSemiBold" style={styles.ctaText}>Gaskan</ThemedText>
          </TouchableOpacity>
        </ImageBackground>
      </ThemedView>

      

      {/* Section: Our Services with Icons */}
      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="subtitle">Layanan Kami</ThemedText>
        <View style={styles.servicesList}>
          <View style={styles.serviceItem}>
            <Image source={require('@/assets/icons/Web Dev.png')} style={styles.serviceIcon} />
            <ThemedText>Web Development</ThemedText>
          </View>
          <View style={styles.serviceItem}>
            <Image source={require('@/assets/icons/mobileapp.png')} style={styles.serviceIcon} />
            <ThemedText>Mobile App Development</ThemedText>
          </View>
          <View style={styles.serviceItem}>
            <Image source={require('@/assets/icons/digital.png')} style={styles.serviceIcon} />
            <ThemedText>Digital Marketing</ThemedText>
          </View>
          <View style={styles.serviceItem}>
            <Image source={require('@/assets/icons/IT.png')} style={styles.serviceIcon} />
            <ThemedText>IT Consulting</ThemedText>
          </View>
        </View>
      </ThemedView>

      {/* Section: Testimonials */}
      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="subtitle">Apa Kata Pelanggan Kami?</ThemedText>
        <ThemedText style={styles.testimonialText}>
          "DayatCompany sangat Bagus dan juga sangat membatu saya melakukan pekerjaan ini."
        </ThemedText>
        <ThemedText style={styles.testimonialAuthor}>- J.T Rizky</ThemedText>
      </ThemedView>

      {/* Section: Contact Us with CTA */}
      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="subtitle">Hubungi Kami</ThemedText>
        <ThemedText style={styles.descriptionText}>
          Contact us today at <ThemedText type="defaultSemiBold">info@DayatCompany.com</ThemedText> Atau Kunjungi Kantor Kami secara Langsung
        </ThemedText>
        <TouchableOpacity style={styles.contactButton}>
          <ThemedText type="defaultSemiBold" style={styles.contactButtonText}>Kontak Kami</ThemedText>
        </TouchableOpacity>
      </ThemedView>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  heroSection: {
    height: 300, // Sesuaikan tinggi sesuai kebutuhan
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // Menghindari elemen keluar dari batas
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'center', // Agar konten berada di tengah
    alignItems: 'center',
  },
  heroTitle: {
    color: '#fff', // Sesuaikan warna teks
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 16,
  },
  ctaButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  ctaText: {
    color: '#000',
    fontSize: 16,
  },
  companyLogo: {
    height: 200,
    width: '100%',
    alignSelf: 'center',
  },
  sectionContainer: {
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  descriptionText: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
  },
  servicesList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  serviceItem: {
    alignItems: 'center',
    width: '22%',
  },
  serviceIcon: {
    height: 50,
    width: 50,
    marginBottom: 8,
  },
  testimonialText: {
    fontStyle: 'italic',
    marginVertical: 12,
  },
  testimonialAuthor: {
    fontWeight: 'bold',
    textAlign: 'right',
  },
  contactButton: {
    backgroundColor: '#1D3D47',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    marginTop: 20,
  },
  contactButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
