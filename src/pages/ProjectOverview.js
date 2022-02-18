import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useParams } from "react-router-dom";
import BriefIcon from "../assets/img/icons/BriefIcon";
import DocumentIcon from "../assets/img/icons/DocumentIcon";
import DollarIcon from "../assets/img/icons/DollarIcon";
import MailIcon from "../assets/img/icons/MailIcon";
import MobileIcon from "../assets/img/icons/MobileIcon";
import UserIcon from "../assets/img/icons/UserIcon";
import BackComp from "../components/btns/BackComp";
import { auth, db } from "../firebase/firebase";
import OverviewGridItem from "./projectcreation/OverviewGridItem";
import NavBtn from "../components/btns/NavBtn";
import PaginationBtn from "../components/btns/PaginationBtn";
import LogIcon from "../assets/img/icons/LogIcon";
import PaginationLeft from "../assets/img/icons/PaginationLeft";
import PaginationRight from "../assets/img/icons/PaginationRight";
import BBtn from "../components/btns/BBtn";

const ProjectOverview = () => {
  const { projectSlug } = useParams();
  const [projectName, setProjectName] = useState();
  const [clientName, setClientName] = useState();
  const [clientPhone, setClientPhone] = useState();
  const [clientEmail, setClientEmail] = useState();
  const [brief, setBrief] = useState();
  const [rate, setRate] = useState();

  const user = useAuthState(auth);
  const userId = user[0]?.uid;
  useEffect(() => {
    (async () => {
      const docRef = doc(db, "users", userId, `project/${projectSlug}`);
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
  const [emptyLog, setEmptyLog] = useState();
  const [logList, setLogList] = useState([]);

  // useEffect(()=>{
  //   setLogList(['fi', 'fy','fo','fum'])
  //   setEmptyLog(logList.length >= 0);

  // }, [])
  useEffect(() => {
    (async () => {
      const querySnapshot = await getDocs(
        collection(db, "users", userId, "project", projectSlug, "logs")
      );
      querySnapshot.forEach((doc) => {
        // console.log(doc.data());
        // console.log(logList);
        setLogList((prevLogList) => [ ...prevLogList, doc.id]);

        setEmptyLog(logList.length >= 0);
      });
    })();
  }, [user]);
  return (
    <div className="max-w-xl m-auto">
      <div className="flex items-center justify-between w-full">
        <BBtn />
        <div className="">
          <span className="text-[12px] tracking-widest capitalize ">
            {projectName} / logs
          </span>
        </div>
      </div>
      <div className="h-[42px]">
        <nav className="flex items-center justify-between">
          <div>
            <button
              className={`transitionspeed w-[120px] capitalize p-2 ${
                tab
                  ? "tracking-widest font-bold  text-md text-gray-600"
                  : "text-[10px] h-[44px]"
              } `}
              onClick={() => setTab(!tab)}
            >
              overview
            </button>
            <button
              className={`transitionspeed w-[120px] capitalize p-2 ${
                !tab
                  ? "tracking-widest font-bold  text-md text-gray-600"
                  : "text-[10px] h-[44px]"
              } `}
              onClick={() => setTab(!tab)}
            >
              logs
            </button>
          </div>
          {!tab && (
            <Link to="create-log">
              <NavBtn
                spcstyling={"text-white w-28 bg-gray-600"}
                val="create log"
              />
            </Link>
          )}
        </nav>
      </div>
      <div>
        {tab ? (
          <div className="w-full">
            <p className="py-4 text-base font-bold tracking-widest text-center capitalize">
              {projectName}
            </p>
            <figure className="w-full bg-gray-900 h-36 rounded-2xl"></figure>
            <div className="grid grid-cols-2 gap-3 py-3">
              <OverviewGridItem
                icon={<DocumentIcon value={true} />}
                val={projectName}
              />
              <OverviewGridItem
                icon={<UserIcon value={true} />}
                val={clientName}
              />
              <OverviewGridItem
                icon={<MailIcon value={true} />}
                val={clientEmail}
              />
              <OverviewGridItem
                icon={<MobileIcon value={true} />}
                val={clientPhone}
              />
              <OverviewGridItem icon={<DollarIcon value={true} />} val={rate} />
              <OverviewGridItem
                icon={<BriefIcon value={true} />}
                val={brief}
                span="col-span-2"
                iconplacement="flex"
              />
            </div>
          </div>
        ) : (
          <div>
            {emptyLog ? (
              <>
                <div className="  min-h-[500px]">
                  <div className="grid w-full gap-1">
                    {logList.map((p, i) => (
                      <Link key={i} to={`logs/${p}`}>
                        <button className="relative w-full p-2 text-left transition-all bg-gray-100 rounded hover:bg-gray-200 first-letter:capitalize">
                          {p}
                          <span className="absolute -translate-y-1/2 right-2 top-1/2">
                            <LogIcon />
                          </span>
                        </button>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center w-full">
                  <div className="flex gap-3">
                    {" "}
                    <PaginationBtn icon={<PaginationLeft />} />
                    <PaginationBtn icon={<PaginationRight />} />{" "}
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-gray-50 rounded h-[500px] grid place-content-center w-full">
                <p className="italic text-[12px] px-3 text-center">
                  {" "}
                  No logs has been started yet. Click the 'create log' button to
                  start a new one{" "}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectOverview;
