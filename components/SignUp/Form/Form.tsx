import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import SignUpFields from './InputFields';
import { SignUpFormData } from '../../../utils/data';
import CustomButton from '../../Button/Button';
import CheckBox from '@react-native-community/checkbox';
import { POLICY, TERMS } from '../../../utils/constants';
import { images } from '../../../utils/images';
import { SignupValidationSchema } from './ValidationSchema';
import { useNavigation } from '@react-navigation/native';
import { getDBConnection, saveUserCredentials } from '../../../database/db-service';

interface FormValues {
    fullname: string;
    email: string;
    password: string
}
const SignUpForm = () => {
    const navigation: any = useNavigation();
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [buttonStatus, setButtonStatus] = useState(false)

    const createUser = async (values: any) => {
        if (values.email !== "" || values.password !== "") {
            setButtonStatus(true)
            try {
                const db = await getDBConnection()
                const dataInstance = [{
                    username: values.fullname,
                    email: values.email,
                    password: values.password
                }]
                await saveUserCredentials(db, dataInstance)
                setButtonStatus(false)
                navigation.navigate("signin")
            } catch (error) {
                console.error(error)
            }
        }
    }

    return (
        <Formik
            initialValues={{ fullname: '', email: '', password: '' }}
            validationSchema={SignupValidationSchema}
            onSubmit={(values, { setSubmitting }) => {
                setSubmitting(false)
            }}
        >
            {({ errors, setFieldValue, isSubmitting, values }) => (
                <View style={styles.formWrapper}>
                    {SignUpFormData.map(item => (
                        <>
                            <Text key={item.key}
                                style={styles.fieldHeader}>
                                {item.fieldHeader}
                            </Text>
                            <SignUpFields
                                handleChange={(e: any) => {
                                    const fieldValue = e.nativeEvent.text.trim()
                                    setFieldValue(item.field, fieldValue)
                                }}
                                values={item.field}
                                placeholder={item.placeholder}
                                signupFieldIcon={item.icon}
                                password={item.password && item.password}
                            />
                            <Text style={{ color: 'red' }}>
                                {errors[item.field as keyof FormValues]}</Text>
                        </>
                    ))}
                    <View style={styles.policySection}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        />
                        <Text>{POLICY} <Text
                            style={{ color: "#FED36A" }}>
                            {TERMS}</Text></Text>
                    </View>
                    <CustomButton buttonlabel='Sign up' disabled={buttonStatus}
                        onPress={() => { createUser(values) }} />
                    <View style={styles.signupBottomSectionHeader}>
                        <View style={styles.dividerPane}></View>
                        <View><Text style={{ color: "#8CAAB9" }}>
                            Or Continue with</Text>
                        </View>
                        <View style={styles.dividerPane}></View>
                    </View>
                    <Pressable style={styles.actionButton} >
                        <Image source={images.googleIcon} />
                        <Text style={styles.actionButtonLabel}>
                            Google</Text>
                    </Pressable>
                    <Text style={styles.bottomInfo}>
                        Already Have an account?
                        <Text style={{ color: "#FED36A" }}
                            onPress={() => navigation.navigate("signin")}>
                            Login</Text>
                    </Text>
                </View>
            )}
        </Formik>
    )
};

export default SignUpForm;

const styles = StyleSheet.create({
    formWrapper: {
        width: "100%",
        padding: 20,
        gap: 10
    },
    fieldHeader: {
        color: "#8CAAB9"
    },
    policySection: {
        flexDirection: "row",
        marginHorizontal: 15,
        marginVertical: 10
    },
    signupBottomSectionHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 5,
    },
    dividerPane: {
        flexDirection: "row",
        borderBottomWidth: 1,
        width: 100,
        borderColor: "#8CAAB9",
        textAlign: "right",
        marginBottom: 7,
    },
    actionButton: {
        backgroundColor: "transparent",
        borderWidth: 2,
        borderColor: "white",
        padding: 15,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 5,
        marginBottom: 5
    },
    actionButtonLabel: {
        color: "white",
        fontWeight: "800",
        textAlign: "center"
    },
    bottomInfo: {
        textAlign: "center",
        color: "#8CAAB9"
    }
})