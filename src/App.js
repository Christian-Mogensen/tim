import './styles/index.css';
import Footer from './components/container/Footer';
import TimerShower from './components/TimerShower';



function App() {
  return (
    <div className="App">
      <div className="wrapper w-full h-screen bg-red-400 grid place-content-center">
        <h1 className='text-5xl font-bold tracking-[20px]'>TIM</h1>
        <div className="tim w-96 p-6 bg-green-300 flex flex-col gap-1">
            <TimerShower />
            <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
