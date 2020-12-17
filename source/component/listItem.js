import React from 'react'
import {Dimensions, View, Text, Button} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import * as cartActions from '../../store/action/cart'

const ListItem = ({list}) => {

    const dispatch = useDispatch()
    const cartItem = useSelector(x=>x.cart.cartList)
        const totalAmount = useSelector(x=>x.cart.totalAmount)

    const addCart = (id, name, price) => {

        dispatch(cartActions.addCart(id, name, price))
        
        console.log("Cart :",cartItem, "Price:", totalAmount)

    }

    return(
        <View style={{width:Dimensions.get('screen').width*0.95, padding:15, flexDirection:"row", justifyContent:'space-between', backgroundColor:'white', marginVertical:5, borderRadius:10}}>

        <View style={{width:'50%'}}>
            <Text numberOfLines={1} style={{fontFamily:'medium', fontSize:18,marginBottom:10 }}>{list.name}</Text>
            <Text numberOfLines={3} style ={{fontFamily:'book', fontSize:15, marginBottom:10}}>{list.description}</Text>
        </View>
        <View>
        <View>
            <Button
                title = 'Add +'
                onPress = {()=>addCart(list.id, list.name, list.price)}
                color = '#009efd'
            />
        </View>
        <Text style={{fontFamily:'book', fontSize:18, marginVertical:10}}>₹ {list.price}/-</Text>
        </View>

        </View>
    )

}
export default ListItem