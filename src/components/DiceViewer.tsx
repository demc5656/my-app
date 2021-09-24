import { Row } from "react-bootstrap";

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
        <strong>{rolled100Value}</strong>  
        <strong>{rolled20Value}</strong>  
        <strong>{rolled12Value}</strong>  
        <strong>{rolled10Value}</strong>  
        <strong>{rolled8Value}</strong>  
        <strong>{rolled6Value}</strong>  
        <strong>{rolled4Value}</strong>
    </Row>
}