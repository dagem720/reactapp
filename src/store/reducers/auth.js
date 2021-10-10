import {LOGIN_FAIL, LOGIN_SUCCESS, REGISTER_FAIL, REGISTER_SUCCESS,LOAD_USER,LOAD_USER_FAIL, LOGOUT} from '../types/types' 


const initialState = {
   
    user:null,
    isAuth:null,
    loading:null
}
export default function(state = initialState,action){
    
    const {type,payload} = action;
    switch(type)
    {
        case LOAD_USER:
            
            return{
                token:payload.token,
                ...state,
                user:payload,
                isAuth:true,
                loading:false
            }
            case LOAD_USER_FAIL:
                return{
                    
                   ...state,
                    user:null,
                    isAuth:false,
                    token:null,
                    loading:false
                }
        case REGISTER_SUCCESS:
          localStorage.setItem('token',payload.token)
         
          return {
            token:payload.token,
              ...state,
              ...payload,
              isAuth:true,
              loading:false
          }
          case REGISTER_FAIL:
            localStorage.removeItem('token')
            return {
                ...state,
                token:null,
                isAuth:false,
                user:null,
                loading:false
            }
            case LOGIN_SUCCESS:
                
                localStorage.setItem('token',payload.token)
                return{
                    
                    ...state,
                    user:payload,
                    isAuth:true,
                    token:payload.token,
                    loading:false
                }
            case LOGIN_FAIL:
                localStorage.removeItem('token')
                return{
                    ...state,
                    isAuth:false,
                    token:null,
                    user:null,
                    loading:false
                }
                case LOGOUT:
                    localStorage.removeItem('token')
                    return{
                        ...state,
                        isAuth:false,
                        token:null,
                        user:null,
                        loading:false
                    }

          default:
                return state
    }
}