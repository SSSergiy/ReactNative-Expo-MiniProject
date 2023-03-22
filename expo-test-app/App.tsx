// import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View
} from 'react-native';
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
    width: '100%',
    margin: 0,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    flex: 1,
    // height: "100%",
    height: 1350
  },
  body: {
    width: '100%',
    margin: 0,
    padding: 0,
    flex: 1,
    height: '100%',

    backgroundColor: '#dee0e2'
  },
  container: {
    height: '100%',
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    width: '100%',
    margin: 0
  },
  scrollView: {
    width: '100%',
    margin: 0,
    padding: 0,
    flex: 1,
    height: '100%',
    backgroundColor: 'pink'
  }
});
