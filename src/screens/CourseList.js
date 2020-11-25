import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';

const CourseList = (image, title, bg, onPress) => {
  return (
    <TouchableOpacity
      style={styles.container, {backgroundColor: bg}}
      onPress={onPress}
    >
      <Image
        style={styles.img}
        source={image}
      />
      <View>
        <Text style={styles.textTitle}>{title}</Text>
        <Text style={styles.textDuration}>10 Hours, 20 Lessons</Text>
      </View>
      <Text style={styles.percentage}>25%</Text>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 10
  },
  img: {
    width: 40,
    height: 40
  },
  textTitle: {
    color: "#345c74",
    fontSize: 13,
    paddingHorizontal: 20,
    width: 170
  },
  textDuration: {
    color: "#f58084",
    fontSize: 12,
    paddingHorizontal: 20
  },
  percentage: {
    color: "#345c74",
    fontSize: 13,
    paddingLeft: 10,
    paddingRight: 10
  }
});

export default CourseList;