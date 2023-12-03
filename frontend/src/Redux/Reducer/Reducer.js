import { GETCURRENT, LOGIN, REGISTER } from "../Actiontype/Actiontype"

const initialState = {
    user:{}
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case REGISTER:
        case LOGIN:   
            localStorage.setItem('tokenuser',payload.token)
            return { ...state, user: payload.user }
        case  GETCURRENT:
            return {...state, user:payload}    
        default:
            return state
    }
}