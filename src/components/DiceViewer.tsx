import { Row, Col } from "react-bootstrap";

export function DiceViewer ({rolled100Value, rolled20Value, rolled12Value, rolled10Value, rolled8Value, rolled6Value, rolled4Value}: {
    rolled100Value: number,
    rolled20Value: number,
    rolled12Value: number,
    rolled10Value: number,
    rolled8Value: number,
    rolled6Value: number,
    rolled4Value: number
}   ): JSX.Element {
    return <Col>
        <Row><strong>{rolled100Value}</strong></Row>
        <Row><strong>{rolled20Value}</strong></Row>
        <Row><strong>{rolled12Value}</strong></Row>
        <Row><strong>{rolled10Value}</strong></Row>
        <Row><strong>{rolled8Value}</strong></Row>
        <Row><strong>{rolled6Value}</strong></Row>
        <Row><strong>{rolled4Value}</strong></Row>
    </Col>
}