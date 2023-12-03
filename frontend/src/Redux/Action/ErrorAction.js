import { ALERTERROR, CLEARERROR } from "../Actiontype/ErrorActiontype"

export const alerrterror = (msg) => async(dispatch)=>{

    const id = Math.random()
    dispatch({type: ALERTERROR, payload: {msg,id}})
    setTimeout(()=>{
        dispatch({type: CLEARERROR, payload: id})//pour supprime le msg de tableau d'erreur apres l'affichage
    },10000)
} 