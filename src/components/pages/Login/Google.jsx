import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { auth } from "../../firebase/firebase.init";

const Google = () => {

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
      <button onClick={handleGoogleLogin}> Google Login </button>
    </div>
  );
};

export default Google;
