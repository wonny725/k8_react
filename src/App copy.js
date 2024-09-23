// import logo from "./logo.svg";
import "./App.css";
import MyClock from "./02/MyClock";
import MyClockTime from "./02/MyClockTime";
import imgfile from "./02/clock.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Hello />
        {/* <Name /> */}
        <MyClock />
        <img src={imgfile} className="App-logo" alt="logo" />
        <MyClockTime />
        {/* <p className="bg-slate-200">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
