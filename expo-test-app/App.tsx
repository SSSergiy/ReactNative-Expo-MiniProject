import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Main } from './main/main';
export default function App() {
  return (
    <View style={styles.html}>
      <View style={styles.body}>
        <Header />
        <Main />
        <Footer />
      </View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  html: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  },
  body: {
    width: 392,
    backgroundColor: '#dee0e2'
  }
});
