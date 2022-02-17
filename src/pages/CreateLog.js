
import { addDoc, collection, doc, serverTimestamp, setDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { auth, db } from '../firebase/firebase';

const CreateLog = () => {
    const user = useAuthState(auth);
    const userId = user[0]?.uid;
    const {slug} = useParams()
    // let logId;

    // const [logId, setLogId] = useState()
    // useEffect(()=>{
    //     setInterval(()=>{

    //         const d = new Date()
    //         const milli = d.getMilliseconds()
    //         const sec = d.getSeconds()
    //         const day = d.getDate()
    //         const month = d.getMonth()
    //         const year = d.getFullYear()
            
    //        let logIdconcat = 'log-'+slug+'-'+year+'-'+day+'-'+month+'-'+sec+'-'+milli;
    //        setLogId(logIdconcat)
    //     },50)
    // },[slug])
    // console.log(logId);
    const createDoc = async() =>{

    await addDoc(collection(db, 'users', userId , 'project',slug,'logs'), {
        title:'',
        resume:'',
        elapsed:'',    
        creation: serverTimestamp() 
         });
      };



  return (
    <div className='max-w-sm m-auto bg-gray-100 h-[500px]'>
        <h1 className='text-center'>CreateLog</h1>
        <button onClick={createDoc}>create doc</button>
        </div>
  )
}

export default CreateLog