import React from "react";

function MailIcon({ value }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="13"
      viewBox="0 0 17 13"
    >
      <path
        fill={value ? "#707070" : "none"}
        stroke={value ? "none" : "#707070"}
        strokeWidth="1"
        d="M8.5 9.5a2.388 2.388 0 01-1.474-.513L.5 3.913V11A1.5 1.5 0 002 12.5h13a1.5 1.5 0 001.5-1.5V3.913L9.975 8.991A2.407 2.407 0 018.5 9.5zM1.009 3.041L7.64 8.2a1.4 1.4 0 001.721 0l6.631-5.159A1.412 1.412 0 0016.5 2 1.5 1.5 0 0015 .5H2A1.5 1.5 0 00.5 2a1.319 1.319 0 00.509 1.041z"
      ></path>
    </svg>
  );
}

export default MailIcon;
