import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

const ProfileScreen = () => {

    return(
        <View>
            <Text>ProfileScreen</Text>
        </View>
    )

}

ProfileScreen.navigationOptions = navData => {

    return{
        header:()=>{

            return false

        }
    }

}

export default ProfileScreen