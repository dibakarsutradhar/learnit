import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import ProgressCircle from 'react-native-progress-circle';
 
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
          <View>
            <Text style={styles.courseProgresText}>Courses in Progress</Text>
            <TouchableOpacity style={styles.courseListContainer, {backgroundColor:"#fdddf3"}}>
              <Image
                style={styles.courseListImg}
                source={require('../images/xdIcon.png')}
              />
              <View>
                <Text style={styles.courseListTitle}>Adobe XD</Text>
                <Text style={styles.courseListDuration}>10 Hours, 20 Lessons</Text>
              </View>
              <Text style={styles.courseListPercentage}>25%</Text>
              <ProgressCircle
                percent={30}
                radius={17}
                borderWidth={1.5}
                color="#f58084"
                shadowColor="#fff"
                bgColor="#fff"
              >
                <Image
                  source={require('../images/playIcon.png')}
                />
              </ProgressCircle>
            </TouchableOpacity>
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
    backgroundColor: "#fff",
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
  courseProgresText: {
    color: "#345c74",
    flexDirection: "row",
    fontSize: 20,
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
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
  courseListContainer: {
    flexDirection: "row",
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 20,
    marginTop: 10
  },
  courseListImg: {
    width: 40,
    height: 40
  },
  courseListTitle: {
    color: "#345c74",
    fontSize: 13,
    paddingHorizontal: 20,
    width: 170
  },
  courseListDuration: {
    color: "#f58084",
    fontSize: 12,
    paddingHorizontal: 20
  },
  courseListPercentage: {
    color: "#345c74",
    fontSize: 13,
    paddingLeft: 10,
    paddingRight: 10
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