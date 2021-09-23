import { Button, Col } from 'react-bootstrap';
//import { Die } from '../interfaces/die';
import { roll } from '../utilities/data';
import { useState } from 'react';

export function ControlPanel ({set100, set20, set12, set10, set8, set6, set4}:
{
    set100: (num100: number) => void,
    set20: (num20: number) => void,
    set12: (num12: number) => void,
    set10: (num10: number) => void,
    set8: (num8: number) => void,
    set6: (num6: number) => void,
    set4: (num4: number) => void
}): JSX.Element {
    function setNow100() {
        set100(roll(100))
    }
    function setNow20() {
        set20(roll(20))
    }
    function setNow12() {
        set12(roll(12))
    }
    function setNow10() {
        set10(roll(10))
    }
    function setNow8() {
        set8(roll(8))
    }
    function setNow6() {
        set6(roll(6))
    }
    function setNow4() {
        set4(roll(4))
    }
    return <>
        <Col><Button data-testid="100-button" onClick={setNow100}>d100</Button></Col>
        <Col><Button data-testid="20-button" onClick={setNow20}>d20</Button></Col>
        <Col><Button data-testid="12-button" onClick={setNow12}>d12</Button></Col>
        <Col><Button data-testid="10-button" onClick={setNow10}>d10</Button></Col>
        <Col><Button data-testid="8-button" onClick={setNow8}>d8</Button></Col>
        <Col><Button data-testid="6-button" onClick={setNow6}>d6</Button></Col>
        <Col><Button data-testid="4-button" onClick={setNow4}>d4</Button></Col>
    </>
}