import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import BriefIcon from "../../assets/img/icons/BriefIcon";
import DocumentIcon from "../../assets/img/icons/DocumentIcon";
import DollarIcon from "../../assets/img/icons/DollarIcon";
import MailIcon from "../../assets/img/icons/MailIcon";
import MobileIcon from "../../assets/img/icons/MobileIcon";
import UserIcon from "../../assets/img/icons/UserIcon";
import BackComp from "../../components/btns/BackComp";
import Form from "../../components/form/Form";
import FormBtn from "../../components/form/FormBtn";
import FormContainer from "../../components/form/FormContainer";
import FormHeader from "../../components/form/FormHeader";
import FormInput from "../../components/form/FormInput";
import { ProjectContext } from "../../context/createProject";
import { auth, db } from "../../firebase/firebase";
import CircleItem from "../projectcreation/CircleItem";
import FormSubheader from "./FormSubheader";
// const firebase = require('firebase-admin')
import firebase from 'firebase/app'

const activestyle = "w-[15px] h-[15px] bg-gray-600 graphicelem"

const CreateProjectForm = () => {
  const [page, setPage] = useState(1);
  // const [data, setData] = useState({
  //   user: {},
  //   profile: {},
  //   settings: {},
  // });

  function goNextPage() {
    if (page === 6) return;
    setPage((page) => page + 1);
  }

  // function updateData(type, newData) {
  //   setData((data) => {
  //     return { ...data, [type]: newData };
  //   });
  // }
  const {projectname, clientname, clientEmail, clientPhonenumber, rate, brief}=useContext(ProjectContext)
  // const { projectSlug } = useParams();
  const user = useAuthState(auth);
  const userId = user[0]?.uid;
    console.log(user);
    const createProject = async () => {

      await setDoc(doc(db, "users", userId, `project/${projectname}`), {
        project: projectname,
        name: clientname,
        email: clientEmail,
        phone: clientPhonenumber,
        rate: rate,
        brief: brief,
        creation: serverTimestamp() 
      });
    };
    
  const triggerFunc = (e) => {
    e.preventDefault()
    createProject()
    goNextPage()
  }
  const navigate = useNavigate();
  const closeFunc = (e) => {
    e.preventDefault()
    createProject()
    navigate('/dashboard')
  }
  return (
    <Form>
      <BackComp href="/dashboard" val="Back to frontpage" />

      <FormContainer onSubmit={triggerFunc}>
        <FormHeader val="Create project" />

        {/* the content goes here */}

        {page === 1 && <OnboardingOne 
        // data={data.user} update={updateData} 
        />}
        {page === 2 && (
          <OnboardingTwo 
          // data={data.profile} update={updateData} 
          />
        )}

        {page === 3 && (
          <OnboardingThree
          //  data={data.settings} update={updateData} 
           />
        )}
        {page === 4 && (
          <OnboardingFour 
          // data={data.settings} update={updateData} 
          />
        )}
        {page === 5 && (
          <OnboardingFive 
          // data={data.settings} update={updateData} 
          />
        )}
        {page === 6 && (
          <OnboardingSix 
          // data={data.settings} update={updateData} 
          />
        )}

        {page !== 6 && (
          <div className="grid grid-cols-2 gap-3">
            {page !== 1 && <FormBtn customwidth="w-full" val="skip" />}
            <FormBtn
              customgridSE={page === 1 && "col-start-2"}
              customwidth="w-full"
              val="next"
              onClick={triggerFunc}
            />
          </div>
        )}
        {page === 6 && (
          <FormBtn
         
            customgridSE={page === 1 && "col-start-2"}
            customwidth="w-full"
            val="create project"
            onClick={closeFunc}
          />
        )}
      </FormContainer>
    </Form>
  );
};

