import { createContext, useMemo, useState } from "react";

const TimeContext = createContext();

const TimeProvider = ({ children }) => {
  const [trigger, setTrigger] = useState(false);
  const [starter, setStarter] = useState(false);
  const [ender, setEnder] = useState(false);
  const [kill, setKill] = useState(false);
  // time related stuff
  // start time
  const [startSecond, setStartSecond] = useState(null);
  const [startMin, setStartMin] = useState(null);
  const [startHour, setStartHour] = useState(null);
  const [startDay, setStartDay] = useState(null);
  const [startMonth, setStartMonth] = useState(null);

  // elapses time
  const [s, setS] = useState(null);
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);
  // end time
  const [endSecond, setEndSecond] = useState(null);
  const [endMin, setEndMin] = useState(null);
  const [endHour, setEndHour] = useState(null);
  const [endDay, setEndDay] = useState(null);
  const [endMonth, setEndMonth] = useState(null);

  const valueLib = useMemo(
    () => ({
      startDay,
      setStartDay,
      startMonth,
      setStartMonth,
      startMin,
      setStartMin,
      startHour,
      setStartHour,
      trigger,
      setTrigger,
      s,
      setS,
      time,
      setTime,
      start,
      setStart,
      endDay,
      endHour,
      endMin,
      endMonth,
      setEndDay,
      setEndHour,
      setEndMin,
      setEndMonth,
      starter,
      setStarter,
      endSecond,
      setEndSecond,
      startSecond,
      setStartSecond,
      ender,
      setEnder,
      kill, setKill
    }),
    [
      kill,
      time,
      start,
      startDay,
      startMonth,
      startMin,
      startHour,
      trigger,
      endDay,
      endHour,
      endMin,
      endMonth,
      starter,
      startSecond,
      endSecond,
      ender,
      s,
    ]
  );
  return (
    <TimeContext.Provider value={valueLib}>{children}</TimeContext.Provider>
  );
};
export { TimeContext, TimeProvider };
