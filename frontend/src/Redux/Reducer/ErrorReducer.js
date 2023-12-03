import { ALERTERROR, CLEARERROR } from "../Actiontype/ErrorActiontype"

const initialState = [] // modifer pour deviant un tableau

export const ErrorReducer= (state = initialState, { type, payload }) => {
  switch (type) {

  case ALERTERROR:
    return  [...state,payload]

 case CLEARERROR:
        return  state.filter(e=>e.id !== payload) 

  default:
    return state
  }
}
