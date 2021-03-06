import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Nav from "./components/headerbar/Nav";
import Main from "./components/main/Main";
import Wrapper from "./components/wrapper/Wrapper";
import CreateLog from "./pages/CreateLog";
import FrontPage from "./pages/FrontPage";
import LogReceipt from "./pages/LogReceipt";
import CreateProjectForm from "./pages/projectcreation/CreateProjectForm";
import ProjectOverview from "./pages/ProjectOverview";
import Prototype from "./pages/Prototype";
import Login from "./pages/usercreation/Login";
import Register from "./pages/usercreation/Register";
import Reset from "./pages/usercreation/Resetpw";
import Dashboard from "./pages/usercreation/userdashboard/Dashboard";
import "./styles/index.css";
import "./styles/stopwatchcircle.css";

function App() {
  return (
    <Wrapper>
      <Nav />
      <Main>
        <Routes>
          <Route exact path="/" element={<FrontPage />} />
          <Route exact path="/signin" element={<Login />} />
          <Route exact path="/signup" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />

          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/:projectSlug" element={<ProjectOverview />} />
          <Route path="/dashboard/:projectSlug/logs/:logSlug" element={<LogReceipt />} />
          <Route path="/dashboard/:projectSlug/create-log" element={<CreateLog />} />
          <Route
            path="/dashboard/createprojectform"
            element={<CreateProjectForm />}
          />
        </Routes>
      </Main>
      <Footer />
    </Wrapper>
  );
}

export default App;
