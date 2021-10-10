import axios from "axios";
import { connect } from "react-redux";
import { LOAD_PROFILE } from "../types/types";


export const profile = ()=> async dispatch=>{


    try{
       const config = await {
           headers: {
               'Content-Type': 'application/json',
               Authorization:  "Bearer " + localStorage.getItem('token')
   
           }
         }

     const res = await axios.get('getProfile',{},config)
    console.log(res)
    //  dispatch({
    //        type:LOAD_USER,
    //        payload:res.data
    //  })
   }
   catch (e)
   {
    //    dispatch({
    //        type:LOAD_USER_FAIL,
        
    //  })
   }    
    

}
