import { SIGNIN_ACCOUNT } from "../action/auth"

const initialState = {
    token : null,
    userId : null,
    firstTime : false
}

export default (state = initialState , action) => {
    switch(action.type){
        case SIGNIN_ACCOUNT :
            return{
                    token : action.token,
                    userId : action.userId
                }

        
        default :
            return state
    }
}