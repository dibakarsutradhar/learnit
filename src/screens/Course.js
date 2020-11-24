import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Modalize } from 'react-native-modalize';
 
const CourseScreen = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.container}
      source={require('../images/Course.png')}
    >
      <Text style={styles.courseIntro}>UI/UX Courses</Text>
      <Modalize
        handleStyle={styles.modalizeHandleStyle}
        modalStyle={styles.modalizeModalStyle}
        alwaysOpen={500}
        scrollViewProps={{showsVerticalScrollIndicator: false}}
      >
        <View style={{ marginTop: 40 }}></View>
      </Modalize>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%"
  },
  courseIntro: {
    color: "#fff",
    fontSize: 35,
    width: 200,
    alignSelf: "center",
    textAlign: "center",
    marginTop: 34
  },
  modalizeHandleStyle: {
    marginTop: 30,
    backgroundColor: "#e9e9e9",
    width: 80
  },
  modalizeModalStyle: {
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60
  },
});
 
export default CourseScreen;