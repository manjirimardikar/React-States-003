import { useState } from 'react';
import './App.css';
import Passgenrator from './Componnets/Passgenrator';



function App() {

  const [Password, setPassword] = useState("")
  const [Passlength, setPasslength] = useState(8)
  const [Uppercase, setUppercase] = useState(false)
  const [Lowercase, setLowercase] = useState(false)
  const [Number, setNumber] = useState(false)
  const [Symbols, setSymbols] = useState(false)
  const [Copied, setCopied] = useState(false)

  return (
    <div className="App">
    <Passgenrator Password={Password} setPassword={setPassword}
    Passlength={Passlength} setPasslength={setPasslength}
    Uppercase={Uppercase} setUppercase={setUppercase}
    Lowercase={Lowercase} setLowercase={setLowercase}
    Number={Number} setNumber={setNumber}
    Symbols={Symbols} setSymbols={setSymbols}
    Copied={Copied} setCopied={setCopied}/>

     
    </div>
  );
}

export default App;