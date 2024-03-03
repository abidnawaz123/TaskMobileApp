import React, { useEffect } from 'react';
import { Formik } from 'formik';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { SignInFormData } from '../../../utils/data';
import CustomButton from '../../Button/Button';
import { images } from '../../../utils/images';
import { useNavigation } from '@react-navigation/native';
import SignUpFields from '../../SignUp/Form/InputFields';
import { SignupValidationSchema } from '../../SignUp/Form/ValidationSchema';
import { createTable, deleteTable, getDBConnection, getAllUsersCredentials, saveUserCredentials } from '../../../database/db-service';

interface FormValues {
    email: string;
    password: string
}

const SignInForm = () => {
    const navigation: any = useNavigation();

    const handleLogin = async (values: any) => {
        const db = await getDBConnection()
        const currentUsersList = await getAllUsersCredentials(db)
        if (currentUsersList.length) {
            const currentUser = currentUsersList.find(item => item.email === values.email
                && item.password === values.password)
            currentUser && navigation.navigate("home")
        }
    }

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={SignupValidationSchema}
            onSubmit={(values, { setSubmitting }) => {
                console.log('submission is done')
                setSubmitting(false)
            }}
        >
            {({ errors, setFieldValue, isSubmitting, values }) => (
                <View style={styles.formWrapper}>
                    {SignInFormData.map(item => (
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
                    <CustomButton buttonlabel='Login'
                        onPress={() => { handleLogin(values) }} />
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
                        Don't Have an account?
                        <Text style={{ color: "#FED36A" }}
                            onPress={() => {

                                navigation.navigate("signup")

                            }}>
                            {' '}Signup</Text>
                    </Text>
                </View>
            )}
        </Formik>
    )
};

export default SignInForm;

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