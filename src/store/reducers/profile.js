import { LOAD_PROFILE } from "../types/types"

const initialState ={
    profile:null,
    loading:null
}

export default function (state=initialState,action)
{
    const {type,payload} = action

    switch(type)
    {
        case LOAD_PROFILE:
            return{
                ...state,
                profile:payload
            }
            default:
                return {...state}
    }
} 