import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth } from '../../firebase/firebase.init';
import { FaGithub } from 'react-icons/fa';

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
            <button className='flex justify-center items-center gap-2' onClick={handleGitHumLogin}> GitHub Login <FaGithub></FaGithub> </button>
        </div>
    );
};

export default GitLogin;