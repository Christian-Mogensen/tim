import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams, useSearchParams } from 'react-router-dom';
import { auth, db } from '../firebase/firebase';

const LogReceipt = () => {
    const user = useAuthState(auth);
    const userId = user?.uid;
    const {slug} =useParams()
    
    useEffect(() => {
        (async () => {
          const docRef = doc(db,'logs', slug);
          const docSnap = await getDoc(docRef);
          console.log(docSnap.id);
          const docData = docSnap.data();
          
          // console.log(docData.project);
          if (docSnap.exists()) {
              console.log(docData);
            // setProjectName(docData.project);
            // setClientName(docData.name);
            // setClientPhone(docData.phone);
            // setClientEmail(docData.email);
            // setBrief(docData.brief);
            // setRate(docData.rate);
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })();
      }, []);
    

  return (
    <div>LogReceipt</div>
  )
}

export default LogReceipt