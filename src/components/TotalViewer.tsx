import { Row, Col} from "react-bootstrap";
//import { useState } from "react";

export function TotalViewer ({total100Value, total20Value, total12Value, total10Value, total8Value, total6Value, total4Value}: {
    total100Value: number,
    total20Value: number,
    total12Value: number,
    total10Value: number,
    total8Value: number,
    total6Value: number,
    total4Value: number
}   ): JSX.Element {
    const temp = total100Value+total20Value+total12Value+total10Value+total8Value+total6Value+total4Value;
    //const [zero100, reset100] = useState<number()
    return <Row>
        <Col><strong>{total100Value}</strong></Col>
        <Col><strong>{total20Value}</strong></Col>
        <Col><strong>{total12Value}</strong></Col>
        <Col><strong>{total10Value}</strong></Col>
        <Col><strong>{total8Value}</strong></Col>
        <Col><strong>{total6Value}</strong></Col>
        <Col><strong>{total4Value}</strong></Col>
        <Row><strong>{temp}</strong></Row>
    </Row>
}