import PageInfo from "../../model/pageInfo"

export const FETCH_LABS = 'FETCH_LABS'

export const fetchLabs = () => {

    return async (dispatch, getState) => {

        const response = await fetch(`https://pocdocadmin.firebaseio.com/profile.json?`)
        const resData = await response.json()
        
        
        const lab = []

        for (const key in resData){

            lab.push(new PageInfo(key, resData[key].name, resData[key].address, resData[key].locality, resData[key].city, resData[key].propId, resData[key].coordinated))

        }

        console.log("Lab :", lab)
        dispatch({type:FETCH_LABS, labs:lab})

    }

}