function OnboardingOne({ data, update }) {
  const newData = {};
const {projectname, setProjectname}=useContext(ProjectContext)


  return (
    <>
      <div className="grid w-full h-12 grid-cols-6">
        <CircleItem active={activestyle} />
        <CircleItem />
        <CircleItem />
        <CircleItem />
        <CircleItem />
        <CircleItem />
      </div>
      <FormSubheader val="Name of Project" />

      <FormInput
        type="text"
        value={projectname}
        onChange={(e) => setProjectname(e.target.value)}
        placeholder="Name of project"
        icon={<DocumentIcon value={projectname} />}
      />

      {/* <div>
        <button onClick={() => update("user", newData)}></button>
      </div> */}
    </>
  );
}

function OnboardingTwo({ data, update }) {
  const {clientname, setClientname}=useContext(ProjectContext)

  return (
    <>
      <div className="grid w-full h-12 grid-cols-6">
        <CircleItem active={activestyle} />
        <CircleItem active={activestyle} />
        <CircleItem />
        <CircleItem />
        <CircleItem />
        <CircleItem />
      </div>
      <FormSubheader val="Name of Client" />
      
      <FormInput
        type="text"
        value={clientname}
        onChange={(e) => setClientname(e.target.value)}
        placeholder="Name of client"
        icon={<UserIcon value={clientname} />}
      />
    </>
  );
}

function OnboardingThree({ data, update }) {
  const {clientEmail, setClientEmail}=useContext(ProjectContext)


  return (
    <>
      <div className="grid w-full h-12 grid-cols-6">
        <CircleItem active={activestyle} />
        <CircleItem active={activestyle} />
        <CircleItem active={activestyle} />
        <CircleItem />
        <CircleItem />
        <CircleItem />
      </div>
      <FormSubheader val="Client email" />
      <FormInput
        type="text"
        value={clientEmail}
        onChange={(e) => setClientEmail(e.target.value)}
        placeholder="Client email"
        icon={<MailIcon value={clientEmail} />}
      />
    </>
  );
}

function OnboardingFour({ data, update }) {
  const {clientPhonenumber, setClientPhonenumber}=useContext(ProjectContext)


  return (
    <>
      <div className="grid w-full h-12 grid-cols-6">
        <CircleItem active={activestyle} />
        <CircleItem active={activestyle} />
        <CircleItem active={activestyle} />
        <CircleItem active={activestyle} />
        <CircleItem />
        <CircleItem />
      </div>
      <FormSubheader val="Client phonenumber" />
      <FormInput
        type="number"
        value={clientPhonenumber}
        onChange={(e) => setClientPhonenumber(e.target.value)}
        placeholder="Client phonenumber"
        icon={<MobileIcon value={clientPhonenumber} />}
      />
    </>
  );
}
function OnboardingFive({ data, update }) {
  const {rate, setRate}=useContext(ProjectContext)

  return (
    <>
      <div className="grid w-full h-12 grid-cols-6">
        <CircleItem active={activestyle} />
        <CircleItem active={activestyle} />
        <CircleItem active={activestyle} />
        <CircleItem active={activestyle} />
        <CircleItem active={activestyle} />
        <CircleItem />
      </div>
      <FormSubheader val="Agreed hour rate" />
      <FormInput
        type="number"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
        placeholder="Agreed rate"
        icon={<DollarIcon value={rate} />}
      />
    </>
  );
}
function OnboardingSix({ data, update }) {
  const {brief, setBrief}=useContext(ProjectContext)

  return (
    <>
      <div className="grid w-full h-12 grid-cols-6">
        <CircleItem active={activestyle} />
        <CircleItem active={activestyle} />
        <CircleItem active={activestyle} />
        <CircleItem active={activestyle} />
        <CircleItem active={activestyle} />
        <CircleItem active={activestyle} />
      </div>
      <FormSubheader val="Definition of done" />
      <div className="relative w-full">
        <textarea
          className="p-2 pl-10 rounded transition-all bg-gray-50 relative outline-none placeholder:text-[12px] w-full"
          value={brief}
          onChange={(e) => setBrief(e.target.value)}
          placeholder="Short summary of task"
          rows="4"
          cols="50"
        ></textarea>

        <div className="absolute left-2 top-3">
          <BriefIcon value={brief} />
        </div>

      </div>
    </>
  );
}

export default CreateProjectForm;
