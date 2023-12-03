import React, { useState } from 'react'
import'./register.css'
import { useDispatch } from "react-redux";
import { Registeruser } from '../Redux/Action/Action';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState(0);

  const dispatch = useDispatch()
  const navigate= useNavigate()
  const data={name,email,password,phone}
  console.log(data)
  const registerUser = () => {
  
      dispatch
          (Registeruser( data,navigate )
          )
         
      }
  return (
<div className="container">
  <div id="connexion">
    <h1 className="title">Hellø Wørld</h1>
    <p className="paragraphe">
      Veuillez entrer vos détails personnel et démarrez votre journée sur Hellø
      Wørld
    </p>
    <a href="#" className="btn-link connexion">
      Se connecter
    </a>
  </div>
  <div id="inscription">
    <h1 className="title">Créer un compte</h1>
    <p className="paragraphe">Veuillez remplir tous les champs</p>
    
      <div className="group-form">
        <input type="text" placeholder="name" 
         onChange={(e) => setName(e.target.value)}/>
        <div className="icon-user" />
      </div>
      <div className="group-form">
        <input type="email" placeholder="mail" 
        onChange={(e) => setEmail(e.target.value)}/>
        <div className="icon-mail" />
      </div>
      <div className="group-form">
        <input type="number"
        onChange={(e) => setPhone(e.target.value)} />
        <div className="icon-mail" />
      </div>
      <div className="group-form">
        <input type="password" placeholder="password"
        onChange={(e) => setPassword(e.target.value)} />
        <div className="icon-password" />
      </div>
       
      <div className="group-form">
        <button
       
          className="inscription"
          onClick={registerUser}
        >inscription</button>
      </div>
   
  </div>
</div>
  )
}

export default Register