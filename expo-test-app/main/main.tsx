import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';
import { Slider } from '../slider/slider';
import { Balance } from '../balance/balance'

export const Main = () => {
  return (
    <LinearGradient style={styles.main} colors={['#FFFFFF', '#EBEBEB']}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Hi there</Text>
        <Text style={styles.subTitle}>
          Fund your account to start investing.
        </Text>
      </View>
      <View>
        <Slider />
      </View>
        <Balance/>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  subTitle: {
    fontSize: 12,
    lineHeight: 20
  },

  title: {
    fontSize: 24
  },
  titleBlock: {
    paddingBottom: 10,
    paddingRight: 26,
    paddingLeft: 20,
    paddingTop: 17,
    marginBottom: 3
  },
  main: {
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    overflow: 'hidden',
    height: '100%',
    minHeight: 1216
  },
  body: {
    width: 392,
    minHeight: 1216,
    backgroundColor: '#dee0e2'
  }
});
