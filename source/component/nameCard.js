import React from 'react'
import {StyleSheet, View, Text, Dimensions, Image} from 'react-native'
import { Surface } from 'react-native-paper'
import { EvilIcons } from '@expo/vector-icons';
import { Avatar } from 'react-native-paper';

const NameCard = ({list}) => {

    return(
        
    
    <Surface style={{ width:'100%', borderRadius:10, backgroundColor:'white', alignSelf:'center', elevation:4, padding:20, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
        
        <View style={{alignSelf:'center'}}>

            <Text style={{fontFamily:'medium', fontSize:22, alignSelf:'center'}}>{list.name}</Text>
            
            <View style={{flexDirection:'row',marginVertical:5,}}>
            <EvilIcons name="location" size={18} color="gray" />
            <Text style={{fontFamily:'light', fontSize:16}}>{list.locality}</Text>
            </View>
            
            <View style={{flexDirection:'row',marginBottom:5}}>    
            <Text style={{fontFamily:'light', fontSize:15}}>Home Test Available Here</Text>
            </View>
            
        </View>

        <View style={{height:30, width:55, backgroundColor:'green', borderRadius:15, justifyContent:'center',alignSelf:'center'}}>
                                                            
            <Text style={{fontFamily:'medium', color:'white',alignSelf:'center'}}>4.5</Text>

        </View>

    </Surface>
    
        
    )
}



export default NameCard