import { createContext, useMemo, useState } from "react";

const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  const [projectname, setProjectname] = useState("");
  const [clientname, setClientname] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhonenumber, setClientPhonenumber] = useState("");
  const [rate, setRate] = useState("");
  const [brief, setBrief] = useState("");

  const valueLib = useMemo(
    () => ({
      projectname,
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
      setBrief,
    }),
    [projectname, clientname, clientEmail, clientPhonenumber, rate, brief]
  );
  return (
    <ProjectContext.Provider value={valueLib}>
      {children}
    </ProjectContext.Provider>
  );
};
export { ProjectContext, ProjectProvider };

