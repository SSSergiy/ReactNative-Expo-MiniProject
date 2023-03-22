import { StyleSheet, Text, View } from 'react-native';
import { QuickPayItem } from './quickPayItem';

export const QuickPay = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.title}>Quick Pay</Text>
      <View style={styles.itemsBlock}>
        <QuickPayItem />
        <QuickPayItem />
        <QuickPayItem />
        <QuickPayItem />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 12,
    lineHeight: 20
  },

  title: {
    fontSize: 18,
    textAlign: 'left',
    paddingBottom: 0,
    paddingRight: 0,
    paddingLeft: 17,
    paddingTop: 8
  },
  itemsBlock: {
    width: '100%',
    justifyContent: 'space-around',
    display: 'flex',
    flexDirection: 'row'
  },
  main: {
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    overflow: 'hidden',
    height: '100%',
    minHeight: 1216,
    display: 'flex',
    alignItems: 'center'
  },
  body: {
    borderColor: "#EEEFF0",
    borderWidth:1,
    backgroundColor: '#FBFBFB',
    borderRadius: 15,
    width: '90%',
    paddingBottom: 16,
    marginBottom:16,
  }
});
