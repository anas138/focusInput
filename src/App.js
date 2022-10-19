import React,{useState} from "react"
import './App.css';
import FocusableInput from './components/FocusableInput';

function App() {
  const [focus,setFocus]=useState(true)
  const toggleFocus=()=>{
    setFocus(!focus)
  }
  return (
    <div className="App">
      <FocusableInput focus={focus}/>
      <button onClick={toggleFocus} className={`focus-button ${focus}`}>
        change Focus
        </button>
    </div>
  );
}

export default App;
