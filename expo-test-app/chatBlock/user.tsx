import { Image, StyleSheet, Text, View } from 'react-native';
import Elips from '../SVG/chatSvg/elips';

export const User = () => {
  return (
    <View style={styles.body}>
      <View style={styles.img}>
        <Image
          style={styles.timLogo}
          source={require('../assets/images/quickPayPhotos/tim.png')}
        />
        <Elips style={styles.elips} />
      </View>

      <View style={styles.text}>
        <Text style={{ fontSize: 14 }}>Anne</Text>
        <Text style={{ color: '#91969F', fontSize: 12 }}>
          Hi, I just downloaded the BAXE App.
        </Text>
      </View>

      <Text style={styles.time}>10:20 am</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timLogo: { width: 50, height: 50, borderRadius: 50, position: 'relative' },
  elips: {
    position: 'absolute',
    top: 15,
    right: 4
  },
  img: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 18
  },
  text: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 8
  },
  time: { paddingTop: 10, color: '#91969F', fontSize: 12 },

  body: {
    width: '100%',
    minHeight: 72,
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'row',
		gap: 10,
		borderBottomWidth: 2,
		borderBottomColor:"#EEEFF0"
  }
});
