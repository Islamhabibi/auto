import axios from "axios";
import { GETCURRENT, LOGIN, REGISTER } from "../Actiontype/Actiontype";
import { alerrterror } from "./ErrorAction";

 export const Registeruser = (data,navigate) => async (dispatch) => {
    try {
      await axios
        .post("/users/register",data)
        .then((res) => dispatch({ type: REGISTER, payload: res.data}));
        navigate('/profile')
    } catch (error) {
      error.response.data.errors.forEach(e => {
        dispatch(alerrterror(e.msg))
        
      });
    } 
  
  };

  export const Loginuser = (data,navigate) => async (dispatch) => {
    try {
      await axios
        .post("/users/login",data)
        .then((res) => dispatch({ type: LOGIN, payload: res.data}));
        navigate('/profile')
    } catch (error) {
      console.log(error)
       error.response.data.errors.forEach(e => {
        dispatch(alerrterror(e.msg))
        
       });
    }
  
  };

  export const Getcurrent=()=> async(dispatch)=>{
    const config={
      headers:{token: localStorage.getItem('tokenuser')}
    }
    try {
      const res= await axios 
        .get('/users/getcurrent',config)
        .then(res=>dispatch({type:GETCURRENT, payload: res.data}))

    } catch (error) {
      console.log(error)
    }
  }


   