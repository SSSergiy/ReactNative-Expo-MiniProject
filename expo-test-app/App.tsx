import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Header } from './header/header';
import { Main } from './main/main'
export default function App() {
  return (
    <View style={styles.html}>
      <View style={styles.body
      }>
        <Header />
        <Main/>
      </View>

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  html: {
    marginLeft: "21.3%", 
    // marginRight: "50%",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    height: "100%",
    
  },
  body: {
    width: 392,
    height: "100%",
    backgroundColor: "#dee0e2",
    // paddingBottom:0,
    // paddingRight: 26,
    // paddingLeft: 14,
    // paddingTop:10
  }
});
