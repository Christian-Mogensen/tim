import React from "react";

function Icon({hover}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11.87"
      height="7.137"
      viewBox="0 0 11.87 7.137"
    >
      <path
        fill="#707070"
        className={hover}
        d="M11.576 194.03l-4.724 4.758a1.31 1.31 0 01-.873.349 1.185 1.185 0 01-.841-.348L.413 194.03a1.142 1.142 0 01-.291-1.294 1.2 1.2 0 011.1-.736H10.7a1.19 1.19 0 011.1.734 1.174 1.174 0 01-.224 1.296z"
        transform="translate(-.033 -192)"
      ></path>
    </svg>
  );
}

export default Icon;
