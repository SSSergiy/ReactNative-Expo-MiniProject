import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';
import AccountLevel from '../SVG/accountLevel';
import BaxeCard from '../SVG/baxeCard';
import CloseSlider from '../SVG/closeSlider';

export const Slider = () => {
  return (
    <View style={styles.slider}>
      <View style={styles.sliderItem}>
        <LinearGradient
          style={styles.iconWrapper}
          colors={['#FF3B61', '#520D8C']}
          start={{ x: 10, y: 0 }}
          end={{ x: 10, y: 0 }}
          locations={[0, 0, 0]}
        >
          <BaxeCard />
        </LinearGradient>
        <View style={styles.textContent}>
          <Text style={styles.title}>Pay Offline With BAXE Card</Text>
          <Text style={styles.subTitle}>Easy Pay & Free Fee</Text>
        </View>
        <CloseSlider />
      </View>
      <View style={styles.sliderItem}>
        <LinearGradient
          style={styles.iconWrapper}
          colors={['#FF3B61', '#520D8C']}
          start={{ x: 10, y: 0 }}
          end={{ x: 10, y: 0 }}
          locations={[0, 0, 0]}
        >
          <AccountLevel />
        </LinearGradient>
        <View style={styles.textContent}>
          <Text style={styles.title}>1 More Step to Higher Account </Text>
          <Text style={styles.subTitle}>Easy Pay & Free Fee</Text>
        </View>
        <CloseSlider />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#000000',
    fontSize: 12,
    marginBottom: 11
  },
  subTitle: {
    fontSize: 10,
    color: '#91969F'
  },
  textContent: {
    maxWidth: 102
  },
  sliderItem: {
    paddingBottom: 6,
    paddingRight: 21,
    paddingLeft: 20,
    paddingTop: 18,
    height: 97,
    maxWidth: 218,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#F4F4F5',
    gap: 10,
    borderRadius: 15,
    flexDirection: 'row'
  },
  iconWrapper: {
    width: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  slider: {
    gap: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    paddingBottom: 0,
    paddingRight: 0,
    paddingLeft: 60,
    paddingTop: 0,
    marginBottom: 13
  }
});
