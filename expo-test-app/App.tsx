// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,ScrollView,SafeAreaView ,StatusBar,} from 'react-native';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Main } from './main/main';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
    <View style={styles.html}>
      <View style={styles.body}>
        <Header />
        <Main />
        <Footer />
      </View>
      
        </View>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  html: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    flex: 1,
  },
  body: {
    flex: 1,
    height:"100%",
    width: 392,
    backgroundColor: '#dee0e2'
  },
  container: {
    height:"100%",
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
});
