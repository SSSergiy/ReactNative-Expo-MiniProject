import { Image, StyleSheet, Text, View } from 'react-native';
import QuickPay from '../SVG/quickPay';

export const QuickPayItem = () => {
  return (
    <View style={styles.body}>
      <Image
        style={styles.timLogo}
        source={require('../assets/images/quickPayPhotos/tim.png')}
      />
      <QuickPay style={styles.svg} />
      <Text style={styles.title}>Tim</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timLogo: {
    width: 62,
    height: 72,
    borderRadius: 50,
    position: 'relative'
  },
  svg: {
    bottom: 27,
    right: 9,
    position: 'absolute'
  },

  title: {
    fontSize: 12
  },

  main: {},
  body: {
    width: 66,
    minHeight: 77,
    display: 'flex',
    alignItems: 'center',
    gap: 0
  }
});
