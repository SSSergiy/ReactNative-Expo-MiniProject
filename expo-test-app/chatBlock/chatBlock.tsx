import { StyleSheet, Text, View } from 'react-native';
import Count from '../SVG/chatSvg/count';

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
			<View>
				
			</View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    minHeight: '100%',
    backgroundColor: '#EEEFF0',
    borderRadius: 20
  }
});
