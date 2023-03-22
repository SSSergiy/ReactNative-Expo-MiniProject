import { Image, StyleSheet, Text, View } from 'react-native';
import Battery from '../SVG/battery';
import Burger from '../SVG/burger';
import MobileNetwork from '../SVG/mobileNetwork';
import Wifi from '../SVG/wifi';

export const Header = () => {
  return (
    <View style={styles.headerblock}>
      <View style={styles.headerTop}>
        <Text>9:41</Text>
        <View style={styles.headerActions}>
          <MobileNetwork />
          <Wifi />
          <Battery />
        </View>
      </View>
      <View style={styles.headerBottom}>
        <Image
          style={styles.girlLogo}
          source={require('../assets/images/girlLogo.png')}
        />
        <Burger />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headerTop: {
    display: 'flex',
    flexDirection: 'row',
    gap: 0,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerActions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2
  },
  headerBottom: {
    display: 'flex',
    flexDirection: 'row',
    gap: 0,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerblock: {
    margin: 0,
    paddingBottom: 14,
    paddingRight: 22,
    paddingLeft: 20,
    paddingTop: 10,
    borderBottom: '1px solid red',
    display: 'flex',
    gap: 15
  },
  girlLogo: {
    width: 32,
    height: 32,
    borderRadius: 50
  }
});
