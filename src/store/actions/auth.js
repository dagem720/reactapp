import axios from "axios";
import { REGISTER_FAIL,REGISTER_SUCCESS, LOGIN_SUCCESS,LOGIN_FAIL,LOAD_USER,LOAD_USER_FAIL,LOGOUT } from "../types/types";


export const logout =()=>dispatch=>{
    dispatch({
        type:LOGOUT
    })
}

export const loadUser = ()=> async dispatch=>{


     try{
        const config = await {
            headers: {
                'Content-Type': 'application/json',
                Authorization:  "Bearer " + localStorage.getItem('token')
    
            }
          }

      const res = await axios.post('',{},config)
     
      dispatch({
            type:LOAD_USER,
            payload:res.data
      })
    }
    catch (e)
    {
        dispatch({
            type:LOAD_USER_FAIL,
         
      })
    }    
     

}

export const register =  ({email,password}) => async dispatch =>{


    try{
        const res = await axios.post('user2',{email:email,password:password})
        console.log(res.data)

        dispatch({
            type:REGISTER_SUCCESS,
            payload:res.data
        })
    }
    catch(e)
    {
        dispatch({
            type:REGISTER_FAIL
        })
        
    }

}
export const login = ({email,password}) => async dispatch =>{
    try {
        const res =  await axios.post('login',{email:email,password,password})

        console.log(res.data)
        dispatch({
        type:LOGIN_SUCCESS,
        payload:res.data
  
    })
}
     catch (error) {
        dispatch({
            type:LOGIN_FAIL
        })
    }
  
   }
   

        
       
 
    
