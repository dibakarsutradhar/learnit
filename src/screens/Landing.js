import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image } from 'react-native';

// Refactored color function
import colors from '../config/colors';

const LandingScreen = ({ navigation }) => {
  return (
    // Background of the Screen
    <ImageBackground
      source={require('../images/Landing.png')}
      style={{width:"100%", height:"100%"}}
    >
      <View style={styles.container}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>LearnIt</Text>
          <Text style={styles.sublogo}>eLearning</Text>
        </View>
        {/* Button */}
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
    color: colors.fontPrimary,
    justifyContent: "center",
    fontSize: 12
  },
  buttonImg: {
    marginLeft: 20,
    width: 8,
    height: 8
  },
  logoContainer: {
    marginTop: -200,
    marginBottom: 200
  },
  logo: {
    fontSize: 60,
  },
  sublogo: {
    fontSize: 20,
    color: "white"
  }
});

export default LandingScreen;