import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export default function Products() {
    return (
        <Container>
            <h1>Products</h1>
            <p>Check out our products!</p>

            <Row>
                <Col>
                {/* Rather than the link being /drinkware, keep the path as /products and include an ID associated with different items. Explore also using tags for each category */}
                    <Link to="/drinkware">
                        <img src="https://via.placeholder.com/150" alt="Drinkware" />
                    </Link>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Link to="/personalized-gifts">
                        <img src="https://via.placeholder.com/150" alt="Personalized Gifts" />
                    </Link>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Link to="/glass-and-acrylics">
                        <img src="https://via.placeholder.com/150" alt="Glass and Acrylics" />
                    </Link>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Link to="/engraveable-metals">
                        <img src="https://via.placeholder.com/150" alt="Engraveable Metals" />
                    </Link>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Link to="/sublimation">
                        <img src="https://via.placeholder.com/150" alt="Sublimation" />
                    </Link>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Link to="/laserable-leather">
                        <img src="https://via.placeholder.com/150" alt="Laserable Leather" />
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}
