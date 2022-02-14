import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import LogOut from "../../assets/img/icons/LogOut";
import { auth, logout } from "../../firebase/firebase";

const SignOut = () => {
  const [name] = useAuthState(auth);
  return (
    <>
      <li>
        <Link to="/dashboard">
          <div className="flex gap-2 items-center">
            <div className="h-6 w-6 bg-red-500 rounded-full"></div>
            <div>{name}</div>
          </div>
        </Link>
      </li>
      <div className="h-8 w-[1px] bg-gray-600"></div>
      <li className="flex gap-2 items-center cursor-pointer" onClick={logout}>
        <span>Log out</span>
        <div className="w-3">
          <LogOut />
        </div>
      </li>
    </>
  );
};

export default SignOut;
