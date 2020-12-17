import { FETCH_LABS } from "../action/labs"

const initialState = {

    labs:[]

}

export default (state = initialState , action) => {

    switch(action.type){

        case FETCH_LABS:
            const labList = action.labs

            return{
                ...state,
                labs : labList
            }

        default :
            return state


    }

}
