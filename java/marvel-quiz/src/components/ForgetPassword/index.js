import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import { FirebaseContext } from '../Firebase/';

const ForgetPassword = () => {

    const firebase = useContext(FirebaseContext);

    const [email, setEmail] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

    }

    const disabled = email === "";

  return (
    <div className="signUpLoginBox">
      <div className="slContainer">
        <div className="formBoxLeftForget">
        </div>

        <div className="formBoxRight">
          <div className="formContent">

            <h2> Forgotten password ? </h2>
            <form onSubmit={handleSubmit}>

              <div className="inputBox">
                <input 
                  onChange={(e) => setEmail(e.target.value)} 
                  value={email} 
                  type="email" 
                  autoComplete="off" 
                  required
                />
                <label htmlFor="email"> Email </label>
              </div>

              <button disabled={disabled}>
                Recover Password
              </button>

            </form>

            <div className="linkContainer">
              <Link className="simpleLink" to="/login">
                New on Marvel Quizz ? Register
              </Link>
            </div>

          </div>
        </div>        
      </div>        
    </div>

  )
}

export default ForgetPassword