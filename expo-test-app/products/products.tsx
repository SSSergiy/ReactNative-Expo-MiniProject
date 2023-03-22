import { LinearGradient } from 'expo-linear-gradient';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import Bmc from '../SVG/products/bmc';
import EarnInterst from '../SVG/products/earnInterst';
import Plus from '../SVG/products/plus';

export const Products = () => {
  // style={styles.titleBlock}
  return (
    <View>
      <Text style={styles.productsTitle}>Products</Text>
      <View style={styles.productsItems}>
        <LinearGradient
          colors={['#520D8C', '#31C9B1']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.earnblock}
        >
          <ImageBackground
            source={require('../assets/images/products/earnInterst.png')}
            style={{ flex: 1 }}
          >
            <View style={styles.textContent}>
              <EarnInterst style={{ marginBottom: 21 }} />
              <Text style={{ marginBottom: 7, color: '#F4F4F5', fontSize: 12 }}>
                Savings Account
              </Text>
              <Text style={{ marginBottom: 0, color: '#F4F4F5', fontSize: 20 }}>
                Earn Interst
              </Text>
              <Text
                style={{ marginBottom: 24, color: '#F4F4F5', fontSize: 12 }}
              >
                With Your BSC
              </Text>
            </View>
            <View style={styles.earnContent}>
              <Plus />
            </View>
          </ImageBackground>
        </LinearGradient>

        <LinearGradient
          colors={['#FF3B61', '#FF9921']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.earnblock}
        >
          <ImageBackground
            source={require('../assets/images/products/bmc.png')}
            style={{ flex: 1 }}
          >
            <View style={styles.textContent}>
              <Bmc style={{ marginBottom: 21 }} />
              <Text style={{ marginBottom: 7, color: '#F4F4F5', fontSize: 12 }}>
                BMC
              </Text>
              <Text style={{ marginBottom: 0, color: '#F4F4F5', fontSize: 20 }}>
                <Image
                  style={{ width: 15, height: 19 }}
                  source={require('../assets/images/products/group.png')}
                />{' '}
                1200.00
              </Text>

              <Text
                style={{ marginBottom: 24, color: '#F4F4F5', fontSize: 12 }}
              >
                € 1,108.00
              </Text>
            </View>

            <View style={styles.bmcContent}>
              <Text style={{ color: '#FF3B61', fontSize: 12 }}>+ € 298.00</Text>
            </View>
          </ImageBackground>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  earnContent: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '24%'
  },
  bmcContent: {
    paddingLeft: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: '24%'
  },
  textContent: {
    paddingBottom: 0,
    paddingRight: 30,
    paddingLeft: 30,
    paddingTop: 18,
    marginBottom: 0
  },
  productsTitle: {
    fontSize: 16,
    paddingBottom: 0,
    paddingRight: 0,
    paddingLeft: 24,
    paddingTop: 0,
    marginBottom: 12
  },
  productsItems: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20
  },
  earnblock: {
    width: 169,
    height: 187,
    backgroundColor: '',
    borderRadius: 20
  }
});
