import React from "react";
import PlayBtn from '../../assets/img/icons/PlayBtn'
import PauseBtn from '../../assets/img/icons/PauseBtn'
import MessageBtn from '../../assets/img/icons/MessageBtn'
import StopBtn from '../../assets/img/icons/StopBtn' 
export default function ControlButtons(props) {
const StartButton = (
	<div className="text-center text-white bg-gray-600 w-full rounded-lg h-10 grid place-content-center"
		onClick={props.handleStart}>
	<PlayBtn />
	</div>
);
const ActiveButtons = (
    <>
    {props.isPaused ?
	<div className="w-full h-full text-center text-white flex gap-3">
	<div className="bg-gray-600 w-full rounded-lg h-10 grid place-content-center cursor-pointer"
		onClick={props.handlePauseResume}>
		 <PlayBtn />
	</div>
	<div className="bg-gray-600 w-full rounded-lg h-10 grid place-content-center cursor-pointer"
		onClick={props.handleResume}>
    <MessageBtn />
	</div>
	</div>
    :	<div className="w-full h-full text-center flex-col  text-white flex gap-3">
	<div className="bg-gray-600 w-full rounded-lg h-10 grid place-content-center cursor-pointer"
		onClick={props.handlePauseResume}>
        <StopBtn />
	</div>
	</div>
    }
    </>
);

return (
	<div className="Control-Buttons">
	<div>{props.active ? ActiveButtons : StartButton}</div>
	</div>
);
}
