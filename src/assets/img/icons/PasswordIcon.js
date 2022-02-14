import React from "react";

function PasswordIcon({ value }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 17 17"
    >
      <path
        fill={value ? "#707070" : "none"}
        stroke={value ? "none" : "#707070"}
        strokeWidth="1"
        d="M9.322 11.241l-1.069 1.012a.587.587 0 01-.5.247H6.5v1.25a.748.748 0 01-.75.75H4.5v1.25a.748.748 0 01-.75.75h-2.5a.749.749 0 01-.75-.75v-2.5a.75.75 0 01.22-.531l5.04-5.041a5.489 5.489 0 113.562 3.563zM12.25 6A1.25 1.25 0 1011 4.75 1.25 1.25 0 0012.25 6z"
      ></path>
    </svg>
  );
}

export default PasswordIcon;
