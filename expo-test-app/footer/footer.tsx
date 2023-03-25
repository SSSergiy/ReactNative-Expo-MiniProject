import { StyleSheet, Text, View } from 'react-native';

export const Footer = () => {
  return (
    <View style={styles.earnContent}>
      <Text> Footer </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  earnContent: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60
  }
});
