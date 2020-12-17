import React from 'react'
import {StyleSheet, View, Text, Dimensions, Image} from 'react-native'
import { Surface } from 'react-native-paper'
import { EvilIcons } from '@expo/vector-icons';
import { Avatar } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';
import { useSelector } from 'react-redux';

const LabList = ({list, navigation}) => {

    const cartItem = useSelector(x=>x.cart.cartList)
    const totalAmount = useSelector(x=>x.cart.totalAmount)
    console.log("Cart :",cartItem, "Price:", totalAmount)
    return(
        <TouchableOpacity onPress={()=>{navigation.navigate('Menu',{id:list.propId})}}>
        <View style={styles.cardStyle}>
        
        <Image
            source={{uri:'https://firebasestorage.googleapis.com/v0/b/pocdocadmin.appspot.com/o/sssss.jpg?alt=media&token=3393580c-91d6-4309-aadf-e77557dc4e36'}}
            style={{
                width : Dimensions.get('screen').width*0.90,
                height : 150,
                borderRadius:10
            }}
        />
        <Surface style={{ width:'97%', borderRadius:10, backgroundColor:'white', alignSelf:'center',bottom:30, elevation:4, padding:20, flexDirection:'row', justifyContent:'space-between'}}>
        
        <View>
            <Text style={{fontFamily:'medium', fontSize:22}}>{list.name}</Text>
            
            <View style={{flexDirection:'row',marginVertical:5}}>
            <EvilIcons name="location" size={18} color="gray" />
            <Text style={{fontFamily:'light', fontSize:16}}>{list.locality}</Text>
            </View>
            
            <View style={{flexDirection:'row',marginBottom:5}}>    
            <Text style={{fontFamily:'light', fontSize:15}}>Home Test Available Here</Text>
            </View>
        </View>

        <View style={{height:30, width:55, backgroundColor:'green', borderRadius:15, justifyContent:'center'}}>
            <Text style={{fontFamily:'medium', color:'white',alignSelf:'center'}}>4.5</Text>
        </View>

        </Surface>
        
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardStyle : {
        width : Dimensions.get('screen').width*0.90,
        //height : 120,
        //backgroundColor : '#009efd' <MaterialCommunityIcons name="cash" size={24} color="black" />
    }
})

export default withNavigation(LabList)