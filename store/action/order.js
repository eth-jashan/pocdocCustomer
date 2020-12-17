import OrderInfo from "../../model/orderInfo"
import order from "../reducer/order"

export const ADD_ORDER = 'ADD_ORDER'
export const FETCH_ORDER = 'FETCH_ORDER'

export const addOrder = (propId, custId, cartItem, cartTotal, name, number, address, status) => {

    return async (dispatch, getState) => {

        

        const response = await fetch(`https://pocdocadmin.firebaseio.com/order.json?`,{
            method : 'POST',
            headers : {'Content-Type':'application/json'},
            body : JSON.stringify({
                propId : propId,
                custId : custId,
                cartItem : cartItem,
                cartTotal : cartTotal,
                name : name,
                number : number,
                address : address,
                status : status
            })
        })
        const resData = await response.json()
        
        dispatch({type:ADD_ORDER, id:resData.name, propId : propId, custId : custId, cartItem : cartItem, cartTotal : cartTotal, name : name, number : number ,address : address, status:status})
    }

}

export const fetchOrder = () => {

    return async (dispatch, getState) => {

        const response = await fetch(`https://pocdocadmin.firebaseio.com/order.json?`)
        const resData = await response.json()

        const orderList = []

        for (const key in resData){

            orderList.push(new OrderInfo(key, resData[key].name,  resData[key].number,  resData[key].address,  resData[key].propId,  resData[key].custId,  resData[key].cartItem,  resData[key].cartTotal, resData[key].status))

        }

        

        dispatch({type:FETCH_ORDER, list: orderList})
    }

}