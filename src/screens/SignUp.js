import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
 
const SignUpScreen = ({ onSignUp }) => {
  return (
    <View style={styles.container}>
      <Text>Public Sign Up Screen</Text>
      <Button title="Sign Up" onPress={onSignUp} />
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
 
export default SignUpScreen;