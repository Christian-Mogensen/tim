import React from "react";

function DocumentIcon({value}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13.707"
      height="17.707"
      viewBox="0 0 13.707 17.707"
    >
      <path
        fill={value ? "#707070" : "none"}
        stroke={value ? "none" : "#707070"}
        strokeWidth="1"
        d="M8.5 1.207v4h4zm-1 4v-4H2a1.5 1.5 0 00-1.5 1.5v13a1.5 1.5 0 001.5 1.5h9a1.5 1.5 0 001.5-1.5v-9.5H8.528a1 1 0 01-1.028-1zm1.5 9H4a.5.5 0 010-1h5a.5.5 0 010 1zm0-2H4a.5.5 0 110-1h5a.5.5 0 010 1zm.5-2.5a.5.5 0 01-.5.5H4a.5.5 0 110-1h5a.5.5 0 01.5.5z"
      ></path>
    </svg>
  );
}

export default DocumentIcon;