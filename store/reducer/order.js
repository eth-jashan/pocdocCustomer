import OrderInfo from "../../model/orderInfo"
import { ADD_ORDER, FETCH_ORDER } from "../action/order"

const initialState = {

    orders : []

}

export default (state = initialState, action) =>{

    switch(action.type){

        case ADD_ORDER :

            const newOrder = new OrderInfo(action.id, action.name, action.number, action.address, action.propId, action.custId, action.cartItem, action.cartTotal, action.status)
            const order = [...state.orders]
            

            return{
                ...state,
                orders : order.push(newOrder)
            }
        
        case FETCH_ORDER :
            return{
                ...state,
                orders : action.list
            }
        
        default:
            return state

    }

}