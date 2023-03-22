import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';

import Arrow from '../SVG/chatSvg/arrow';
import Count from '../SVG/chatSvg/count';
import { User } from './user';

export const ChatBlock = () => {
  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <View style={styles.messages}>
          <Text style={styles.messageText}>Messages</Text>
          <Count />
        </View>

        <View style={styles.posts}>
          <Text style={styles.postsText}>Posts</Text>
          <Count />
        </View>
      </View>
      <User />
      <User />
      <User />

      <View style={{ height: 56 }}>
        <LinearGradient colors={['#FF3B61', '#FF9921']} style={styles.gradient}>
          <Text>View Messages</Text>

          <Arrow />
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 56,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  messages: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 9,
    flex: 1,
    minHeight: 60,
    backgroundColor: '#FBFBFB'
  },
  posts: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 9,
    flex: 1,
    minHeight: 60
  },
  messageText: { fontSize: 14 },
  postsText: { fontSize: 14, color: '#91969F' },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 60
  },
  body: {
    overflow: 'hidden',
    width: '90%',
  
    backgroundColor: '#EEEFF0',
    borderRadius: 20
  }
});
