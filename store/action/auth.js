import firebase from '../../firebase'

export const SIGNIN_ACCOUNT = 'SIGNIN_ACCOUNT'


export const signinAccount = (verificationId, code) => {
    return async (dispatch) => {
    
    const credential = firebase.auth.PhoneAuthProvider.credential(verificationId,code)
    const response = await firebase.auth().signInWithCredential(credential)
    const token = await response.user.getIdToken(true)
    console.log("Response :",response.additionalUserInfo.isNewUser)

    console.log("Token", token)
    console.log("UID", response.user.uid)
    
    dispatch({type:SIGNIN_ACCOUNT, token : token, userId: response.user.uid})
    
    }
}

