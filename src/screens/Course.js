import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Modalize } from 'react-native-modalize';

import colors from '../config/colors';

import CourseList from '../screens/CourseList';
 
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
        <View style={{ marginTop: 40 }}>
          <CourseList
            onPress={() => navigation.navigate('Xd')}
            image={require('../images/xdIcon.png')}
            title="Adobe Xd Prototyping"
            bg="#fdddf3"
          />
          <CourseList
            image={require('../images/sketchIcon.png')}
            title="Sketch Shortcuts and Tricks"
            bg="#fef8e3"
          />
          <CourseList
            image={require('../images/aeIcon.png')}
            title="UI Motion Design in After Effects"
            bg="#fcf2ff"
          />
          <CourseList
            image={require('../images/sketchIcon.png')}
            title="Sketch Shortcuts and Tricks"
            bg="#fef8e3"
          />
          <CourseList
            image={require('../images/aeIcon.png')}
            title="UI Motion Design in After Effects"
            bg="#fcf2ff"
          />
          <CourseList
            image={require('../images/sketchIcon.png')}
            title="Sketch Shortcuts and Tricks"
            bg="#fef8e3"
          />
          <CourseList
            image={require('../images/aeIcon.png')}
            title="UI Motion Design in After Effects"
            bg="#fcf2ff"
          />
        </View>
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
    color: colors.fontPrimary,
    fontSize: 35,
    width: 200,
    alignSelf: "center",
    textAlign: "center",
    marginTop: 34
  },
  modalizeHandleStyle: {
    marginTop: 30,
    backgroundColor: colors.modalize,
    width: 80
  },
  modalizeModalStyle: {
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60
  },
});
 
export default CourseScreen;