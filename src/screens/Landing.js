import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image } from 'react-native';

const LandingScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../images/Landing.png')}
      style={{width:"100%", height:"100%"}}
    >
      <View style={styles.container}>
        <Text>LearnIt</Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('Sign In')}
        >
          <Text style={styles.buttonText}>SIGN IN</Text>
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
});

export default LandingScreen;