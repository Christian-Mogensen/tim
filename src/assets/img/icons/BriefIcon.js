import React from "react";

function Icon({value}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="16"
      viewBox="0 0 17 16"
    >
      <path
        fill={value ? "#707070" : "none"}
        stroke={value ? "none" : "#707070"}
        strokeWidth="1"
        d="M10.5 11a.5.5 0 01-.5.5H7a.5.5 0 01-.5-.5V9.5h-6V14A1.538 1.538 0 002 15.5h13a1.538 1.538 0 001.5-1.5V9.5h-6zM15 3.5h-2.5V2A1.538 1.538 0 0011 .5H6A1.538 1.538 0 004.5 2v1.5H2A1.538 1.538 0 00.5 5v3.5h16V5A1.538 1.538 0 0015 3.5zm-4 0H6V2h5z"
      ></path>
    </svg>
  );
}

export default Icon;