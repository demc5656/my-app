import { Row, Col} from "react-bootstrap";
import { useState } from "react";


export function GrandTotal ({total100Value, total20Value, total12Value, total10Value, total8Value, total6Value, total4Value, mod100, mod20, mod12, mod10, mod8, mod6, mod4}: {
    total100Value: number,
    total20Value: number,
    total12Value: number,
    total10Value: number,
    total8Value: number,
    total6Value: number,
    total4Value: number,
    mod100: string,
    mod20: string,
    mod12: string,
    mod10: string,
    mod8: string,
    mod6: string,
    mod4: string,

}): JSX.Element {
    const temp = total100Value+total20Value+total12Value+total10Value+total8Value+total6Value+total4Value;

    /*const [mod100, setMod100] = useState<string>("");
    const [mod20, setMod20] = useState<string>("");
    const [mod12, setMod12] = useState<string>("");
    const [mod10, setMod10] = useState<string>("");
    const [mod8, setMod8] = useState<string>("");
    const [mod6, setMod6] = useState<string>("");
    const [mod4, setMod4] = useState<string>("");*/

    function getNumber(value: string|null|undefined, defaultValue: number): number {
        if (value != null) {
            const num = parseInt(value, 10);
            return isNaN(num) ? defaultValue : num;
        }
        else {
            return defaultValue;
        }
    }

    return <Row>
        <h1 className="text-center my-3" data-testid="total-total">{temp+getNumber(mod100,0)+getNumber(mod20,0)+getNumber(mod12,0)+getNumber(mod10,0)+getNumber(mod8,0)+getNumber(mod6,0)+getNumber(mod4,0)}</h1>
    </Row>
}