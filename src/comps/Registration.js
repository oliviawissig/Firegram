import React, { useState, useEffect } from "react";
import { auth } from '../firebase/config';

import '../styling/registration.css'

function Registration() {
    const [newEmail, setNewEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [user, setUser] = useState({});

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if(user){
                setUser(user);
            }else{
                setUser(user);
            }
        })
    }, [])

    const register = async (event) => {
        event.preventDefault()
        try{
            const user = await auth.createUserWithEmailAndPassword(newEmail, newPassword);
        }catch(error){
            console.log(error.message);
        }
        setNewEmail("");
        setNewPassword("");

        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/v8/firebase.User
            // TODO: user is logged in, send email verification
            user.sendEmailVerification().then(() => {
              // Email verification sent!
              console.log("Email verification sent!");
            });
        } else {
            ; //nothing, there was an error registering the user
        }
    }

    const login = async (event) => {
        event.preventDefault()
        try{
            const user = await auth.signInWithEmailAndPassword(email, password);
        }catch(error){
            console.log(error.message);
        }
        setEmail("");
        setPassword("");
    }

    const resendVEmail = async (event) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/v8/firebase.User
            // TODO: user is logged in, send email verification
            auth.currentUser.sendEmailVerification().then(() => {
              // Email verification sent!
              console.log("Email verification sent!");
            });
        } else {
            ; //nothing, there was an error registering the user
            console.log("No user found, no email verification sent!");
        }
    }

    const logout = async (event) => {
        event.preventDefault()
        auth.signOut().then(() => {
            setUser({});
        }).catch((error) => {
            console.log(error.message);
        });
    }
    
    return ( 
        <div className="user-registration">
            <h4>Register:</h4>
            <form className='registration-form'>
                <label>New Email:&nbsp;
                    <input type="text" name="new-email" value={newEmail} onChange={(event) => setNewEmail(event.target.value)}/>
                </label>&nbsp;&nbsp;
                <div className='mobile-spacing'></div>
                <label>New Password:&nbsp;
                    <input type="text" name="new-password" value={newPassword} onChange={(event) => setNewPassword(event.target.value)}/>
                </label>&nbsp;
                <div className='mobile-spacing'></div>
                <button onClick={(event) => register(event)}>Create User</button>
            </form>

            <h4>Log In:</h4>
            <form className='registration-form'>
                <label>Email: &nbsp;
                    <input type="text" name="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
                </label>&nbsp;&nbsp;
                <div className='mobile-spacing'></div>
                <label>Password: &nbsp;
                    <input type="text" name="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                </label>&nbsp;
                <div className='mobile-spacing'></div>
                <button onClick={(event) => login(event)}>Log In</button>
            </form>
            <br></br>
            <div>
                <h4 style={{marginBottom:0,display:'inline-block'}}>Current User:&nbsp;</h4>
                <p style={{display:'inline-block'}}>{user ? user.email : "N/A"}</p>
                <br></br>
            </div>
            <div>
                <h4 style={{display:'inline-block'}}>Email Verified?&nbsp;</h4>
                <p className={(user?.emailVerified ? 'green-true' : 'red-false')}>{user?.emailVerified ? 'true' : 'false'}</p>
                <br></br>
            </div>
            <button onClick={(event) => logout(event)}>Sign Out</button>&nbsp;&nbsp;
            <button className='email-v-btn' onClick={(event) => resendVEmail(event)}>Resend Verification Email</button>
        </div>
     );
}

export default Registration;