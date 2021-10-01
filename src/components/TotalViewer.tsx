import { Row, Col} from "react-bootstrap";
import { useState } from "react";

export function TotalViewer ({total100Value, total20Value, total12Value, total10Value, total8Value, total6Value, total4Value}: {
    total100Value: number,
    total20Value: number,
    total12Value: number,
    total10Value: number,
    total8Value: number,
    total6Value: number,
    total4Value: number
}   ): JSX.Element {
    function getNumber(value: string|null|undefined, defaultValue: number): number {
        if (value != null) {
            const num = parseInt(value, 10);
            return isNaN(num) ? defaultValue : num;
        }
        else {
            return defaultValue;
        }
    }

    const temp = total100Value+total20Value+total12Value+total10Value+total8Value+total6Value+total4Value;

    const [mod100, setMod100] = useState<string>("");
    const [mod20, setMod20] = useState<string>("");
    const [mod12, setMod12] = useState<string>("");
    const [mod10, setMod10] = useState<string>("");
    const [mod8, setMod8] = useState<string>("");
    const [mod6, setMod6] = useState<string>("");
    const [mod4, setMod4] = useState<string>("");

    //const [modTotal100, setTotalMod100] = useState<number>(0);
    //const [modTotal20, setTotalMod20] = useState<number>(0);
    //const [modTotal12, setTotalMod12] = useState<number>(0);
    //const [modTotal10, setTotalMod10] = useState<number>(0);
    //const [modTotal8, setTotalMod8] = useState<number>(0);
    //const [modTotal6, setTotalMod6] = useState<number>(0);
    //const [modTotal4, setTotalMod4] = useState<number>(0);

    /*function modify100() {
        const temp = getNumber(mod100, 0);
        setTotalMod100(total100Value+temp);
    }*/
    
    //const [zero100, reset100] = useState<number()
    return <Row>
        <Col>
            <div className="input-group mb-1">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="modded100">Mod:</span>
                </div>
                <input id="mod100" type="text" placeholder="0" aria-label="modded100" aria-describedby="modded100" className="form-control" onChange={(event) => setMod100(event.target.value)} value={mod100}></input>
            </div>
            <h3 className="text-center" data-testid="total-100">{total100Value+getNumber(mod100,0)}</h3>
        </Col>

        <Col>
            <div className="input-group mb-1">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="modded20">Mod:</span>
                </div>
                <input id="mod20" type="text" placeholder="0" aria-label="modded20" aria-describedby="modded20" className="form-control" onChange={(event) => setMod20(event.target.value)} value={mod20}></input>
            </div>
            <h3 className="text-center" data-testid="total-20">{total20Value+getNumber(mod20,0)}</h3>
        </Col>

        <Col>
            <div className="input-group mb-1">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="modded12">Mod:</span>
                </div>
                <input id="mod12" type="text" placeholder="0" aria-label="modded12" aria-describedby="modded12" className="form-control" onChange={(event) => setMod12(event.target.value)} value={mod12}></input>
            </div>
            <h3 className="text-center" data-testid="total-12">{total12Value+getNumber(mod12,0)}</h3>
        </Col>

        <Col>
            <div className="input-group mb-1">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="modded10">Mod:</span>
                </div>
                <input id="mod10" type="text" placeholder="0" aria-label="modded10" aria-describedby="modded10" className="form-control" onChange={(event) => setMod10(event.target.value)} value={mod10}></input>
            </div>
            <h3 className="text-center" data-testid="total-10">{total10Value+getNumber(mod10,0)}</h3>
        </Col>

        <Col>
            <div className="input-group mb-1">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="modded8">Mod:</span>
                </div>
                <input id="mod8" type="text" placeholder="0" aria-label="modded8" aria-describedby="modded8" className="form-control" onChange={(event) => setMod8(event.target.value)} value={mod8}></input>
            </div>
            <h3 className="text-center" data-testid="total-8">{total8Value+getNumber(mod8,0)}</h3>
        </Col>

        <Col>
            <div className="input-group mb-1">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="modded6">Mod:</span>
                </div>
                <input id="mod6" type="text" placeholder="0" aria-label="modded6" aria-describedby="modded6" className="form-control" onChange={(event) => setMod6(event.target.value)} value={mod6}></input>
            </div>
            <h3 className="text-center" data-testid="total-6">{total6Value+getNumber(mod6,0)}</h3>
        </Col>

        <Col>
            <div className="input-group mb-1">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="modded4">Mod:</span>
                </div>
                <input id="mod4" type="text" placeholder="0" aria-label="modded4" aria-describedby="modded4" className="form-control" onChange={(event) => setMod4(event.target.value)} value={mod4}></input>
            </div>
            <h3 className="text-center" data-testid="total-4">{total4Value+getNumber(mod4,0)}</h3>
        </Col>

        <Row>
            <h1 className="text-center" data-testid="total-total">{temp+getNumber(mod100,0)+getNumber(mod20,0)+getNumber(mod12,0)+getNumber(mod10,0)+getNumber(mod8,0)+getNumber(mod6,0)+getNumber(mod4,0)}</h1>
        </Row>
    </Row>
}