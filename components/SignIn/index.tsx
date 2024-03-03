import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { images } from '../../utils/images'
import SignInForm from './Form/Signin'

const SignInScreen = () => {
  return (
    <View style={styles.signUpMainWrapper}>
      <ScrollView>
        <View style={styles.signUpHeader} >
          <View style={styles.headerWrapper}>
            <Image source={images.mainLogo} />
            <View>
              <Text style={styles.logoHeading}>
                Day <Text style={{ color: '#FED36A' }}>Task</Text></Text>
            </View>
          </View>
          <Text style={styles.createAccountLabel}> Welcome Back</Text>
          <SignInForm />
        </View>
      </ScrollView>
    </View>
  )
}

export default SignInScreen

const styles = StyleSheet.create({
  signUpMainWrapper: {
    flex: 1,
    backgroundColor: "#212832"
  },
  signUpHeader: {
    alignItems: "center",
    gap: 10
  },
  headerWrapper: {
    alignItems: "center"
  },
  logoHeading: {
    fontWeight: '800',
    fontSize: 30,
    fontStyle: "italic"
  },
  createAccountLabel: {
    color: 'white',
    fontWeight: "900",
    fontSize: 25
  },
})