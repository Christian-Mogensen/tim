import { getDate, getMonth, getYear } from "date-fns";
import { format } from "date-fns/esm";
import React, { useContext } from "react";
import { TimeContext } from "../../context/timeContext";

const TimerShower = () => {
  const {
    time,
    startMin,
    startHour,
    starter,
    endMin,
    endHour,
    ender,
  } = useContext(TimeContext);
  const starttimesetter = `${startHour}:${startMin}`;
  const endtimesetter = `${endHour}:${endMin}`;

const d = getDate(new Date())
const m = getMonth(new Date())
const y = getYear(new Date())
const fm = format(m, "MMMM")
  return (
    <div className="relative">
      <h2 className="absolute text-xl text-right right-2 top-2">
        <span className="block text-5xl">{d}</span>
        <span className="block">{fm}</span>
        <span className="block">{y}</span>
      </h2>
      {starter && (<><div className="grid items-center w-full h-16 grid-cols-3 p-2">
        <span className="px-4 font-bold text-right capitalize ">
          start
        </span>
        
          <h3 id="start" className="col-span-2">
            {starttimesetter}
          </h3>
        
      </div></>)}
      {starter && ( <><div className="grid items-center w-full h-16 grid-cols-3 p-2">
        
        <span className="px-4 font-bold text-right capitalize ">
          elapsed
        </span>
       
          <h3 id="elapsed" className="col-span-2">
            <span id="timeHour">
              {("0" + Math.floor((time / 3600000) % 60)).slice(-2)}
            </span>:
            <span id="timeMinute">
              {("0" + Math.floor((time / 60000) % 60)).slice(-2)}
            </span>:
            <span id="timeSecond">
              {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
            </span>
          </h3>
        
      </div></>)}
      {ender && (<><div className="grid items-center w-full h-16 grid-cols-3 p-2">
        <span className="px-4 font-bold text-right capitalize ">
          end
        </span>
        
          <h3 id="end" className="col-span-2">
            {endtimesetter}
          </h3>
        
      </div></>)}
    </div>
  );
};

export default TimerShower;
