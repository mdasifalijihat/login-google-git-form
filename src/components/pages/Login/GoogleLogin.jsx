import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { auth } from "../../firebase/firebase.init";
import { FaGoogle } from "react-icons/fa";

const GoogleLogin = () => {

  const provider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    console.log("google login ");
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <button className=" flex justify-center items-center gap-2 " onClick={handleGoogleLogin}> Google Login <FaGoogle></FaGoogle> </button>
    </div>
  );
};

export default GoogleLogin;
