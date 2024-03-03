import React from 'react';
import { Image, StyleSheet, TextInput, View } from 'react-native';

const SignUpFields = ({
    handleChange,
    handleBlur,
    values,
    placeholder,
    signupFieldIcon,
    password
}: any) => {
    return (
        <View style={styles.fieldView}>
            <View style={styles.imageSection}>
                <Image source={signupFieldIcon} />
            </View>
            <TextInput
                style={styles.fieldStyle}
                // name="email"
                secureTextEntry={password}
                placeholder={placeholder}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
            />
        </View>
    )
}

export default SignUpFields

const styles = StyleSheet.create({
    fieldView: {
        flexDirection: "row",
    },
    fieldStyle: {
        flex: 1,
        backgroundColor: '#455A64'
    },
    imageSection: {
        backgroundColor: "#455A64",
        justifyContent: "center",
        padding: 20
    },
})