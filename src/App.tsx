import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import { DiceViewer } from './components/DiceViewer';
import { Row, Container } from 'react-bootstrap';
import { ControlPanel } from './components/ControlPanel';
import "bootstrap/dist/css/bootstrap.min.css";
import { Resets } from './components/Resets';
import { ResetAll } from './components/ResetAll';

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
      <ControlPanel set100={setNow100} set20={setNow20} set12={setNow12} set10={setNow10} set8={setNow8} set6={setNow6} set4={setNow4}></ControlPanel>
      <Resets set100={setNow100} set20={setNow20} set12={setNow12} set10={setNow10} set8={setNow8} set6={setNow6} set4={setNow4}></Resets>
      <ResetAll set100={setNow100} set20={setNow20} set12={setNow12} set10={setNow10} set8={setNow8} set6={setNow6} set4={setNow4}></ResetAll>
      </Row>
    </Container>
  );
}

export default App;
