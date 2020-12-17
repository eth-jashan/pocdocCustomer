import React,{useState} from 'react'
import { Dimensions, View, Text , Button} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import {TextInput} from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import * as orderAction from '../../store/action/order'

const CheckoutScreen = ({navigation}) => {

    const cartItems = useSelector(x=>x.cart.cartList)
    const cartPrice = useSelector(x=>x.cart.totalAmount)
    const cartQuantity = useSelector(x=>x.cart.totalQuantity)
    const dispatch = useDispatch()

    const id = navigation.getParam('id')

    const orderPlace =async() => {

        await dispatch(orderAction.addOrder(id, 1, cartItems, cartPrice, name + " " + last, number, address, 'Not Confirmed'))
        navigation.navigate('Home')
    }
    
    console.log('Cart :', cartPrice)
    const [name, setName] = useState('')
    const [last, setLast] = useState('')
    const [address, setAddress] = useState('')
    const [number, setNumber] = useState('')
    

    return(

    <SafeAreaView>

    <View style={{width:Dimensions.get('screen').width, height:Dimensions.get('screen').height}}>

    <Text style={{fontFamily:'medium', fontSize:20, alignSelf:'center', marginVertical:10}}>Patient Information</Text>

        <View style={{flexDirection:'row', justifyContent:'space-evenly',marginBottom:10}}>
                
                <TextInput
                    mode = 'outlined'
                    placeholder = 'First Name'
                    value = {name}
                    onChangeText = {(text) => {setName(text)}}
                    theme ={{colors:{primary:'#009efd',underlineColor:'transparent'}}}
                    style = {{fontFamily:'medium', fontColor:'#009efd',height:60, width:'46%'}}
                />
                
                <View style={{width:'46%'}}>
                <TextInput
                    mode = 'outlined'
                    placeholder = 'Last'
                    value = {last}
                    onChangeText = {(text) => {setLast(text)}}
                    theme ={{colors:{primary:'#009efd',underlineColor:'transparent'}}}
                    style = {{fontFamily:'medium', fontColor:'#009efd',height:60, width:'100%'}}
                />

                </View>                
        </View>

                <TextInput
                    mode = 'outlined'
                    placeholder = 'Number'
                    value = {number}
                    onChangeText = {(text) => {setNumber(text)}}
                    theme ={{colors:{primary:'#009efd',underlineColor:'transparent'}}}
                    style = {{fontFamily:'medium', fontColor:'#009efd',height:60,width:'92%', alignSelf:'center'}}
                />

                <TextInput
                    multiline
                    mode = 'outlined'
                    placeholder = 'Address'
                    value = {address}
                    onChangeText = {(text) => {setAddress(text)}}
                    theme ={{colors:{primary:'#009efd',underlineColor:'transparent'}}}
                    style = {{fontFamily:'medium', fontColor:'#009efd',height:60, width:'92%',  alignSelf:'center'}}
                />

    <Text style={{fontFamily:'medium', fontSize:20, alignSelf:'center', marginVertical:10}}>Order Information</Text> 

    <TouchableOpacity style={{margin:10}} onPress={orderPlace}>    
    <View style={{width:Dimensions.get('window').width*0.75, backgroundColor:'#009efd', padding:10, borderRadius:15, alignSelf:'center'}}>
    <Text style={{fontFamily:'book', fontSize:18, color:'white', alignSelf:'center'}}>Place Order Of ₹ {cartPrice}</Text>
    </View>
    </TouchableOpacity>
    
    <FlatList
        data = {cartItems}
        keyExtractor = {x=>x.id}
        renderItem = {({item}) => {
        return(<View style={{width:Dimensions.get('screen').width*0.95, padding:15, flexDirection:"row", justifyContent:'space-between', backgroundColor:'white', marginVertical:5, borderRadius:10, alignSelf:'center'}}>

        <View>
            <Text style={{fontFamily:'medium', fontSize:18,marginBottom:10 }}>{item.testName}</Text>
        </View>
        <View>
        <Text style={{fontFamily:'book', fontSize:18, marginVertical:10}}>₹ {item.testPrice}/-</Text>
        </View>

        </View>)
        }}
    />
    
    
    

    

    </View>
    </SafeAreaView>
    )

}

CheckoutScreen.navigationOptions = navData => {

    return{
        header:()=>{
            
            return false
        }
    }

}
export default CheckoutScreen