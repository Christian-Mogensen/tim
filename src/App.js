import HeaderComp from "./components/headerbar/HeaderComp";
import TimeGetter from "./components/timegetter/TimeGetter";
import Wrapper from "./components/wrapper/Wrapper";
import "./styles/index.css";
import Main from './components/main/Main'
import { TimeProvider } from "./context/timeContext";

function App() {
  return (
    <TimeProvider>

    <Wrapper>
      <HeaderComp />
      <Main>
      <TimeGetter />
      <div className="w-full col-span-2 bg-red-500 h-[300px]">fum</div>
      <div className="w-full col-span-3 bg-blue-500 h-[300px]">fo</div>
      <div className="w-full col-span-2 bg-green-500 h-[300px]">fe</div>
      <div className="w-full col-span-1 bg-red-500 h-[300px]">fi</div>
      
      </Main>
    </Wrapper>
    </TimeProvider>
  );
}

export default App;
