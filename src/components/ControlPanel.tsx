import { Button, Row, Col} from 'react-bootstrap';
//import { Die } from '../interfaces/die';
import { roll } from '../utilities/data';
import { useState } from 'react';
//import { HowMany } from './HowMany';

// Textbox stuff learned from: https://getbootstrap.com/docs/4.0/components/input-group/
// Input manipulation learned from: https://stackoverflow.com/questions/22552109/how-do-i-successfully-manipulate-numbers-taken-from-user-input-html-javascript

export function ControlPanel ({total100Value, total20Value, total12Value, total10Value, total8Value, total6Value, total4Value, set100, set20, set12, set10, set8, set6, set4, get100, get20, get12, get10, get8, get6, get4}:
{
    total100Value: number,
    total20Value: number,
    total12Value: number,
    total10Value: number,
    total8Value: number,
    total6Value: number,
    total4Value: number,
    set100: (num100: number) => void,
    set20: (num20: number) => void,
    set12: (num12: number) => void,
    set10: (num10: number) => void,
    set8: (num8: number) => void,
    set6: (num6: number) => void,
    set4: (num4: number) => void,
    get100: (num100: number) => void,
    get20: (num20: number) => void,
    get12: (num12: number) => void,
    get10: (num10: number) => void,
    get8: (num8: number) => void,
    get6: (num6: number) => void,
    get4: (num4: number) => void
}): JSX.Element {
    const [num100, setNum100] = useState<number>(1);
    const [num20, setNum20] = useState<number>(1);
    const [num12, setNum12] = useState<number>(1);
    const [num10, setNum10] = useState<number>(1);
    const [num8, setNum8] = useState<number>(1);
    const [num6, setNum6] = useState<number>(1);
    const [num4, setNum4] = useState<number>(1);

    function setNow100() {
        for (let i=0; i<num100; i++) {
            const temp100 = roll(100);
            set100(temp100)
            get100(temp100+total100Value)
        }
    }
    function setNow20() {
        for (let i=0; i<num20; i++) {
            const temp20 = roll(20);
            set20(temp20)
            get20(temp20+total20Value)
        }
    }
    function setNow12() {
        for (let i=0; i<num12; i++) {
            const temp12 = roll(12);
            set12(temp12)
            get12(temp12+total12Value)
        }
    }
    function setNow10() {
        for (let i=0; i<num10; i++) {
            const temp10 = roll(10);
            set10(temp10)
            get10(temp10+total10Value)
        }
    }
    function setNow8() {
        for (let i=0; i<num8; i++) {
            const temp8 = roll(8);
            set8(temp8)
            get8(temp8+total8Value)
        }
    }
    function setNow6() {
        for (let i=0; i<num6; i++) {
            const temp6 = roll(6);
            set6(temp6)
            get6(temp6+total6Value)
        }
    }
    function setNow4() {
        for (let i=0; i<num4; i++) {
            const temp4 = roll(4);
            set4(temp4)
            get4(temp4+total4Value)
        }
    }
    return <Row>
        <Col>
            <div className="input-group-prepend">
                <span className="input-group-text">How many d100s?</span>
                <input id="num100" type="number" placeholder="1" ></input>
            </div>
            <Button data-testid="100-button" onClick={setNow100} className="m-2">d100</Button>
        </Col>
        <Col>
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon3">How many d20s?</span>
                <input id="num20" type="number" placeholder="1" ></input>
            </div>
            <Button data-testid="20-button" onClick={setNow20} className="m-2">d20</Button>
        </Col>
        <Col>
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon3">How many d12s?</span>
                <input id="num12" type="number" placeholder="1" ></input>
            </div>
            <Button data-testid="12-button" onClick={setNow12} className="m-2">d12</Button>
        </Col>
        <Col>
            <Row>
                <div className="input-group-prepend">
                    <span className="input-group-text">How many d10s?</span>
                    <input id="num10" type="number" placeholder="1" ></input>
                </div>
            </Row>
            <Row><Button data-testid="10-button" onClick={setNow10} className="m-2">d10</Button></Row>
        </Col>
        <Col>
            <Row>
                <div className="input-group-prepend">
                    <span className="input-group-text">How many d8s?</span>
                    <input id="num8" type="number" placeholder="1" ></input>
                </div>
            </Row>
            <Row><Button data-testid="8-button" onClick={setNow8} className="m-2">d8</Button></Row>
        </Col>
        <Col>
            <Row>
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon3">How many d6s?</span>
                    <input id="num6" type="number" placeholder="1" ></input>
                </div>
            </Row>
            <Row><Button data-testid="6-button" onClick={setNow6} className="m-2">d6</Button></Row>
        </Col>
        <Col>
            <Row>
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon3">How many d4s?</span>
                    <input id="num4" type="number" placeholder="1" ></input>
                </div>
            </Row>
            <Row><Button data-testid="4-button" onClick={setNow4} className="m-2">d4</Button></Row>
        </Col>
    </Row>
}