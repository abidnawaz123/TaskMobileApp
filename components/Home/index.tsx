import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { images } from '../../utils/images'
import { createTable, getAllUsersCredentials, getDBConnection } from '../../database/db-service'

const HomeScreen = () => {
    const [currentUserData, setCurrentUserData] = useState<any>([])

    const fetchDatabase = async () => {
        const db = await getDBConnection()
        const storedTodoItems = await getAllUsersCredentials(db)
        setCurrentUserData(storedTodoItems);
    }
    useEffect(() => {
        fetchDatabase()
    }, [])
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
                    {currentUserData &&
                        currentUserData.map((item: any) => (
                            <View>
                                <Text style={styles.createAccountLabel}>{item.username}</Text>
                            </View>
                        ))}

                </View>
            </ScrollView>
        </View>
    )
}

export default HomeScreen

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