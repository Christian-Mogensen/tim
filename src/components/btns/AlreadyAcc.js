import React from "react";
import { Link } from "react-router-dom";
import NavBtn from "./NavBtn";

const AlreadyAcc = ({spcplacement}) => {
  return (
    <div className={`${spcplacement} text-[12px]`}>
      Already have an account?{" "}
      <Link to="/signin">
        {" "}
        <NavBtn spcstyling={`bg-gray-600 text-white ml-2`} val="Sign in" />{" "}
      </Link>
    </div>
  );
};

export default AlreadyAcc;
