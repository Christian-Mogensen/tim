import React from 'react';

const FooterBtn = ({fun,icon, activeStop}) => {
  return <button onClick={fun} className={`hover:bg-slate-800 hover:text-white py-2 shadow-md transition-all bg-transparent border border-gray-600 rounded-lg grid place-content-center ${activeStop} `}>{icon}</button>;};

export default FooterBtn;
