import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../../firebase/firebase.init';

const LogOut = () => {


    const handleLogOut = () => {
        console.log('logout parson '); 
        signOut(auth).then(() => {
            console.log('signOut success')
        }).catch((error) => {
            console.log(error)
        })
    }


    return (
        <div>
            <button onClick={handleLogOut} className='btn'> Log Out </button>
        </div>
    );
};

export default LogOut;