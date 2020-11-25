import React from 'react';
import { View, Image, Text, StyleSheet, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
 
const SignInScreen = ({ onSignIn, navigation }) => {
  return (
    <ImageBackground
      source={require('../images/Auth.png')}
      style={{width:"100%", height:"100%"}}
    >
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchText}
            placeholder="Username"
            placeholderTextColor="#345c74"
          />
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchText}
            placeholder="Password"
            placeholderTextColor="#345c74"
          />
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={onSignIn}
        >
          <Text style={styles.buttonText}>SIGN IN</Text>
          <Image
            style={styles.buttonImg}
            source={require('../images/arrowRight.png')}
          />
        </TouchableOpacity>
        <Text style={styles.orText}>OR</Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('Sign Up')}
        >
          <Text style={styles.buttonText}>SIGN UP</Text>
          <Image
            style={styles.buttonImg}
            source={require('../images/arrowRight.png')}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  authContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center'
  },
  buttonContainer: {
    flexDirection: "row",
    backgroundColor: "black",
    alignItems: "center",
    marginTop: 20,
    width: 120,
    paddingVertical: 10,
    borderRadius: 14,
    paddingHorizontal: 10
  },
  buttonText: {
    color: "#fff",
    justifyContent: "center",
    fontSize: 12
  },
  buttonImg: {
    marginLeft: 20,
    width: 8,
    height: 8
  },
  orText: {
    color: "white",
    justifyContent: "center",
    fontSize: 12,
    paddingTop: 10,
    paddingBottom: -20
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 12,
    marginHorizontal: 20,
    marginTop: 20
  },
  searchText: {
    fontSize: 12,
    width: 280,
    paddingHorizontal: 12
  },
});
 
export default SignInScreen;