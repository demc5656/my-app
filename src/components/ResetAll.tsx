import { Button, Row } from "react-bootstrap";

export function ResetAll ({set100, set20, set12, set10, set8, set6, set4}: {
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
        <Button data-testid="reset-all-button" onClick={() => {setNow100(); setNow20(); setNow12(); setNow10(); setNow8(); setNow6(); setNow4();}}>Reset All</Button>
    </Row>
}