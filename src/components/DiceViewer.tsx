import { Col, Row } from "react-bootstrap";

export function DiceViewer ({rolled100Value, rolled20Value, rolled12Value, rolled10Value, rolled8Value, rolled6Value, rolled4Value}: {
    rolled100Value: number,
    rolled20Value: number,
    rolled12Value: number,
    rolled10Value: number,
    rolled8Value: number,
    rolled6Value: number,
    rolled4Value: number
}   ): JSX.Element {
    return <Row>
        <Col><strong>{rolled100Value}</strong></Col>
        <Col><strong>{rolled20Value}</strong></Col>
        <Col><strong>{rolled12Value}</strong></Col>
        <Col><strong>{rolled10Value}</strong></Col>
        <Col><strong>{rolled8Value}</strong></Col>
        <Col><strong>{rolled6Value}</strong></Col>
        <Col><strong>{rolled4Value}</strong></Col>
    </Row>
}