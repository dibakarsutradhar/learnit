import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
 
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Protected Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 
export default HomeScreen;