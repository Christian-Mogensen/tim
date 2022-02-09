import React from "react";
import Footer from "../container/Footer";
import TimerShower from "./TimerShower";

const TimeGetter = ({span}) => {
  return (
    
      <div className={`flex ${span} flex-col h-76 w-full gap-1 p-6 text-gray-200 bg-gray-700 rounded-lg`}>
        <TimerShower />
        <Footer />
      </div>
    

  );
};

export default TimeGetter;
