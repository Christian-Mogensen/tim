import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import ArrowDown from "../../../assets/img/icons/ArrorDown";
import DocIcon from "../../../assets/img/icons/DocIcon";
import PaginationLeft from "../../../assets/img/icons/PaginationLeft";
import PaginationRight from "../../../assets/img/icons/PaginationRight";
import NavBtn from "../../../components/btns/NavBtn";
import PaginationBtn from "../../../components/btns/PaginationBtn";
import { auth, db } from "../../../firebase/firebase";
function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");

    fetchUserName();
  }, [user, loading]);

  const [projectList, setProjectList] = useState([]);

  const [emptyProj, setEmptyProj] = useState();
  useEffect(() => {
    (async () => {
      const userId = user?.uid;
      const querySnapshot = await getDocs(
        collection(db, "users", userId, "project")
      );
      querySnapshot.forEach((doc) => {
        setProjectList((prevProjectList) => [
          ...prevProjectList,
          doc.data().project,
        ]);
        setEmptyProj(projectList.length >= 0);
      });
    })();
  }, [user]);

  const [yeardatefilter, setYeardatefilter] = useState(2022);
  return (
    <div className="max-w-7xl">
      <div className="relative right-0 max-w-xl m-auto">
        <nav className="grid w-full grid-cols-2 gap-2 pb-4">
          <h1 className="text-base font-bold tracking-wide text-gray-600 ">
            Projects
          </h1>
          <Link
            to="createprojectform"
            className="grid w-full place-content-end"
          >
            <NavBtn
              spcstyling={"text-white w-28 bg-gray-600"}
              val="create project"
            />
          </Link>
          <div className="grid w-20 h-8 grid-cols-3 overflow-hidden border border-gray-300 rounded ">
            <span className="col-span-2 text-base tracking-wider place-self-center">
              {yeardatefilter}
            </span>
            <button className="grid w-full h-full place-content-center hover:bg-gray-600 yearhovereffect">
              <ArrowDown hover="hovereffectchild" />
            </button>
          </div>
        </nav>
        {emptyProj ? (<>
          <div className="  min-h-[500px]">
            <div className="grid w-full gap-1">
              {projectList.map((p, i) => (
                <Link key={i} to={`${p}`}>
                  <button
                    
                    className="relative w-full p-2 text-left transition-all bg-gray-100 rounded hover:bg-gray-200 first-letter:capitalize"
                  >
                    {p}
                    <span className="absolute -translate-y-1/2 right-2 top-1/2">
                      <DocIcon />
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
              No project has been started yet. Start new project{" "}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
