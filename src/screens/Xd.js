import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { Modalize } from 'react-native-modalize';

import colors from '../config/colors';

const XdScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../images/SubCourse.png')}
      style={styles.container}
    >
      <Image
        source={require('../images/xdIcon.png')}
        style={styles.icon}
      />
      <Text style={[styles.iconslug, styles.iconSlugSize]}>Adobe XD</Text>
      <Text style={[styles.iconslug, styles.iconSlugSub]}>Essentials</Text>
      <Modalize
        handleStyle={styles.handleStyle}
        modalStyle={styles.modalStyle}
        alwaysOpen={510}
        scrollViewProps={{ showsVerticalScrollIndicator: false }}
      >
        <View style={styles.wrapper}>
          <Image
            source={require('../images/profilepic.png')}
            style={styles.profileImg}
          />
          <View style={{marginHorizontal: 20}}>
            <Text style={styles.profileName}>John Doe</Text>
            <Text style={styles.profileTitle}>Author, UI/UX Designer</Text>
          </View> 
        </View>
      </Modalize>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%"
  },
  icon: {
    height: 35,
    width: 35,
    alignSelf: 'center',
    marginTop: 20
  },
  iconslug: {
    color: '#fff',
    width: 200,
    alignSelf: 'center',
    textAlign: 'center'
  },
  iconSlugSize: {
    fontSize: 35
  },
  iconSlugSub: {
    fontSize: 25
  },
  handleStyle: {
    marginTop: 30,
    backgroundColor: colors.modalize,
    width: 80
  },
  modalStyle: {
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60
  },
  wrapper: {
    flexDirection: 'row',
    marginHorizontal: 30,
    marginTop: 40
  },
  profileImg: {
    height: 50,
    width: 50,
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 50
  },
  profileName: {
    color: colors.secondary,
    fontSize: 18
  },
  profileTitle: {
    color: colors.primary,
    fontSize: 12
  }
})

export default XdScreen;