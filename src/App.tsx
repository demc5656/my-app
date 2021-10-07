import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import { DiceViewer } from './components/DiceViewer';
import { Row, Container } from 'react-bootstrap';
import { ControlPanel } from './components/ControlPanel';
import "bootstrap/dist/css/bootstrap.min.css";
import { Resets } from './components/Resets';
import { ResetAll } from './components/ResetAll';
import { TotalViewer } from './components/TotalViewer';
import { DIYDice } from './components/DIYDice';

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

function App(): JSX.Element {
  const [now100, setNow100] = useState<number>(0);
  const [now20, setNow20] = useState<number>(0);
  const [now12, setNow12] = useState<number>(0);
  const [now10, setNow10] = useState<number>(0);
  const [now8, setNow8] = useState<number>(0);
  const [now6, setNow6] = useState<number>(0);
  const [now4, setNow4] = useState<number>(0);

  const [total100, setTotal100] = useState<number>(0);
  const [total20, setTotal20] = useState<number>(0);
  const [total12, setTotal12] = useState<number>(0);
  const [total10, setTotal10] = useState<number>(0);
  const [total8, setTotal8] = useState<number>(0);
  const [total6, setTotal6] = useState<number>(0);
  const [total4, setTotal4] = useState<number>(0);

  //const [typedDIY, setTypedDIY] = useState<string>("");
  //const [diy, rollDIY] = useState<number>(0);
  //const [diyTotal, setDIYTotal] = useState<number>(0);

  function getNumber(value: string|null|undefined, defaultValue: number): number {
    if (value != null) {
        const num = parseInt(value, 10);
        return isNaN(num) ? defaultValue : num;
    }
    else {
        return defaultValue;
    }
  }

  return (
    /*<div className="App">
      <header className="App-header">
        <img src="https://cdn.discordapp.com/attachments/626217927858716674/887431019001688094/buffering.png" className="App-logo" alt="" />
        <p>
          This app is unfinished.
        </p>
        <p>Enjoy my confused face spinning slightly slower than the default.</p>
      </header>
      
    </div>*/
    <Container>
      <Row>
      <DiceViewer rolled100Value={now100} rolled20Value={now20} rolled12Value={now12} rolled10Value={now10} rolled8Value={now8} rolled6Value={now6} rolled4Value={now4}></DiceViewer>
      <ControlPanel total100Value={total100} total20Value={total20} total12Value={total12} total10Value={total10} total8Value={total8} total6Value={total6} total4Value={total4} set100={setNow100} set20={setNow20} set12={setNow12} set10={setNow10} set8={setNow8} set6={setNow6} set4={setNow4} get100={setTotal100} get20={setTotal20} get12={setTotal12} get10={setTotal10} get8={setTotal8} get6={setTotal6} get4={setTotal4}></ControlPanel>
      <Resets set100={setNow100} set20={setNow20} set12={setNow12} set10={setNow10} set8={setNow8} set6={setNow6} set4={setNow4}></Resets>
      <TotalViewer total100Value={total100} total20Value={total20} total12Value={total12} total10Value={total10} total8Value={total8} total6Value={total6} total4Value={total4}></TotalViewer>
      <ResetAll set100={setNow100} set20={setNow20} set12={setNow12} set10={setNow10} set8={setNow8} set6={setNow6} set4={setNow4} get100={setTotal100} get20={setTotal20} get12={setTotal12} get10={setTotal10} get8={setTotal8} get6={setTotal6} get4={setTotal4}></ResetAll>
      </Row>
      <DIYDice></DIYDice>
    </Container>
  );
}

export default App;
