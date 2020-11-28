import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

import colors from '../config/colors';

import CourseList from '../screens/CourseList';
 
const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../images/Home.png')}
      style={{width:"100%", height:"100%"}}
    >
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.welcomeText}>Welcome back John Doe</Text>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchText}
              placeholder="Search for new Courses"
              placeholderTextColor="#345c74"
            />
            <Image
              source={require('../images/searchIcon.png')}
              style={{height: 14, width: 14}}
            />
          </View>
          <View style={styles.courseContainer}>
            <View>
              <Text style={styles.courseText}>Start learning new staff</Text>
              <TouchableOpacity
                style={styles.courseButton}
                onPress={() => navigation.navigate('Course')}
              >
                <Text style={styles.categoryText}>Categories</Text>
                <Image
                  style={styles.categoryImg}
                  source={require('../images/arrowRight.png')}
                />
              </TouchableOpacity>
            </View>
            <Image
              style={{marginLeft: -80, marginTop: 35}}
              source={require('../images/undraw.png')}
            />
          </View>
        </View>
        <Text style={styles.courseProgresText}>Courses in Progress</Text>
        <CourseList
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
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: 'flex-end',
    paddingHorizontal: 20
  },
  courseContainer: {
    flexDirection: "row",
    backgroundColor: colors.fontPrimary,
    marginTop: 15,
    marginHorizontal: 20,
    borderRadius: 20,
    paddingVertical: 30,
    paddingLeft: 30
  },
  courseText: {
    color: colors.secondary,
    fontSize: 20,
    width: 250,
    paddingRight: 100
  },
  courseProgresText: {
    color: colors.secondary,
    flexDirection: "row",
    fontSize: 20,
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  courseButton: {
    flexDirection: "row",
    backgroundColor: colors.primary,
    alignItems: "center",
    marginTop: 20,
    width: 150,
    paddingVertical: 10,
    borderRadius: 14,
    paddingHorizontal: 10
  },
  categoryText: {
    color: colors.fontPrimary,
    fontSize: 12
  },
  categoryImg: {
    marginLeft: 20,
    width: 8,
    height: 8
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.fontPrimary,
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
  welcomeText: {
    paddingHorizontal: 20,
    fontSize: 35,
    paddingTop: 40,
    color: colors.fontPrimary,
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center"
  },
});
 
export default HomeScreen;