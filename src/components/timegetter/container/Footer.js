import {
  format,
  getDate,
  getHours,
  getMinutes,
  getMonth,
  getSeconds,
} from "date-fns";
import React, { useContext, useEffect, useState } from "react";
import { FaPlay, FaStop,FaArchive } from "react-icons/fa";
import { TimeContext } from "../../../context/timeContext";
import FooterBtn from "./FooterBtn";

const Footer = () => {
  const sec = getSeconds(new Date());
  const minut = getMinutes(new Date());
  const hours = getHours(new Date());
  const d = getDate(new Date());
  const m = getMonth(new Date());
  const fm = format(m, "MMM");
  const {
    setEndDay,
    setEndHour,
    setEndMin,
    setEndMonth,
    setStartDay,
    setStartMonth,
    setStartMin,
    setStartHour,
    setTrigger,
    trigger,
    setStarter,
    setStartSecond,
    setEndSecond,
    setEnder,
    kill,
    setKill,
    setTime,
    start,
    setStart,
  } = useContext(TimeContext);

  useEffect(() => {
    let interval = null;

    if (start) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [start, setTime]);
  const [archive, setArchive] = useState(false);

  const funcStart = () => {
    setStartSecond(sec);
    setStartDay(d);
    setStartMonth(fm);
    setStartMin(minut);
    setStartHour(hours);
    setTrigger(!trigger);
    setStart(true);
    setStarter(true);
  };

  const funcStop = () => {
    setEndSecond(sec);
    setEndDay(d);
    setEndHour(hours);
    setEndMin(minut);
    setEndMonth(fm);
    setTrigger(!trigger);
    setEnder(true);
    setStart(false);
    setKill(!kill);
    setArchive(!archive)
  };
  const funcArchive = () => {
    console.log('stuff is archive');
  }

  return (
    <footer className="grid w-full pt-2 mt-auto place-self-center">
      {!archive ? (
        <div className="w-full">
          {!trigger ? (
            <FooterBtn fun={funcStart} icon={<FaPlay />} />
          ) : (
            <FooterBtn
              activeStop="bg-gray-50 text-black stopbtnpulse"
              fun={funcStop}
              icon={<FaStop />}
            />
          )}
        </div>
      ) : (
        <div className="w-full ">
          
            <FooterBtn
              activeStop="bg-gray-50 text-inherit"
              fun={funcArchive}
              icon={<FaArchive />}
            />
        </div>
      )}
    </footer>
  );
};

export default Footer;
