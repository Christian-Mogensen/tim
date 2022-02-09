import {
  format,
  getDate,
  getHours,
  getMinutes,
  getMonth,
  getSeconds,
} from "date-fns";
import React, { useContext, useEffect } from "react";
import { FaPlay, FaStop } from "react-icons/fa";
import { TimeContext } from "../../context/timeContext";
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
    ender,
    s,
    setS,
    time,
    kill,setKill,
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
    setStart(false)
    setKill(!kill)
  };

  return (
    <footer className="grid w-full pt-2 mt-auto place-self-center">
      {!trigger ? (
        <FooterBtn fun={funcStart} icon={<FaPlay />} />
      ) : (
        <FooterBtn activeStop='bg-gray-50 text-black stopbtnpulse' fun={funcStop} icon={<FaStop />} />
      )}
    </footer>
  );
};

export default Footer;
