import { collection, doc, getDoc, getDocFromCache, getDocFromServer, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import BackIcon from '../assets/img/icons/BackIcon';
import BackComp from '../components/btns/BackComp';
import BBtn from '../components/btns/BBtn';
import { auth, db } from '../firebase/firebase';
import {CircularProgressbar} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';

const LogReceipt = () => {
    const user = useAuthState(auth);
    const userId = user[0]?.uid;
    
    const {projectSlug, logSlug} =useParams()
    const [userDetails, setUserDetails] = useState('')
     useEffect(() => {
       (async () => {
         
         const docRef = doc(db, "users", userId, "project", projectSlug, "logs", logSlug);
         const docSnap = await getDoc(docRef);
console.log(docSnap.data());
        
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          setUserDetails(docSnap.data().creation.seconds)
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
        })();
       }, []);

        return (
    <div>
      <BBtn />
      <h1>{userDetails}</h1>

    </div>
  )
}

export default LogReceipt