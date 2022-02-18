import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import BackComp from "../components/btns/BackComp";
import { auth, db } from "../firebase/firebase";

const Prototype = () => {
  const { projectSlug } = useParams();
const [projectName, setProjectName] = useState()

  const user = useAuthState(auth);
console.log(user);
const userId = user[0]?.uid;
  useEffect(()=>{
    (async()=>{

      const docRef = doc(db, "users", userId, `project/${projectSlug}`);
      const docSnap = await getDoc(docRef);
      const docData = docSnap.data()

      console.log(docData.project);
      if (docSnap.exists()) {
        setProjectName(docData.project)
        // setStateAlphaVal({x:docData.brightness.x})
      // setColorTheme(docData.color)
      // setScene(docData.scene)
      // console.log(stateAlphaVal);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })()
  },[])








  return (
<>
    <BackComp href='/dashboard'/>
    <div className="w-full bg-gray-50 min-h-[calc(100vh-162px)] grid place-content-center">
      <span className="tracking-widest capitalize text-7xl">{projectName}</span></div>
</>
  );
}

export default Prototype;
