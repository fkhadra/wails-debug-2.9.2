import {useState} from 'react';
import logo from './assets/images/logo-universal.png';
import './App.css';
import { Greet, Test } from "../wailsjs/go/main/App";

function App() {
    const [resultText, setResultText] = useState("Please enter your name below 👇");
    const [name, setName] = useState('');
    const updateName = (e: any) => setName(e.target.value);
    const updateResultText = (result: string) => setResultText(result);

    function greet() {
        Greet(name).then(updateResultText);
    }

    async function CallTest(){
      try {
        const r = await Test();
        console.log(r)
      } catch (e) {
        console.error("TEST ERROR", e)
      }
    }

    return (
      <div id="App">
        <img src={logo} id="logo" alt="logo"/>
        <div id="result" className="result">{resultText}</div>
        <button className="btn" onClick={CallTest}>Test</button>
        <div id="input" className="input-box">
          <input id="name" className="input" onChange={updateName} autoComplete="off" name="input" type="text"/>
          <button className="btn" onClick={greet}>Greet</button>
        </div>
      </div>
    )
}

export default App
