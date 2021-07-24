import React ,{useState} from 'react'

const UseWishList = () =>{
const[state,setState ] = useState(true)
const handleState = () =>{
    setState(!state);
}
    return {state,handleState}
}

export default UseWishList



