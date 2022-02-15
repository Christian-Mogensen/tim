import { useState } from "react";
import DocumentIcon from "../assets/img/icons/DocumentIcon";
import MailIcon from "../assets/img/icons/MailIcon";
import UserIcon from "../assets/img/icons/UserIcon";
import BackComp from "../components/btns/BackComp";
import Form from "../components/form/Form";
import FormBtn from "../components/form/FormBtn";
import FormContainer from "../components/form/FormContainer";
import FormHeader from "../components/form/FormHeader";
import FormInput from "../components/form/FormInput";
import CircleItem from "./projectcreation/CircleItem";
import MobileIcon from "../assets/img/icons/MobileIcon";
import DollarIcon from "../assets/img/icons/DollarIcon";
import BriefIcon from "../assets/img/icons/BriefIcon";

const Prototype = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState({
    user: {},
    profile: {},
    settings: {},
  });

  function goNextPage() {
    if (page === 6) return;
    setPage((page) => page + 1);
  }

  function updateData(type, newData) {
    setData((data) => {
      return { ...data, [type]: newData };
    });
  }

  // function submit() {
  //   fetch("/api/form", { method: "POST", body: JSON.stringify(data) });
  // }

  return (
    <Form>
      <BackComp href="/dashboard" val="Back to frontpage" />

      <FormContainer>
        <FormHeader val="Create project" />

        {/* the content goes here */}

        {page === 1 && <OnboardingOne data={data.user} update={updateData} />}
        {page === 2 && (
          <OnboardingTwo data={data.profile} update={updateData} />
        )}

        {page === 3 && (
          <OnboardingThree data={data.settings} update={updateData} />
        )}
        {page === 4 && (
          <OnboardingFour data={data.settings} update={updateData} />
        )}
        {page === 5 && (
          <OnboardingFive data={data.settings} update={updateData} />
        )}
        {page === 6 && (
          <OnboardingSix data={data.settings} update={updateData} />
        )}

        {/* {page !== 6 && <button onClick={goNextPage}>Next</button>}
        {page === 6 && (
          <button type="submit" onClick={() => console.log("submited form")}>
            Submit
          </button>
        )} */}
         {page !== 6 && <div className="grid grid-cols-2 gap-3">
        {page !==1 &&<FormBtn customwidth="w-full" val="skip" />}
        <FormBtn
        customgridSE={page === 1 &&'col-start-2'}
          customwidth="w-full"
          val="next"
          onClick={goNextPage}
        />
        
      </div>}
      </FormContainer>
    </Form>
  );
};

function OnboardingOne({ data, update }) {
  const newData = {};

  const [projectname, setProjectname] = useState("");

  return (
    <>
      <div className="grid w-full h-10 grid-cols-6">
        <CircleItem active={"h-10 bg-gray-600"} />
        <CircleItem />
        <CircleItem />
        <CircleItem />
        <CircleItem />
        <CircleItem />
      </div>
      <h3 className="text-center">1. Name of Project</h3>

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
  const [clientname, setClientname] = useState("");
  return (
    <>
      <div className="grid w-full h-10 grid-cols-6">
        <CircleItem active={"h-10 bg-gray-600"} />
        <CircleItem active={"h-10 bg-gray-600"} />
        <CircleItem />
        <CircleItem />
        <CircleItem />
        <CircleItem />
      </div>
      <h3 className="text-center">2. Name of Client</h3>
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
  const [clientEmail, setClientEmail] = useState("");

  return (
    <>
      <div className="grid w-full h-10 grid-cols-6">
        <CircleItem active={"h-10 bg-gray-600"} />
        <CircleItem active={"h-10 bg-gray-600"} />
        <CircleItem active={"h-10 bg-gray-600"} />
        <CircleItem />
        <CircleItem />
        <CircleItem />
      </div>
      <h3 className="text-center">3. Client email</h3>
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
  const [clientPhonenumber, setClientPhonenumber] = useState("");

  return (
    <>
      <div className="grid w-full h-10 grid-cols-6">
        <CircleItem active={"h-10 bg-gray-600"} />
        <CircleItem active={"h-10 bg-gray-600"} />
        <CircleItem active={"h-10 bg-gray-600"} />
        <CircleItem active={"h-10 bg-gray-600"} />
        <CircleItem />
        <CircleItem />
      </div>
      <h3 className="text-center">4. Client phonenumber</h3>
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
  const [rate, setRate] = useState("");

  return (
    <>
      <div className="grid w-full h-10 grid-cols-6">
        <CircleItem active={"h-10 bg-gray-600"} />
        <CircleItem active={"h-10 bg-gray-600"} />
        <CircleItem active={"h-10 bg-gray-600"} />
        <CircleItem active={"h-10 bg-gray-600"} />
        <CircleItem active={"h-10 bg-gray-600"} />
        <CircleItem />
      </div>
      <h3 className="text-center">5. Agreed hour rate</h3>
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
  const [brief, setBrief] = useState("");

  return (
    <>
      <div className="grid w-full h-10 grid-cols-6">
        <CircleItem active={"h-10 bg-gray-600"} />
        <CircleItem active={"h-10 bg-gray-600"} />
        <CircleItem active={"h-10 bg-gray-600"} />
        <CircleItem active={"h-10 bg-gray-600"} />
        <CircleItem active={"h-10 bg-gray-600"} />
        <CircleItem active={"h-10 bg-gray-600"} />
      </div>
      <h3 className="text-center">6. Definition of done</h3>
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
        <p></p>
      </div>


    </>
  );
}

export default Prototype;
