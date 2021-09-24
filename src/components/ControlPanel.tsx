import { Button, Row, Col} from 'react-bootstrap';
//import { Die } from '../interfaces/die';
import { roll } from '../utilities/data';
//import { useState } from 'react';

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
    get4: (num4: number) => void,
}): JSX.Element {
    function setNow100() {
        const temp100 = roll(100);
        set100(temp100)
        get100(temp100+total100Value)
    }
    function setNow20() {
        const temp20 = roll(20);
        set100(temp20)
        get100(temp20+total20Value)
    }
    function setNow12() {
        const temp12 = roll(12);
        set100(temp12)
        get100(temp12+total12Value)
    }
    function setNow10() {
        const temp10 = roll(10);
        set100(temp10)
        get100(temp10+total10Value)
    }
    function setNow8() {
        const temp8 = roll(8);
        set100(temp8)
        get100(temp8+total8Value)
    }
    function setNow6() {
        const temp6 = roll(6);
        set100(temp6)
        get100(temp6+total6Value)
    }
    function setNow4() {
        const temp4 = roll(4);
        set100(temp4)
        get100(temp4+total4Value)
    }
    return <Row>
        <Col><Button data-testid="100-button" onClick={setNow100} className="m-2">d100</Button></Col>
        <Col><Button data-testid="20-button" onClick={setNow20} className="m-2">d20</Button></Col>
        <Col><Button data-testid="12-button" onClick={setNow12} className="m-2">d12</Button></Col>
        <Col><Button data-testid="10-button" onClick={setNow10} className="m-2">d10</Button></Col>
        <Col><Button data-testid="8-button" onClick={setNow8} className="m-2">d8</Button></Col>
        <Col><Button data-testid="6-button" onClick={setNow6} className="m-2">d6</Button></Col>
        <Col><Button data-testid="4-button" onClick={setNow4} className="m-2">d4</Button></Col>
        </Row>
}