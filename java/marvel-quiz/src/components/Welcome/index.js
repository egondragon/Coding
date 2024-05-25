import React, { useState, Fragment, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase/firebaseConfig';
import {useNavigate} from 'react-router-dom';
import Quiz from '../Quiz'
import Logout from '../Logout'

const Welcome = (props) => {

  const navigate = useNavigate();
  const [userSession, setUserSession] = useState(null);

  useEffect(() => {
    const listener = onAuthStateChanged(auth, (user) => {
      user ? setUserSession(user): navigate('/')
    })
    return listener();
  }, [])

  return userSession === null ? (
    <Fragment>
      <div className="loader">

      </div>
    </Fragment>
  ) : (
    <div className="quiz-bg">
        <div className="container">
            <Logout/>
            <Quiz/>
        </div>
    </div>

  )

}

export default Welcome
