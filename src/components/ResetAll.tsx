import { Button, Row, Col } from "react-bootstrap";

export function ResetAll ({set100, set20, set12, set10, set8, set6, set4, get100, get20, get12, get10, get8, get6, get4}: {
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
    function setNow100() {
        set100(0)
    }
    function setNow20() {
        set20(0)
    }
    function setNow12() {
        set12(0)
    }
    function setNow10() {
        set10(0)
    }
    function setNow8() {
        set8(0)
    }
    function setNow6() {
        set6(0)
    }
    function setNow4() {
        set4(0)
    }
    function setTotal100() {
        get100(0)
    }
    function setTotal20() {
        get20(0)
    }
    function setTotal12() {
        get12(0)
    }
    function setTotal10() {
        get10(0)
    }
    function setTotal8() {
        get8(0)
    }
    function setTotal6() {
        get6(0)
    }
    function setTotal4() {
        get4(0)
    }
    return <Row>
        <Row>
        <Col><Button data-testid="reset-total-100-button" onClick={setTotal100} className="m-2">Reset d100 Total</Button></Col>
        <Col><Button data-testid="reset-total-20-button" onClick={setTotal20} className="m-2">Reset d20 Total</Button></Col>
        <Col><Button data-testid="reset-total-12-button" onClick={setTotal12} className="m-2">Reset d12 Total</Button></Col>
        <Col><Button data-testid="reset-total-10-button" onClick={setTotal10} className="m-2">Reset d10 Total</Button></Col>
        <Col><Button data-testid="reset-total-8-button" onClick={setTotal8} className="m-2">Reset d8 Total</Button></Col>
        <Col><Button data-testid="reset-total-6-button" onClick={setTotal6} className="m-2">Reset d6 Total</Button></Col>
        <Col><Button data-testid="reset-total-4-button" onClick={setTotal4} className="m-2">Reset d4 Total</Button></Col>
        </Row>
        <Row><Button data-testid="reset-all-button" onClick={() => {setNow100(); setNow20(); setNow12(); setNow10(); setNow8(); setNow6(); setNow4(); setTotal100(); setTotal20(); setTotal12(); setTotal10(); setTotal8(); setTotal6(); setTotal4();}}>Reset All</Button></Row>
    </Row>
}
//<Col><Button data-testid="reset-total-button" onClick={() => {setTotal100(); setTotal20(); setTotal12(); setTotal10(); setTotal8(); setTotal6(); setTotal4();}} className="m-2">Reset All</Button></Col>