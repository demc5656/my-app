import { Row, Col, Card, Button} from "react-bootstrap";
import { roll } from '../utilities/data';
import { useState } from 'react';

export function DieCard ({faces, rolledDieValue, totalDieValue, modDie, setModDie, setDieValue, setTotalDieValue}:
    {
        faces: number,
        rolledDieValue: number,
        totalDieValue: number,
        modDie: string,
        setModDie: (mod: string) => void,
        setDieValue: (dv: number) => void,
        setTotalDieValue: (dieTotal: number) => void,
    }): JSX.Element {
        const [diceCount, setDiceCount] = useState<string>("");
        //const [modDie, setModDie] = useState<string>("");

        function getNumber(value: string|null|undefined, defaultValue: number): number {
            if (value != null) {
                const num = parseInt(value, 10);
                return isNaN(num) ? defaultValue : num;
            }
            else {
                return defaultValue;
            }
        }
        function setRolledValues() {
            const numDice = getNumber(diceCount, 1);
            let tempTotal = 0;
            let rollHold =  0;
            for (let i=0; i<numDice; i++) {
                rollHold = roll(faces);
                tempTotal = tempTotal + rollHold;
            }
            const temp = rollHold;
            setDieValue(temp)
            setTotalDieValue(tempTotal+totalDieValue)
        }
        function resetDie() {
            setDieValue(0)
            setTotalDieValue(0)
        }
        return <Card>
            <Row>{rolledDieValue}</Row>
            <Row>
                <div className="input-group mb-1">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="number100">d{faces}</span>
                    </div>
                    <input id={"num"+faces.toString()} type="text" placeholder="1" aria-label={"number"+faces.toString()} aria-describedby={"number"+faces.toString()} className="form-control" onChange={(event) => setDiceCount(event.target.value)} value={diceCount}></input>
                </div>
                <Button data-testid={faces.toString()+"-button"} onClick={setRolledValues} className="m-2">d{faces}</Button>
            </Row>
            <Row>
                <div className="input-group mb-1">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id={"modded"+faces.toString()}>Mod:</span>
                    </div>
                    <input id={"mod"+faces.toString()} type="text" placeholder="0" aria-label={"modded"+faces.toString()} aria-describedby={"modded"+faces.toString()} className="form-control" onChange={(event) => setModDie(event.target.value)} value={modDie}></input>
                </div>
                <h3 className="text-center" data-testid={"total-"+faces.toString()}>{totalDieValue+getNumber(modDie,0)}</h3>
            </Row>
            <Row>
                <Button data-testid={"reset-"+faces.toString()+"-button"} onClick={resetDie} className="m-2 btn-danger">Reset d{faces}</Button>
            </Row>
        </Card>
    }