import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function LandingPage(props) {
   return (
        <main className='LandingPage text-center'>
           <Container fluid="md">
                <Row>
                    <Col>
                        <div className='lp-body'>
                            <h1>Quizzical</h1>
                            <p>Text your knowledge</p>
                            <button onClick={props.fetchData()} className='mt-3'>Start Quiz</button>
                        </div>
                    </Col>
                </Row>
           </Container>
        </main>
    )
}