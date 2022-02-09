import React from 'react';

const FooterBtn = ({fun,icon, specStroke}) => {
  return <button onClick={fun} className={`w-full h-full py-4 shadow-sm bg-transparent border border-gray-800 rounded-lg grid place-content-center text-gray-800 ${specStroke} `}>{icon}</button>;
};

export default FooterBtn;
