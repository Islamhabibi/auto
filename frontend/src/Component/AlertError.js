import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { useSelector } from 'react-redux';

function AlertError() {
    const errors = useSelector(state =>state.ErrorReducer)
    console.log(errors)
    return(

    <>
       {errors.map(e=> 
        <Alert variant='danger'>
          {e.msg} 
        </Alert>) 
        }
       
     
    </>
    )
}

export default AlertError;