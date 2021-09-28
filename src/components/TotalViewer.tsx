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
        <Col><h3 className="text-center" data-testid="total-100">{total100Value}</h3></Col>
        <Col><h3 className="text-center" data-testid="total-20">{total20Value}</h3></Col>
        <Col><h3 className="text-center" data-testid="total-12">{total12Value}</h3></Col>
        <Col><h3 className="text-center" data-testid="total-10">{total10Value}</h3></Col>
        <Col><h3 className="text-center" data-testid="total-8">{total8Value}</h3></Col>
        <Col><h3 className="text-center" data-testid="total-6">{total6Value}</h3></Col>
        <Col><h3 className="text-center" data-testid="total-4">{total4Value}</h3></Col>
        <Row>
            <h1 className="text-center" data-testid="total-total">{temp}</h1>
        </Row>
    </Row>
}