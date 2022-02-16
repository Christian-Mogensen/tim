import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import BackComp from "../components/btns/BackComp";
import { auth, db } from "../firebase/firebase";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import OverviewGridItem from "./projectcreation/OverviewGridItem";
import DocumentIcon from "../assets/img/icons/DocumentIcon";
import UserIcon from "../assets/img/icons/UserIcon";
import MailIcon from "../assets/img/icons/MailIcon";
import MobileIcon from '../assets/img/icons/MobileIcon'
import DollarIcon from '../assets/img/icons/DollarIcon'
import BriefIcon from '../assets/img/icons/BriefIcon'

const ProjectOverview = () => {
  const { slug } = useParams();
  const [projectName, setProjectName] = useState();
  const [clientName, setClientName] = useState();
  const [clientPhone, setClientPhone] = useState();
  const [clientEmail, setClientEmail] = useState();
  const [brief, setBrief] = useState();
  const [rate, setRate] = useState();

  const user = useAuthState(auth);
  // console.log(user);
  const userId = user[0]?.uid;
  useEffect(() => {
    (async () => {
      const docRef = doc(db, "users", userId, `project/${slug}`);
      const docSnap = await getDoc(docRef);
      const docData = docSnap.data();

      // console.log(docData.project);
      if (docSnap.exists()) {
        setProjectName(docData.project);
        setClientName(docData.name);
        setClientPhone(docData.phone);
        setClientEmail(docData.email);
        setBrief(docData.brief);
        setRate(docData.rate);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })();
  }, []);

  const [tab, setTab] = useState(true);

  return (
    <div className="max-w-xl m-auto">
    <div className="flex items-center justify-between w-full">

      <BackComp href="/dashboard" />
      <div className="">
        <span className="text-[12px] tracking-widest capitalize ">
          {projectName} / logs
        </span>
      </div>
      </div>
<div className="h-[42px]">

      <div>
        <button
          className={`transitionspeed w-[120px] capitalize p-2 border-b-2 ${
            tab
            ? "tracking-widest font-bold  text-md border-gray-600 text-gray-600"
            : "text-[10px] border-transparent h-[44px]"
          } `}
          onClick={() => setTab(!tab)}
          >
          overview
        </button>
        <button
          className={`transitionspeed w-[120px] capitalize p-2 border-b-2 ${
            !tab
            ? "tracking-widest font-bold  text-md border-gray-600 text-gray-600"
            : "text-[10px] border-transparent h-[44px]"
          } `}
          onClick={() => setTab(!tab)}
          >
          logs
        </button>
      </div>
          </div>
      <div>
        {tab ?  
        <div className="w-full"> 
        <p className="py-4 text-base font-bold tracking-widest text-center capitalize">{projectName}</p>
        <figure className="w-full bg-gray-900 h-36 rounded-2xl"></figure>
        <div className="grid grid-cols-2 gap-3 py-3">
<OverviewGridItem icon={<DocumentIcon />} val={projectName} />
<OverviewGridItem icon={<UserIcon />} val={clientName} />
<OverviewGridItem icon={<MailIcon />} val={clientEmail} />
<OverviewGridItem icon={<MobileIcon />} val={clientPhone} />
<OverviewGridItem icon={<DollarIcon />} val={rate} />
<OverviewGridItem icon={<BriefIcon />} val={brief} span="col-span-2" iconplacement="flex" />
        </div>
        </div>
        : 
        <div className="w-full bg-red-500 h-96">
          </div>}
      </div>
    </div>
  );
};

export default ProjectOverview;
