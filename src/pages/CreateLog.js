
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import StopWatch from '../components/stopwatch/Stopwatch';
import { auth, db } from '../firebase/firebase';
import FormHeader from '../components/form/FormHeader'
import BBtn from '../components/btns/BBtn';
import { getDate, getMonth, getYear } from 'date-fns';
import { format } from 'date-fns/esm';
const CreateLog = () => {
    const user = useAuthState(auth);
    const userId = user[0]?.uid;
    const {projectSlug} = useParams()
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

    await addDoc(collection(db, 'users', userId , 'project',projectSlug,'logs'), {
        title:'',
        resume:'',
        elapsed:'',    
        creation: serverTimestamp() 
         });
      };

      const dateNum = getDate(new Date())
      const dateMonth = getMonth(new Date())
      const dateMonthForm = format(dateMonth, 'MMMM')
      const dateYear = getYear(new Date())
  return (
    <div className='max-w-sm m-auto'>
      <BBtn />
        <FormHeader val="Create log" />
        <div className=' relative'>
        <div className='absolute right-1 top-1 text-right text-[12px]'>
          <p>{dateNum}</p>
          <p>{dateMonthForm}</p>
          <p>{dateYear}</p>
        </div>
        <h2 className='font-bold'>Timer</h2>
<StopWatch yearprop={dateYear} monthprop={dateMonthForm} dateprop={dateNum} />
        </div>

        {/* <button onClick={createDoc}>create doc</button> */}
        </div>
  )
}

export default CreateLog