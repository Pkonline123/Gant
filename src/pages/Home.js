import CTGanntFrame from "../components/GTGanntFrame";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {

    return (
      <Row>
        <Col md={12} style={{"overflow": "hidden"}}>
          <CTGanntFrame />
        </Col>
      </Row>
    );
}
