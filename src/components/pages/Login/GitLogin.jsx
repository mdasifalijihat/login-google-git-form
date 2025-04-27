import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth } from '../../firebase/firebase.init';

const GitLogin = () => {

    const provider = new GithubAuthProvider();
     const handleGitHumLogin = () => {
        console.log(' GitHum Login ');
        signInWithPopup(auth, provider).then((result) => {
            console.log(result)
        }).catch((error) => {
            console.log(error)
        })
     }
   
    return (
        <div>
            <button onClick={handleGitHumLogin}> GitHub Login </button>
        </div>
    );
};

export default GitLogin;