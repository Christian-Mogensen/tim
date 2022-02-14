import React from "react";
import { Link } from "react-router-dom";
import NavBtn from "./NavBtn";

const NoAcc = ({spcplacement}) => {
  return (
    <div className={`${spcplacement} text-[12px]`}>
      Don't have an account?{" "}
      <Link to="/signup">
        {" "}
        <NavBtn spcstyling="bg-gray-600 text-white ml-2" val="Sign up" />{" "}
      </Link>
    </div>
  );
};

export default NoAcc;
