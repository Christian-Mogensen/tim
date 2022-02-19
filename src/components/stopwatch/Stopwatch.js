import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import ControlButtons from "./ControlButtons";
import { CircularProgressbar } from "react-circular-progressbar";
import DocumentIcon from "../../assets/img/icons/DocumentIcon";
import FormInput from "../form/FormInput";
import BriefIcon from "../../assets/img/icons/BriefIcon";
import CheckIcon from "../../assets/img/icons/CheckIcon";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import { useNavigate, useParams } from "react-router-dom";
function StopWatch({dateprop,yearprop,monthprop}) {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  const [resume, setResume] = useState(false);
  const [resumeText, setResumeText] = useState("");
  const [resumeTitle, setResumeTitle] = useState("");
  useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
    setResume(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
    setResume(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
    setResume(false);
  };
  const resumeForm = () => {
    setResume(true);
  };
  let elapseSec = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
  let elapseMin = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
  let elapseHour = ("0" + Math.floor((time / 3600000) % 24)).slice(-2);


  const user = useAuthState(auth);
  const userId = user[0]?.uid;
  const {projectSlug} = useParams()
  
  const navigate = useNavigate();

  const createDoc = async(e)=>{

    
    
    await addDoc(collection(db, 'users', userId , 'project',projectSlug,'logs'), {
      title:{dateprop,monthprop,yearprop},
      resume:{resumeTitle,resumeText},
      elapsed:{elapseHour,elapseMin,elapseSec},    
      creation: serverTimestamp() 
    });
    setResume(false)
    setTime(0);
    setResumeTitle(e.target.value = '')
    setResumeText(e.target.value = '')
    navigate(-1)
    
      };
    
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-72 circleBar ">
        <CircularProgressbar value={elapseHour} maxValue={24} />

        <div className=" circleBar w-[95%] h-[95%] absolute top-1/2 -translate-y-1/2  left-1/2 -translate-x-1/2">
          <CircularProgressbar value={elapseMin} maxValue={60} />
        </div>
        <div className=" circleBar w-[90%] h-[90%] absolute top-1/2 -translate-y-1/2  left-1/2 -translate-x-1/2">
          <CircularProgressbar value={elapseSec} maxValue={60} />
        </div>
        <Timer time={time} />
      </div>
      <div className="w-full">
        <ControlButtons
          active={isActive}
          isPaused={isPaused}
          handleStart={handleStart}
          handlePauseResume={handlePauseResume}
          handleReset={handleReset}
          handleResume={resumeForm}
        />
      </div>
      {resume && (
        <div className="grid gap-3 p-3">
          <header>

<h2>Logged time</h2>
          <h3>{dateprop} {monthprop} {yearprop}</h3>
          <h3>
            {elapseHour}:{elapseMin}:{elapseSec}
          </h3>
          </header>
          <FormInput
            type="text"
            value={resumeTitle}
            onChange={(e) => setResumeTitle(e.target.value)}
            placeholder="Title of log"
            icon={<DocumentIcon value={resumeTitle} />}
          />
          <div className="relative w-full">
            <textarea
              className="p-2 pl-10 rounded transition-all bg-gray-50 relative outline-none placeholder:text-[12px] w-full"
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
              placeholder="Short summary of log"
              rows="4"
              cols="50"
            ></textarea>

            <div className="absolute left-2 top-3">
              <BriefIcon value={resumeText} />
            </div>
          </div>
          <button onClick={createDoc} className="bg-gray-600 w-full rounded-lg h-10 grid place-content-center cursor-pointer">
            <CheckIcon />
          </button>
        </div>
      )}
    </div>
  );
}

export default StopWatch;
