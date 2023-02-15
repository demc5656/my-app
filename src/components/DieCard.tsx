import { Row, Col, Card, Button} from "react-bootstrap";
import { roll } from '../utilities/data';
import { useState } from 'react';

export function DieCard ({faces, rolledDieValue, totalDieValue, modDie, setDieValue, setTotalDieValue, setModDie}:
    {
        faces: number,
        rolledDieValue: number,
        totalDieValue: number,
        modDie: string,
        setDieValue: (dv: number) => void,
        setTotalDieValue: (dieTotal: number) => void,
        setModDie: (mod: string) => void
    }): JSX.Element {
        const [diceCount, setDiceCount] = useState<string>("");
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
        return <Card style={{backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdsUgjZ5GId2b-LoPvRRM80CK_Mm9FcnIQ3Q&usqp=CAU")', color: "white"}}>
            <Row>
            <h3 className="text-center my-2" data-testid="100">{rolledDieValue}</h3>
            </Row>
            <Row>
                <div className="input-group mb-1">
                    <div className="input-group-prepend">
                        <span className="input-group-text" style={{backgroundColor: '#5e4778', color: 'white', border: 'transparent'}} id="number100">d{faces}</span>
                    </div>
                    <input style={{backgroundColor: '#ebd9ff'}} id={"num"+faces.toString()} type="text" placeholder="1" aria-label={"number"+faces.toString()} aria-describedby={"number"+faces.toString()} className="form-control" onChange={(event) => setDiceCount(event.target.value)} value={diceCount}></input>
                </div>
            </Row>
            <Row>
                <div className="text-center"><Button style={{backgroundColor: '#5e4778'}} data-testid={faces.toString()+"-button"} onClick={setRolledValues} className="my-2 border-white">d{faces}</Button></div>
            </Row>
            <Row>
                <div className="input-group mb-1">
                    <div className="input-group-prepend">
                        <span className="input-group-text" style={{backgroundColor: '#5e4778', color: 'white', border: 'transparent'}} id={"modded"+faces.toString()}>Mod:</span>
                    </div>
                    <input style={{backgroundColor: '#ebd9ff'}} id={"mod"+faces.toString()} type="text" placeholder="0" aria-label={"modded"+faces.toString()} aria-describedby={"modded"+faces.toString()} className="form-control" onChange={(event) => setModDie(event.target.value)} value={modDie}></input>
                </div>
                <h3 className="text-center" data-testid={"total-"+faces.toString()}>{totalDieValue+getNumber(modDie,0)}</h3>
            </Row>
            <Row>
            <div className="text-center"><Button data-testid={"reset-"+faces.toString()+"-button"} onClick={resetDie} className="my-2 btn-danger border-white">Reset d{faces}</Button></div>
            </Row>
        </Card>
    }