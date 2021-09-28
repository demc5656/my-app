import { Row, Col} from "react-bootstrap";
//import { useState } from "react";

export function DiceViewer ({rolled100Value, rolled20Value, rolled12Value, rolled10Value, rolled8Value, rolled6Value, rolled4Value}: {
    rolled100Value: number,
    rolled20Value: number,
    rolled12Value: number,
    rolled10Value: number,
    rolled8Value: number,
    rolled6Value: number,
    rolled4Value: number
}   ): JSX.Element {
    //const [zero100, reset100] = useState<number()
    return <Row>
        <Col><strong data-testid="100">{rolled100Value}</strong></Col>
        <Col><strong data-testid="20">{rolled20Value}</strong></Col>
        <Col><strong data-testid="12">{rolled12Value}</strong></Col>
        <Col><strong data-testid="10">{rolled10Value}</strong></Col>
        <Col><strong data-testid="8">{rolled8Value}</strong></Col>
        <Col><strong data-testid="6">{rolled6Value}</strong></Col>
        <Col><strong data-testid="4">{rolled4Value}</strong></Col>
    </Row>
}