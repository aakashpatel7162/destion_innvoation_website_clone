import React, { useState } from "react";
import  Login from './Login'
import  SignUp from './SignUp'


export default function Auth({userLogin}) {
  const [isUserSignup,setIsUserSignup]=useState(true)
  const handleUserStatus=()=>{
    userLogin(true)

  }

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto p-2">
{isUserSignup? (<Login setIsUserSignup={setIsUserSignup} userLoged={handleUserStatus}/>):
      (<SignUp setIsUserSignup={setIsUserSignup}/>)}
    </div>
  );
}
