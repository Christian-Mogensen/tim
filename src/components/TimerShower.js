import React from 'react';

const TimerShower = () => {
  const timeShower = [
      {word:'one'},
      {word:'two'},
      {word:'three'},
  ]
    return (
  timeShower.map((t,i)=><div className='h-16 w-full grid place-content-center p-2 bg-purple-300'><h2>{t.word}</h2></div>)
    );
};

export default TimerShower;
