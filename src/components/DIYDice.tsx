import { Button, Row, Col, Card } from 'react-bootstrap';
import { roll } from '../utilities/data';
import { useState } from 'react';

export function DIYDice ({}: {
    // diyNum, setDIYNum, diyTotalNum, setDIYTotalNum
    /*diyNum: number,
    setDIYNum: (n: number) => void,
    diyTotalNum: number,
    setDIYTotalNum: (n: number) => void*/
}): JSX.Element {
    const [typedDIY, setTypedDIY] = useState<string>("");
    const [diy, rollDIY] = useState<number>(0);
    const [diyTotal, setDIYTotal] = useState<number>(0);

    function getNumber(value: string|null|undefined, defaultValue: number): number {
        if (value != null) {
            const num = parseInt(value, 10);
            return isNaN(num) ? defaultValue : num;
        }
        else {
            return defaultValue;
        }
    }
    return <Col>
        <Card>
            <Card.Body>
                <Card.Title>dIY</Card.Title>
                <div className="input-group mb-1">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="useThis">Faces:</span>
                </div>
                <input id="typed" type="text" placeholder="0" aria-label="useThis" aria-describedby="useThis" className="form-control" onChange={(event) => setTypedDIY(event.target.value)} value={typedDIY}></input>
                </div>
                <h3 className="text-center" data-testid="total-100">{total100Value+getNumber(mod100,0)}</h3>
            </Card.Body>
        </Card>
    </Col>
}