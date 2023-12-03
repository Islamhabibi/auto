import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Getcurrent } from '../Redux/Action/Action'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Profile() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(Getcurrent())
  }
  ,[]) 
  const user= useSelector(state=>state.reducer.user)
  console.log(user)
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
        {user.email}
        </Card.Text>
        <Card.Title>{user.phone}</Card.Title>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Profile