import { FETCH_PACKAGES } from "../action/packages"

const initialState = {

    testPackage:[]

}

export default (state = initialState, action)=>{

    switch(action.type){

        case FETCH_PACKAGES:
        
        const tests = action.tests

        return{
            ...state,
            testPackage : tests
        }

        default:
            return state

    }

}