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
        <Col><h3 className="text-center" data-testid="100">{rolled100Value}</h3></Col>
        <Col><h3 className="text-center" data-testid="20">{rolled20Value}</h3></Col>
        <Col><h3 className="text-center" data-testid="12">{rolled12Value}</h3></Col>
        <Col><h3 className="text-center" data-testid="10">{rolled10Value}</h3></Col>
        <Col><h3 className="text-center" data-testid="8">{rolled8Value}</h3></Col>
        <Col><h3 className="text-center" data-testid="6">{rolled6Value}</h3></Col>
        <Col><h3 className="text-center" data-testid="4">{rolled4Value}</h3></Col>
    </Row>
}