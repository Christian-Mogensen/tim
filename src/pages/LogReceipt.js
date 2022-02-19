import {
  collection,
  doc,
  getDoc,
  getDocFromCache,
  getDocFromServer,
  query,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import BackIcon from "../assets/img/icons/BackIcon";
import BackComp from "../components/btns/BackComp";
import BBtn from "../components/btns/BBtn";
import { auth, db } from "../firebase/firebase";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const LogReceipt = () => {
  const user = useAuthState(auth);
  const userId = user[0]?.uid;

  const { projectSlug, logSlug } = useParams();
  const [userDetails, setUserDetails] = useState("");

  const [d,setD] = useState('')
  const [m,setM] = useState('')
  const [y,setY] = useState('')
  const [min,setMin] = useState('')
  const [sec,setSec] = useState('')
  const [ho,setHo] = useState('')
  const [resTxt,setResTxt] = useState('')
  const [resTit,setResTit] = useState('')
  useEffect(() => {
    (async () => {
      const docRef = doc(
        db,
        "users",
        userId,
        "project",
        projectSlug,
        "logs",
        logSlug
      );
      const docSnap = await getDoc(docRef);
      console.log(docSnap.data());

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setUserDetails(docSnap.data().creation.seconds);
        setD(docSnap.data().title.dateprop)
        setM(docSnap.data().title.monthprop)
        setY(docSnap.data().title.yearprop)
        setSec(docSnap.data().elapsed.elapseSec)
        setMin(docSnap.data().elapsed.elapseMin)
        setHo(docSnap.data().elapsed.elapseHour)
        setResTit(docSnap.data().resume.resumeTitle)
        setResTxt(docSnap.data().resume.resumeText)
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })();
  }, []);

  return (
    <div>
      <BBtn />

      <h2>Logged time</h2>
      <p>date: {d} {m} {y}</p>
      <p>time: {ho}:{min}:{sec}</p>
      <h2>Resume</h2>
      <p>title: {resTit}</p>
      <p>resume: {resTxt}</p>
    </div>
  );
};

export default LogReceipt;
