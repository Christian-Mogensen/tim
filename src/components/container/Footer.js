import React from 'react';
import { FaPause, FaPlay, FaStop } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";
import FooterBtn from './FooterBtn';


const Footer = () => {
    const funcStart = () =>{
        console.log('start');
    }
    const funcPause = () =>{
        console.log('pause');
    }
    const funcStop = () =>{
        console.log('stop');
    }
    const funcRestart = () =>{
        console.log('restart');
    }

    const footerData = [
        {icon:<FaPlay/>, function:funcStart},
        {icon:<FaPause/>, function:funcPause},
        {icon:<FaStop/>, function:funcStop},
        {icon:<VscDebugRestart/>, function:funcRestart,specStroke:'text-2xl'},
    ]
  return (
    
    <footer className='grid grid-cols-4 gap-2 w-4/5 place-self-center'>
    {footerData.map((b,i)=><FooterBtn key={i} fun={b.function} specStroke={b.specStroke} icon={b.icon} />)}
  </footer>  
  );
};

export default Footer;
