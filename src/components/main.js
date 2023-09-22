import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Main() {
    return(
        <>
            <Container>
                <Row>
                    <Col>New Pools</Col>
                    <Col>Top ETH Pools</Col>
                    <Col>Top BSC Pools</Col>
                    <Col>Top AVAX Pools</Col>
                </Row>
            </Container>
        </>
    )
}

export default Main;