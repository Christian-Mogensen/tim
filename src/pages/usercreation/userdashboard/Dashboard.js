import React, { useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate, useParams } from "react-router-dom";
import { auth, db, logout } from "../../../firebase/firebase";

import { query, collection, getDocs, where, doc, getDoc } from "firebase/firestore";
import NavBtn from "../../../components/btns/NavBtn";
import { ProjectContext } from "../../../context/createProject";
import { set } from "date-fns";

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

  


  const {      projectname,
    setProjectname,
    clientname,
    setClientname,
    clientEmail,
    setClientEmail,
    clientPhonenumber,
    setClientPhonenumber,
    rate,
    setRate,
    brief,
    setBrief,}=useContext(ProjectContext)
  const { slug } = useParams();

  const [projNam, setProjNam] = useState()
  // const [cliNam, setCliNam] = useState()
  // const [cliEm, setCliEm] = useState()
  // const [cliPhone, setCliPhone] = useState()
  // const [money, setMoney] = useState()
  // const [bri, setBri] = useState()

  
  
  useEffect(()=>{
    (async()=>{
      
      const userId = await user?.uid
      const documentRef = collection(db, "users", userId, "project");



      const docRef = doc(db, "users", userId, 'project/tesla' );
      const docSnap = await getDoc(docRef);
      const docData = docSnap.data()
      

      
      
      if (docSnap.exists()) {
        // console.log("Document data:", docData);
        setProjNam(docData.project)
        // setCliNam(docData.name)
        // setCliEm(docData.email)
        // setCliPhone(docData.phone)
        // setMoney(docData.money)
        // setBri(docData.brief)
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })()
  },[user])

  return (
    <div className="max-w-7xl">
      <div className="relative right-0 max-w-xl m-auto">

<nav className="flex justify-between">

        <h1>Projects</h1>
        <Link to="createprojectform"><NavBtn spcstyling={'bg-gray-600 text-white w-24'} val="create project" /></Link>
</nav>
        <button className="w-full p-2 text-left bg-red-400 rounded first-letter:capitalize">{projNam}</button>

      </div>
    </div>
  );
}

export default Dashboard;