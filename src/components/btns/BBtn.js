import React from "react";
import { useNavigate } from "react-router-dom";
import BackIcon from "../../assets/img/icons/BackIcon";

const BBtn = () => {
  const navigate = useNavigate();
  return (
    <button
      className="grid w-8 h-8 gap-3 border border-gray-300 rounded cursor-pointer place-content-center"
      onClick={() => navigate(-1)}
    >
      <BackIcon />
    </button>
  );
};

export default BBtn;
