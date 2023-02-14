import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import { DiceViewer } from './components/DiceViewer';
import { Row, Container, Col } from 'react-bootstrap';
import { ControlPanel } from './components/ControlPanel';
import "bootstrap/dist/css/bootstrap.min.css";
import { Resets } from './components/Resets';
import { ResetAll } from './components/ResetAll';
import { TotalViewer } from './components/TotalViewer';
import { GrandTotal } from './components/GrandTotal';
import { DieCard } from './components/DieCard';

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

  const [mod100, setMod100] = useState<string>("");
  const [mod20, setMod20] = useState<string>("");
  const [mod12, setMod12] = useState<string>("");
  const [mod10, setMod10] = useState<string>("");
  const [mod8, setMod8] = useState<string>("");
  const [mod6, setMod6] = useState<string>("");
  const [mod4, setMod4] = useState<string>("");

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
      <Col><DieCard faces={100} rolledDieValue={now100} totalDieValue={total100} modDie={mod100} setDieValue={setNow100} setTotalDieValue={setTotal100} setModDie={setMod100}></DieCard></Col>
      <Col><DieCard faces={20} rolledDieValue={now20} totalDieValue={total20} modDie={mod20} setDieValue={setNow20} setTotalDieValue={setTotal20} setModDie={setMod20}></DieCard></Col>
      <Col><DieCard faces={12} rolledDieValue={now12} totalDieValue={total12} modDie={mod12} setDieValue={setNow12} setTotalDieValue={setTotal12} setModDie={setMod12}></DieCard></Col>
      <Col><DieCard faces={10} rolledDieValue={now10} totalDieValue={total10} modDie={mod10} setDieValue={setNow10} setTotalDieValue={setTotal10} setModDie={setMod10}></DieCard></Col>
      <Col><DieCard faces={8} rolledDieValue={now8} totalDieValue={total8} modDie={mod8} setDieValue={setNow8} setTotalDieValue={setTotal8} setModDie={setMod8}></DieCard></Col>
      <Col><DieCard faces={6} rolledDieValue={now6} totalDieValue={total6} modDie={mod6} setDieValue={setNow6} setTotalDieValue={setTotal6} setModDie={setMod6}></DieCard></Col>
      <Col><DieCard faces={4} rolledDieValue={now4} totalDieValue={total4} modDie={mod4} setDieValue={setNow4} setTotalDieValue={setTotal4} setModDie={setMod4}></DieCard></Col>
      <GrandTotal total100Value={total100} total20Value={total20} total12Value={total12} total10Value={total10} total8Value={total8} total6Value={total6} total4Value={total4} mod100={mod100} mod20={mod20} mod12={mod12} mod10={mod10} mod8={mod8} mod6={mod6} mod4={mod4}></GrandTotal>
      <ResetAll set100={setNow100} set20={setNow20} set12={setNow12} set10={setNow10} set8={setNow8} set6={setNow6} set4={setNow4} get100={setTotal100} get20={setTotal20} get12={setTotal12} get10={setTotal10} get8={setTotal8} get6={setTotal6} get4={setTotal4}></ResetAll>
      </Row>
    </Container>
  );
}

export default App;
