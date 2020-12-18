import React, { useEffect } from 'react'
import {View, StyleSheet, Text, Dimensions, TouchableOpacity} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector, useDispatch } from 'react-redux'
import NameCard from '../component/nameCard'
import * as packageAction from '../../store/action/packages'
import * as testAction from '../../store/action/test'
import ListItem from '../component/listItem'
import { Entypo } from '@expo/vector-icons';



const LabMenu = ({navigation}) => {

    const dispatch = useDispatch()
    const id = navigation.getParam('id')

    // const cartItem = useSelector(x=>x.cart.cartList)
    const totalAmount = useSelector(x=>x.cart.totalAmount)
    const cartQuantity = useSelector(x=>x.cart.totalQuantity)

    const list = useSelector(x=>x.lab.labs)
    const finalList = list.filter(x=>x.propId === id)
    
    useEffect(()=>{
        dispatch(packageAction.fetchPackages(id))
        dispatch(testAction.fetchTest(id))
    },[dispatch])

   
    const packages = useSelector(x=>x.package.testPackage)
    const test = useSelector(x=>x.test.testList)

    return(
        <SafeAreaView>
        <View style={{width:Dimensions.get('window').width, height:Dimensions.get('window').height, alignItems:'center'}}>
            
            <Text style={{margin:10, fontFamily:'black', fontSize:20}}>Test Packages</Text>
            <FlatList
                data = {packages}
                keyExtractor = {x=>x.id}
                renderItem = {({item}) => {

                    return<ListItem
                        list = {item}
                    />

                }}
            />

        <Text style={{margin:10, fontFamily:'black', fontSize:20}}>Indivisual Tests</Text>
        <FlatList
                data = {test}
                keyExtractor = {x=>x.id}
                renderItem = {({item}) => {

                    return<ListItem
                        list = {item}
                    />

                }}
            />

        {totalAmount>0?<View style={{position:'absolute', width:Dimensions.get('window').width, backgroundColor:'#009efd', padding:15, bottom:0, flexDirection:'row', justifyContent:'space-between'}}>
            
            <View style={{flexDirection:'row'}}>
                <Text style={{fontFamily:'medium', fontSize:18, color:'white'}}>{cartQuantity} {cartQuantity > 1?'Items':'Item'}</Text>
                <Text style={{fontFamily:'bold', fontSize:20, color:'white', marginHorizontal:5}}>|</Text>
                <Text style={{fontFamily:'medium', fontSize:18, color:'white'}}>₹ {totalAmount}</Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('Checkout',{id:id})}>
            <View style={{flexDirection:'row'}}>
                <Text style={{fontFamily:'medium', fontSize:18, color:'white',alignSelf:'center'}}>Place Order</Text>
                <Entypo name="shopping-bag" size={20} color="white" style={{marginHorizontal:5}}/>
            </View>
            </TouchableOpacity>

        </View>:null}

        </View>
        </SafeAreaView>
    )

}

LabMenu.navigationOptions = navData => {

    return{
        header:()=>{

            return false

        }
    }

}

export default LabMenu