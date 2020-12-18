import Cart from "../../model/testCart"
import { ADD_CART } from "../action/cart"

const initialState = {

    cartList : [],
    totalAmount : 0,
    totalQuantity: 0

}


export default (state = initialState, action) => {

    switch(action.type){

        case ADD_CART :
            const list = [...state.cartList]
            const id = action.id
            
            let amount = state.totalAmount
            let quantity = state.totalQuantity
            const name = action.name
            const price = parseInt( action.price)
            list.push(new Cart(id, name, price))
            const newAmount = amount + price
            const newQuantity = quantity + 1
            console.log('List :', list)
                
                return{

                    ...state,
                    cartList : list,
                    totalAmount : newAmount,
                    totalQuantity : newQuantity

                }

           
        
        default :
            return state

    }

}