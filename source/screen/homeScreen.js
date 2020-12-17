import React, { useEffect } from 'react'
import {View, StyleSheet, Text, Dimensions} from 'react-native'
import * as labActions from '../../store/action/labs'
import {useSelector, useDispatch} from 'react-redux'
import { FlatList } from 'react-native-gesture-handler'
import LabList from '../component/labList'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {

    const dispatch = useDispatch()

    useEffect(()=>{

        dispatch(labActions.fetchLabs())

    },[])

    const list = useSelector(x=>x.lab.labs)
    console.log("LABSSSSSS : ", useSelector(x=>x.lab.labs))

    return(
        <SafeAreaView style={{flex:1}}>
        <View style={{width:Dimensions.get('window').width, marginBottom:10}}>
            <Text style={{fontFamily:'logo', color:'#009efd', fontSize:50, alignSelf:'center'}}>Pocdoc</Text>
        </View>
        <View style={{width:Dimensions.get('window').width, alignItems:'center' }}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data = {list}
                keyExtractor = {x=>x.id}
                renderItem = {({item}) => {
                    return<LabList
                        list ={item}
                    />
                }}
            />
        </View>
        </SafeAreaView>
    )

}

HomeScreen.navigationOptions = navData => {

    return{
        header:()=>{

            return false

        }
    }

}

export default HomeScreen