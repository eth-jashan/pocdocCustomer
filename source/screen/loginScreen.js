import { LinearGradient } from 'expo-linear-gradient'
import React, { useState, useRef} from 'react'
import {View, StyleSheet, Text, Dimensions, TouchableOpacity, KeyboardAvoidingView} from 'react-native'
import { TextInput, ActivityIndicator } from 'react-native-paper'
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { SafeAreaView } from 'react-native-safe-area-context';
import firebase from '../../firebase'
import { useDispatch} from 'react-redux'
import * as authActions from '../../store/action/auth'
//import * as pushTokenActions from '../../store/action/pushToken'


const LoginScreen = ({navigation}) => {

    const dispatch = useDispatch()
    const [load, setLoad] = useState(false)
    const [number, setNumber] = useState('')
    const [code, setCode] = useState('')
    const recaptchaVerifier = useRef(null);
    const [verificationId, setVerificationId] = useState(null);
    const [screen, setScreen] = useState(false)

    const verificationCode = () => {
        const newNum = '+91'+number
        const phoneProvider = new firebase.auth.PhoneAuthProvider();
        phoneProvider.verifyPhoneNumber(newNum, recaptchaVerifier.current).then(setVerificationId)
        console.log("dispatch :", verificationId)
        
        setScreen(true)
    }

    const otpHandler = async() => {
        console.log("dispatch", verificationId ," : ", code)
        await dispatch(authActions.signinAccount(verificationId, code))
        //await dispatch(pushTokenActions.fetchToken())
        //await dispatch(pushTokenActions.addToken())
        //await dispatch(pushTokenActions.fetchToken()) 
       setLoad(false)
       navigation.navigate('Main')
    }

   
    return(
    <SafeAreaView>
    <View style={styles.containerStyle}>
        <Text style={styles.headerStyle}>PocDoc</Text>
        <View style={{alignSelf:'center',justifyContent:'center',marginVertical:Dimensions.get('screen').height/5}}>

        {screen?null:<TextInput
            keyboardType = 'number-pad'
            value = {number}
            onChangeText = {(text)=>setNumber(text)}
            mode = 'outlined'
            label = 'Phone Number'
            theme ={{colors:{primary:'#009efd',underlineColor:'transparent'}}}
            style={{ fontFamily: 'medium', fontColor: '#009efd', height: 60, width: Dimensions.get('screen').width*0.95 }}
        />}

        {screen?<TextInput
            keyboardType = 'number-pad'
            value = {code}
            onChangeText = {(text)=>setCode(text)}
            mode = 'outlined'
            label = 'OTP code'
            theme ={{colors:{primary:'#009efd',underlineColor:'transparent'}}}
            style={{ fontFamily: 'medium', fontColor: '#009efd', height: 60, width: Dimensions.get('screen').width*0.95 }}
        />:null}
        <FirebaseRecaptchaVerifierModal
                    ref = {recaptchaVerifier}
                    firebaseConfig = {firebase.app().options}
                />

        <TouchableOpacity onPress={screen ? otpHandler : verificationCode} style={{alignItems:'center'}}>    
        <LinearGradient
        // Button Linear Gradient
        colors={['#009efd','#1aa8fd']}
        style={{ padding: 15, alignItems: 'center', borderRadius: 30, width:'90%',alignSelf:'center', marginVertical:20 }}>
        {screen?<Text style={{fontFamily:'medium',color:'white', fontSize:20}}>Verify</Text>:<Text style={{fontFamily:'medium',color:'white', fontSize:20}}>Get Otp</Text>}
        </LinearGradient>
        </TouchableOpacity>
        

        <TouchableOpacity onPress={()=>{navigation.navigate('SignUp')}}>
        <Text style={{fontFamily:'medium', fontSize:20, alignSelf:'center'}}>New User? Signup for new account.</Text>
        </TouchableOpacity>
        </View>
    </View>    
    </SafeAreaView>)
} 

LoginScreen.navigationOptions = navData => {
    return{
        header:()=>{
            return false
        }
    }
}

const styles = StyleSheet.create({
    containerStyle : {
        height : Dimensions.get('screen').height,
        width : Dimensions.get('screen').width,
        alignContent:'center'
        
    },
    headerStyle : {
        fontFamily : 'logo',
        fontSize : 80,
        alignSelf :'center',
        color : '#009efd'
    }
})



export default LoginScreen