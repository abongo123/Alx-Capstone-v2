import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebaseConfig'
import {doc, getDoc} from "firebase"



const profile = () => {
    const [user, setUser] = useState (null)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })

        return () => unsubscribe()
    }, [])

    return(
        <div className='profile-container'>
            <img src={user?.photoURL || "/images/profile.jpg"} alt='User profile' className='profile-image'></img>
            <span>{user ? user.displayName || "User" : "Guest"}</span>
        </div>
    )



}


export default profile