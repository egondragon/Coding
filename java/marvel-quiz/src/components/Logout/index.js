import React, { useState, useEffect } from 'react'
import { signOut } from "firebase/auth";
import {auth} from "../Firebase/firebaseConfig";

const Logout = () => {

    const [checked, setChecked] = useState(false);

    useEffect(()=> {
        if (checked) {
            console.log("Logout");
            signOut(auth).then(() => {
                console.log("You are disconnected");
                setTimeout(() => {

                }, 1000);
            }).catch((error) => {
                console.log("Error on signout");
            });
        }
    }, [checked]);

    const handleChange = event => {
        setChecked(event.target.checked);
    }

    return (
        <div className="logoutContainer">
            <label className="switch">
                <input
                    onChange={ handleChange }
                    type="checkbox"
                    checked={checked}
                />
                <span className="slider round">

                </span>
            </label>
        </div>
    )
}

export default Logout
