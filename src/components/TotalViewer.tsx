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
        <Col><strong data-testid="total-100">{total100Value}</strong></Col>
        <Col><strong data-testid="total-20">{total20Value}</strong></Col>
        <Col><strong data-testid="total-12">{total12Value}</strong></Col>
        <Col><strong data-testid="total-10">{total10Value}</strong></Col>
        <Col><strong data-testid="total-8">{total8Value}</strong></Col>
        <Col><strong data-testid="total-6">{total6Value}</strong></Col>
        <Col><strong data-testid="total-4">{total4Value}</strong></Col>
        <Row>
            <Col></Col>
            <Col><strong data-testid="total-total">{temp}</strong></Col>
        </Row>
    </Row>
}