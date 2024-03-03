import React from 'react';
import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import { MANAGE_TASKS } from '../../utils/constants';
import { images } from '../../utils/images';
import CustomButton from '../Button/Button';

const SplashScreen = ({ navigation }: any) => {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground style={{ flex: 1 }}
                resizeMode='cover'
                source={images.splashScreenImage}>

                <View style={styles.SplashScreenWrapper}>
                    <View style={styles.headerLogo}>
                        <Image source={images.mainLogo} />
                        <Text style={styles.logoLabel}>Day
                            <Text style={{ color: '#FED36A' }}>Task</Text>
                        </Text>
                    </View>
                    <View>
                        <View style={styles.mainSection}>
                            <Text style={styles.splashScreenMainLabel}>
                                {MANAGE_TASKS}</Text>
                            <Text
                                style={[styles.splashScreenMainLabel,
                                { color: "#FED36A" }]}> Day Task </Text>
                        </View>
                        <CustomButton buttonlabel="Let's Start" navigateTo='signin' />
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    SplashScreenWrapper: {
        padding: 20,
        gap: 10,
        flex: 1,
        justifyContent: "space-between"
    },
    mainSection: {
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        gap: 10,
    },
    headerLogo: {
        marginBottom: 10
    },
    splashScreenMainLabel: {
        fontSize: 40,
        fontWeight: '900',
        fontStyle: 'italic',
        textAlign: "center",
        fontFamily: "Helvetica-BoldOblique"
    },
    splashScreenActionButton: {
        backgroundColor: "#FED36A",
        padding: 15,
        textAlign: "center"
    },
    actionButton: {
        color: "black",
        fontWeight: "800",
        textAlign: "center"
    },
    logoLabel: {
        fontSize: 20,
        fontWeight: '900',
        fontStyle: 'italic',
        fontFamily: "Helvetica-BoldOblique"
    }
})