import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

type ButtonProps = {
    buttonlabel: string;
    navigateTo?: string;
    onPress?: () => void;
    disabled? : boolean;
}

const CustomButton = ({ buttonlabel, navigateTo, onPress, disabled }: ButtonProps) => {
    const navigation: any = useNavigation()
    return (
        <Pressable style={styles.actionButton} disabled={disabled} >
            <Text style={styles.actionButtonLabel}
                onPress={onPress ? onPress : () => navigateTo && navigation.navigate(navigateTo)}>
                {buttonlabel}
            </Text>
        </Pressable>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    actionButton: {
        backgroundColor: "#FED36A",
        padding: 15,
        textAlign: "center"
    },
    actionButtonLabel: {
        color: "black",
        fontWeight: "800",
        textAlign: "center"
    }
})
