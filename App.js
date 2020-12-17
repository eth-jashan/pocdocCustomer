import React, { useState } from 'react';


//-----Redux Setup--------//

import {Provider} from 'react-redux'
import {applyMiddleware, createStore, combineReducers} from 'redux'
import ReduxThunk from 'redux-thunk'

//importing reducer

import AuthReducer from './store/reducer/auth'
import LabReducer from './store/reducer/labs'
import PackageReducer from './store/reducer/packages'
import TestReducer from './store/reducer/test'
import CartReducer from './store/reducer/cart'
import OrderReduer from './store/reducer/order'

//-----initialising reducer---//
const rootReducer = combineReducers({

  auth : AuthReducer,
  lab : LabReducer,
  package : PackageReducer,
  test : TestReducer,
  cart : CartReducer,
  order : OrderReduer
  
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

//----Importing Navigator-----//
import AppSwitch from './Navigator/appNav'

//-----Custom Font Setup-------//
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'

const fontLoading = () =>{ 
  return Font.loadAsync({
    'black':require('./assets/fonts/AirbnbCereal-Black.ttf'),
    'bold':require('./assets/fonts/AirbnbCereal-Bold.ttf'),
    'book':require('./assets/fonts/AirbnbCereal-Book.ttf'),
    'extraBold':require('./assets/fonts/AirbnbCereal-ExtraBold.ttf'),
    'light':require('./assets/fonts/AirbnbCereal-Light.ttf'),
    'medium':require('./assets/fonts/AirbnbCereal-Medium.ttf'),
    'logo': require('./assets/fonts/Cocon-Regular-Font.otf')
})}
//---------------------------------------//



export default function App(){


  const[fontLoad, setFontLoad] = useState(false)

  if(!fontLoad)
      {
        return <AppLoading
            startAsync ={fontLoading}
            onFinish = {() => setFontLoad(true)}
            onError = {console.warn}
        /> 
            
        
      }

  return <Provider store={store}><AppSwitch/></Provider>

}