import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Deposit from '../SVG/balance/deposit';
import Qrcode from '../SVG/balance/qrcode';
import Transfer from '../SVG/balance/transfer';
import Union from '../SVG/balance/union';
// import SvgBacground from '../SVG/svgBacground';

export const Balance = () => {
  return (
       
    <View style={styles.container}>
      <LinearGradient
           style={{flex:1}}
            colors={["#FAFBFF",'#C4CEE0']}
           
          >
      <Qrcode style={styles.qrcode} />
     
      <View style={styles.relative}>
        <View style={styles.price}>
          <Text style={styles.balance}> Balance</Text>
          <Text style={styles.union}>
            <Union /> 5.621
          </Text>
          <Text style={styles.euro}> € 0.00</Text>
          </View>
          
        <View style={styles.fx}>
          <View style={styles.fxx}>
            <View style={styles.fxxx}>
              <Deposit />
              <Text style={styles.text}> Deposit</Text>
            </View>
            <View style={styles.fxxx}>
              <Transfer />
              <Text style={styles.text}> Transfer</Text>
            </View>
          </View>
          <Text style={styles.text}> . . . </Text>
        </View>
      </View>
      </LinearGradient>
      </View>
  );
};
const styles = StyleSheet.create({
  relative: {
    // position: 'relative'
    paddingTop:30,
    
  },
  price: {
    marginBottom: 20,
    paddingLeft:33,
    // position: 'absolute',
    // zIndex: 7,
    // top: -124,
    // left: 31
  },

  fxxx: {
    display: 'flex',
    flexDirection: 'row',
    gap: 14,
    justifyContent: 'space-between'
  },
  fxx: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    gap: 26
  },
  fx: {
    zIndex: 3,
    backgroundColor: '#B7BDCD',
    gap: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 19,
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 19
  },

  text: {
    zIndex: 8,
    fontSize: 14,
    color: '#FFFFFF'
  },
  balance: {
    fontSize: 16,
    color: '#ABACC0',
    textShadowOffset: { width: -1, height: -1 },
    textShadowRadius: 10
  },
  union: {
    fontSize: 38,
    color: '#D2CCE2'
  },
  euro: {
    fontSize: 14,
    color: '#A0A2B3'
  },
  svgBacground: {
    zIndex: 0,
    width: '100%',
    height: '100%'
  },
  qrcode: {
    position: 'absolute',
    top: 17,
    right: 17,
    zIndex: 0
  },
  container: {
    width: '90%',
    height: '17%',
    position: 'relative',
    borderWidth: 2,
    borderColor: 'rgba(216, 216, 216, 0.7)',
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 15
  }
});
