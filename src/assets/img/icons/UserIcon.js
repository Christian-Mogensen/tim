import React from "react";

function UserIcon({value}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="19.285"
      viewBox="0 0 17 19.285"
    >
      <path
        fill={value ? "#707070" : "none"}
        stroke={value ? "none" : "#707070"}
        strokeWidth="1"
        d="M8.5 9.643a4.571 4.571 0 10-4.571-4.572A4.571 4.571 0 008.5 9.643zm1.811 1.714H6.689A6.19 6.19 0 00.5 17.546a1.238 1.238 0 001.238 1.238h13.525a1.236 1.236 0 001.237-1.238 6.19 6.19 0 00-6.189-6.189z"
      ></path>
    </svg>
  );
}

export default UserIcon;