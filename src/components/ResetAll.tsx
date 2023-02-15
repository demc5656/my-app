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
        <Button className="btn-danger border-white" data-testid="reset-all-button" onClick={() => {setNow100(); setNow20(); setNow12(); setNow10(); setNow8(); setNow6(); setNow4(); setTotal100(); setTotal20(); setTotal12(); setTotal10(); setTotal8(); setTotal6(); setTotal4();}}>Reset All</Button>
    </Row>
}