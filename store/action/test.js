import Test from "../../model/test"

export const FETCH_TEST = 'FETCH_TEST'

export const fetchTest = (labId) => {

    return async (dispatch, getState) => {

        const response = await fetch(`https://pocdocadmin.firebaseio.com/tests.json?`)
        const resData = await response.json()

        const test = []

        for (const key in resData){

            test.push(new Test(key, resData[key].name, resData[key].description, resData[key].price,resData[key].packageId, resData[key].userid))
        
        }
        const testList = test.filter(x=>x.userId === labId)
        console.log("Test::", testList)
        
        dispatch({type:FETCH_TEST, test: testList})

    }

}