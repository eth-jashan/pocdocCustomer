import { FETCH_TEST } from "../action/test"

const initialState= {

    testList : []

}

export default (state = initialState, action) => {

    switch(action.type){

        case FETCH_TEST :
            const list = action.test

            return{
                ...state,
                testList : list
            }
        
        default :
            return state

    }

}