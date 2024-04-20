import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

export default function Home() {
    return (
        <Container>
        <div>
            <header className="homePage">
                <h1>Home</h1>
            </header>

            <div className="homeParagraph">
                <p>Welcome to Code 3 Graphix. We are a family owned business all started from a retired Firefighter and Paramedic of 37 years. We take pride in our workmanship in order to ensure the satisfaction of our customers.
                </p>
                <p>
                    Take a look through our gallery of images, or simply check out our previous work on Instagram. If you have a custom project in mind, feel free to contact us for a quote. We look forward to working with you!
                </p>
            </div>
        </div>
        
            <Row className='homeGallery'>
                <Col>
                    <Image src="https://via.placeholder.com/150" rounded />
                </Col>
                <Col>
                    <Image src="https://via.placeholder.com/150" rounded />
                </Col>
                <Col>
                    <Image src="https://via.placeholder.com/150" rounded />
                </Col>
                <Col>
                    <Image src="https://via.placeholder.com/150" rounded />
                </Col>
                <Col>
                    <Image src="https://via.placeholder.com/150" rounded />
                </Col>
                <Col>
                    <Image src="https://via.placeholder.com/150" rounded />
                </Col>
                <Col>
                    <Image src="https://via.placeholder.com/150" rounded />
                </Col>
                <Col>
                    <Image src="https://via.placeholder.com/150" rounded />
                </Col>
                <Col>
                    <Image src="https://via.placeholder.com/150" rounded />
                </Col>
                <Col>
                    <Image src="https://via.placeholder.com/150" rounded />
                </Col>
                <Col>
                    <Image src="https://via.placeholder.com/150" rounded />
                </Col>
                <Col>
                    <Image src="https://via.placeholder.com/150" rounded />
                </Col>
                <Col>
                    <Image src="https://via.placeholder.com/150" rounded />
                </Col>
                <Col>
                    <Image src="https://via.placeholder.com/150" rounded />
                </Col>
                <Col>
                    <Image src="https://via.placeholder.com/150" rounded />
                </Col>
            </Row>
        </Container>

    )
}