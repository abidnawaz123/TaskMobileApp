import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SplashScreen from './components/SplashScreen';
import SignupScreen from './components/SignUp';
import SignInScreen from './components/SignIn';
import HomeScreen from './components/Home';

const NavigationStack = () => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator initialRouteName='splashscreen'>
            <Stack.Screen
                name="home"
                component={HomeScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="splashscreen"
                component={SplashScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="signup"
                component={SignupScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="signin"
                component={SignInScreen}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default NavigationStack
