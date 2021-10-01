//import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';
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
    const [num100, setNum100] = useState<string>("");
    const [num20, setNum20] = useState<string>("");
    const [num12, setNum12] = useState<string>("");
    const [num10, setNum10] = useState<string>("");
    const [num8, setNum8] = useState<string>("");
    const [num6, setNum6] = useState<string>("");
    const [num4, setNum4] = useState<string>("");

    //const num100 = 1;
    //const num20 = 1;
    //const num12 = 1;
    //const num10 = 1;
    //const num8 = 1;
    //const num6 = 1;
    //const num4 = 1;

    function getNumber(value: string|null|undefined, defaultValue: number): number {
        if (value != null) {
            const num = parseInt(value, 10);
            return isNaN(num) ? defaultValue : num;
        }
        else {
            return defaultValue;
        }
    }

    function number100() {

    }

    function setNow100() {
        //const temp = document.getElementById("num100")?.textContent;
        //const num100 = getNumber(temp, 1);
        //if (num100==null || num100<1) {
            //const temp100 = roll(100);
            //set100(temp100)
            //get100(temp100+total100Value)
        //}
        for (let i=0; i<num100; i++) {
            const temp100 = roll(100);
            set100(temp100)
            get100(temp100+total100Value)
        }
    }
    function setNow20() {
        const temp = document.getElementById("num20")?.textContent;
        const num20 = getNumber(temp, 1);
        for (let i=0; i<num20; i++) {
            const temp20 = roll(20);
            set20(temp20)
            get20(temp20+total20Value)
        }
    }
    function setNow12() {
        const temp = document.getElementById("num12")?.textContent;
        const num12 = getNumber(temp, 1);
        for (let i=0; i<num12; i++) {
            const temp12 = roll(12);
            set12(temp12)
            get12(temp12+total12Value)
        }
    }
    function setNow10() {
        const temp = document.getElementById("num10")?.textContent;
        const num10 = getNumber(temp, 1);
        for (let i=0; i<num10; i++) {
            const temp10 = roll(10);
            set10(temp10)
            get10(temp10+total10Value)
        }
    }
    function setNow8() {
        const temp = document.getElementById("num8")?.textContent;
        const num8 = getNumber(temp, 1);
        for (let i=0; i<num8; i++) {
            const temp8 = roll(8);
            set8(temp8)
            get8(temp8+total8Value)
        }
    }
    function setNow6() {
        /*
        const temp = document.getElementById("num6")?.textContent;
        const num6 = getNumber(temp, 1);
        for (let i=0; i<num6; i++) {
            const temp6 = roll(6);
            set6(temp6)
            get6(temp6+total6Value)
        }*/
        const temp = getNumber(num6, 1);
        let tempTotal = 0;
        let rollHold =  0;
        for (let i=0; i<temp; i++) {
            rollHold = roll(6);
            tempTotal = tempTotal + rollHold;
        }
        const temp6 = rollHold;
        set4(temp6)
        get4(tempTotal+total6Value)
    }
    function setNow4() {
        //const temp = document.getElementById("num4")?.textContent;
        const temp = getNumber(num4, 1);
        let tempTotal = 0;
        let rollHold =  0;
        for (let i=0; i<temp; i++) {
            rollHold = roll(4);
            tempTotal = tempTotal + rollHold;
        }
        const temp4 = rollHold;
        set4(temp4)
        get4(tempTotal+total4Value)
    }
    return <Row>
        <Col>
            <div className="input-group mb-1">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="number100">d100</span>
                </div>
                <input id="num100" type="text" placeholder="1" aria-label="number100" aria-describedby="number100" className="form-control"></input>
            </div>
            <Button data-testid="100-button" onClick={setNow100} className="m-2">d100</Button>
        </Col>
        <Col>
            <div className="input-group mb-1">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="number20">d20</span>
                </div>
                <input id="num20" type="text" placeholder="1" aria-label="number20" aria-describedby="number20" className="form-control"></input>
            </div>
            <Button data-testid="20-button" onClick={setNow20} className="m-2">d20</Button>
        </Col>
        <Col>
            <div className="input-group mb-1">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="number12">d12</span>
                </div>
                <input id="num12" type="text" placeholder="1" aria-label="number12" aria-describedby="number12" className="form-control"></input>
            </div>
            <Button data-testid="12-button" onClick={setNow12} className="m-2">d12</Button>
        </Col>
        <Col>
            <div className="input-group mb-1">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="number10">d10</span>
                </div>
                <input id="num10" type="text" placeholder="1" aria-label="number10" aria-describedby="number10" className="form-control"></input>
            </div>
            <Button data-testid="10-button" onClick={setNow10} className="m-2">d10</Button>
        </Col>
        <Col>
            <div className="input-group mb-1">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="number8">d8</span>
                </div>
                <input id="num8" type="text" placeholder="1" aria-label="number8" aria-describedby="number8" className="form-control"></input>
            </div>
            <Button data-testid="8-button" onClick={setNow8} className="m-2">d8</Button>
        </Col>
        <Col>
            <div className="input-group mb-1">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="number6">d6</span>
                </div>
                <input id="num6" type="text" placeholder="1" aria-label="number6" aria-describedby="number6" className="form-control" onChange={(event) => setNum6(event.target.value)} value={num6}></input>
            </div>
            <Button data-testid="6-button" onClick={setNow6} className="m-2">d6</Button>
        </Col>
        <Col>
            <div className="input-group mb-1">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="number4">d4</span>
                </div>
                <input id="num4" type="text" placeholder="1" aria-label="number4" aria-describedby="number4" className="form-control" onChange={(event) => setNum4(event.target.value)} value={num4}></input>
            </div>
            <Button data-testid="4-button" onClick={setNow4} className="m-2">d4</Button>
        </Col>
    </Row>
}