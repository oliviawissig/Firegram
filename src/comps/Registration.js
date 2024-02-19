import React, { useState, useEffect } from "react";
import { auth } from '../firebase/config';

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
                setUser({});
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

    const logout = async (event) => {
        event.preventDefault()
        auth.signOut().then(() => {
            setUser({});
        }).catch((error) => {
            console.log(error.message);
        });
    }
    
    return ( 
        <div>
            <h2>Register:</h2>
            <form>
                <label>New Email:
                    <input type="text" name="new-email" value={newEmail} onChange={(event) => setNewEmail(event.target.value)}/>
                </label>
                <label>New Password:
                    <input type="text" name="new-password" value={newPassword} onChange={(event) => setNewPassword(event.target.value)}/>
                </label>
                <button onClick={(event) => register(event)}>Create User</button>
            </form>

            <h2>Log In:</h2>
            <form>
                <label>Email:
                    <input type="text" name="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
                </label>
                <label>Password:
                    <input type="text" name="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                </label>
                <button onClick={(event) => login(event)}>Log In</button>
            </form>

            <h4>User logged in:</h4>
            {user.email}

            <button onClick={(event) => logout(event)}>Sign Out</button>

        </div>
     );
}

export default Registration;