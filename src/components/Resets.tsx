import { Button, Row, Col } from "react-bootstrap";

export function Resets ({set100, set20, set12, set10, set8, set6, set4}: {
    set100: (num100: number) => void,
    set20: (num20: number) => void,
    set12: (num12: number) => void,
    set10: (num10: number) => void,
    set8: (num8: number) => void,
    set6: (num6: number) => void,
    set4: (num4: number) => void
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
    return <Row>
        <Col><Button data-testid="reset-100-button" onClick={setNow100} className="m-2">Reset d100</Button></Col>
        <Col><Button data-testid="reset-20-button" onClick={setNow20} className="m-2">Reset d20</Button></Col>
        <Col><Button data-testid="reset-12-button" onClick={setNow12} className="m-2">Reset d12</Button></Col>
        <Col><Button data-testid="reset-10-button" onClick={setNow10} className="m-2">Reset d10</Button></Col>
        <Col><Button data-testid="reset-8-button" onClick={setNow8} className="m-2">Reset d8</Button></Col>
        <Col><Button data-testid="reset-6-button" onClick={setNow6} className="m-2">Reset d6</Button></Col>
        <Col><Button data-testid="reset-4-button" onClick={setNow4} className="m-2">Reset d4</Button></Col>
    </Row>
}