import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';

import colors from '../config/colors';

const Chapters = ({onPress, color, num, title, duration, percent}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
    >
      <View style={[styles.number, {backgroundColor: color}]}>
        {num}
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.duration}>{duration}</Text>
      </View>
      <Text style={styles.percentage}>{percent}%</Text>
      <ProgressCircle
        percent={percent}
        radius={17}
        borderWidth={1.5}
        color={colors.primary}
        shadowColor={colors.fontPrimary}
        bgColor='#fff2f2'
      >
        <Image source={require('../images/playIcon.png')} />
      </ProgressCircle>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center'
  },
  number: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 6
  },
  title: {
    color: colors.secondary,
    fontSize: 13,
    paddingLeft: 20,
    width: 180
  },
  duration: {
    color: colors.primary,
    fontSize: 12,
    paddingLeft: 20
  },
  percentage: {
    color: colors.secondary,
    fontSize: 13,
    width: 50
  }
});

export default Chapters;