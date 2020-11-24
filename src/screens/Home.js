import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
 
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
                onPress={() => navigation.navigate('')}
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
    backgroundColor: "#fff2f2",
    marginTop: 15,
    marginHorizontal: 20,
    borderRadius: 20,
    paddingVertical: 30,
    paddingLeft: 30
  },
  courseText: {
    color: "#345c74",
    fontSize: 20,
    width: 250,
    paddingRight: 100
  },
  courseButton: {
    flexDirection: "row",
    backgroundColor: "#f58084",
    alignItems: "center",
    marginTop: 20,
    width: 150,
    paddingVertical: 10,
    borderRadius: 14,
    paddingHorizontal: 10
  },
  categoryText: {
    color: "#fff",
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
  welcomeText: {
    paddingHorizontal: 20,
    fontSize: 35,
    paddingTop: 40,
    color: "#fff",
    marginTop: 10
  },
});
 
export default HomeScreen;