import React from "react";

function Icon({value}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="17"
      viewBox="0 0 12 17"
    >
      <path
        fill={value ? "#707070" : "none"}
        stroke={value ? "none" : "#707070"}
        strokeWidth="1"
        d="M9.5.5h-7a2 2 0 00-2 2v12a2 2 0 002 2h7a2 2 0 002-2v-12a2 2 0 00-2-2zM6 15.5a1 1 0 111-1 1 1 0 01-1 1zm3.5-13v10h-7v-10z"
      ></path>
    </svg>
  );
}

export default Icon;