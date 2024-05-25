import React, {useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
// import { FirebaseContext } from '../Firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase/firebaseConfig';

const Signup = (props) => {

  const navigate = useNavigate();

  const data = {
    pseudo: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const [loginData, setLoginData] = useState(data);
  const [error, setError] = useState('');


  const handleChange = e => {
    setLoginData({...loginData, [e.target.id]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault();
    const {email, password} = loginData;
    // firebase.signupUser(email, password)
    createUserWithEmailAndPassword(auth, email, password)
    .then(user => {
      setLoginData({...data});
      navigate('/welcome');
    }).catch(error => {
      setError(error)
      setLoginData({...data});
    })
  }

  // Destructuring
  const { pseudo, email, password, confirmPassword } = loginData;

  const btn = pseudo === '' ||  email === '' || password === '' || password !== confirmPassword
              ? <button disabled> Register </button> : <button> Register </button>
  
  // Gestion d'erreur
  const errMsg = error !== '' && <span> {error.message} </span>;

  return (
    <div className="signUpLoginBox">
      <div className="slContainer">
        
        <div className="formBoxLeftSignup">
        </div>

        <div className="formBoxRight">
          <div className="formContent">

          {errMsg}
          <h2> Register </h2>
            <form onSubmit={handleSubmit}>

              <div className="inputBox">
                <input 
                  onChange={handleChange} 
                  value={pseudo} 
                  type="text" 
                  id="pseudo" 
                  autoComplete="off" 
                  required
                />
                <label htmlFor="pseudo"> Pseudo </label>
              </div>

              <div className="inputBox">
                <input 
                  onChange={handleChange} 
                  value={email} 
                  type="email" 
                  id="email" 
                  autoComplete="off" 
                  required
                />
                <label htmlFor="email"> Email </label>
              </div>

              <div className="inputBox">
                <input
                  onChange={handleChange} 
                  value={password} 
                  type="password" 
                  id="password" 
                  autoComplete="off" 
                  required
                />
                <label htmlFor="password"> Password </label>
              </div>

              <div className="inputBox">
                <input onChange={handleChange} value={confirmPassword} type="password" id="confirmPassword" autoComplete="off" required/>
                <label htmlFor="confirmPassword"> Confirm password </label>
              </div>

              {btn}

            </form>
            <div className="linkContainer">
              <Link className="simpleLink" to="/login">
                Already registered - connect
              </Link>
            </div>
          </div>
        </div>

      </div>        
    </div>
  )
}

export default Signup