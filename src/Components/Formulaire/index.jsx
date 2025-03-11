import './formulaire.css'
import React, { useState } from 'react';

function Formulaire() {

const [errors, setErrors] = useState ({})
const [values,setValues]=useState({
  name:"",
  email:"",
  password:""
})
const handleChange = (e) => {
  const {name, value} = e.target
  setValues({...values, [name]: value })
}

const handleSubmit = (e) => {
  e.preventDefault();
  if(!validateForm()) {
console.log('Formulaire invalide');
  }
  console.log(values)
}
const validateForm = () => {
  let error= {}
  if(!values.name) {
    error.name = "Nom est obligatoire"
  }
  if(!values.name) {
    error.email = "Email est obligatoire"
  }//regex email
  else if (!/\S+@\S+\.\S+/.test(values.email)){
    error.email = "Email invalide"
  }
  if(!values.password) {
    error.password = "Mot de passe est obligatoire"
  }
  setErrors(errors)
  return Object.keys(error).length === 0
}


  return (
    <>
      <div className="container">
        <h1 className="title">Formulaire d'inscription</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nom complet</label>
          <input type="text" id="name" name="name" value={values.name || ""} placeholder="Nom" onChange={(e)=> handleChange(e)}/>
          {errors.name && <div className="error">{errors.name}</div>}
          <label htmlFor="email">Adresse email</label>
          <input type="email" id="email" name="email" value={values.email || ""} placeholder="Email" onChange={(e)=> handleChange(e)}/>
          {errors.email && <div className="error">{errors.email}</div>}
          <label htmlFor="password">Mot de passe</label>
          <input type="password" id="password" name="password" value={values.password || ""} placeholder="Mot de passe" onChange={(e)=> handleChange(e)}/>
          {errors.password && <div className="error">{errors.password}</div>}
          <button type="submit">Enregistrer</button>
        </form>
      </div>
    </>
  )
}

export default Formulaire
