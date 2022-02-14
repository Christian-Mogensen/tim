import React from "react";
import Logo from "../../assets/img/icons/Logo";

const LogoBtn = () => {
  return (
    <div className=" flex gap-2 items-center">
      <div className=" w-8 ">
        <Logo />
      </div>
      <span className="font-bold tracking-widest"> TIM</span>
    </div>
  );
};

export default LogoBtn;
