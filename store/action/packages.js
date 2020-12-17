import TestPackage from "../../model/testPackage"

export const FETCH_PACKAGES = 'FETCH_PACKAGES'

export const fetchPackages = (labId) => {

    return async(dispatch, getState) => {

        const response = await fetch(`https://pocdocadmin.firebaseio.com/packages.json?`)
        const resData = await response.json()
        const testPackage = []

        for (const key in resData){

            testPackage.push(new TestPackage(key, resData[key].name, resData[key].description, resData[key].instruction, resData[key].price, resData[key].receiverId))

        }
        const test = testPackage.filter(x=>x.receiverId === labId)

        console.log("PACKAGE :::", testPackage)

        dispatch({type:FETCH_PACKAGES, tests:test})

    }

}