import React, { useContext } from "react";
export default function Timer(props) {

  return (
    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-3xl">
      <span className="digits">
        {("0" + Math.floor((props.time / 3600000) % 24)).slice(-2)}:
      </span>
      <span className="digits">
        {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
      </span>
      <span className="digits">
        {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}
      </span>

    </div>
  );
}