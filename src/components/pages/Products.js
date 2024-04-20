import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Img from 'react-bootstrap/Image';

export default function Products() {
    return (
        <div>
            <header className='productPage'>
                <h2>Products</h2>
            </header>

            <p className='productParagraph'>Check out our products!</p>
        <Container className='productList1'>

            <Row>
                <Col>
                {/* Rather than the link being /drinkware, keep the path as /products and include an ID associated with different items. Explore also using tags for each category */}
                    <Link to="/drinkware">
                        <h2>Drinkware</h2>
                        <Img src="https://via.placeholder.com/150" alt="Drinkware" />
                    </Link>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Link to="/personalized-gifts">
                    <h2>Personalized Gifts</h2>
                        <Img src="https://via.placeholder.com/150" alt="Personalized Gifts" />
                    </Link>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Link to="/glass-and-acrylics">
                    <h2>Glass and Acrylics</h2>
                        <Img src="https://via.placeholder.com/150" alt="Glass and Acrylics" />
                    </Link>
                </Col>
            </Row>
        </Container>
        <Container className='productList2'>
            <Row>
                <Col>
                    <Link to="/engraveable-metals">
                    <h2>Engraveable Metals</h2>
                        <Img src="https://via.placeholder.com/150" alt="Engraveable Metals" />
                    </Link>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Link to="/sublimation">
                    <h2>Sublimation</h2>
                        <Img src="https://via.placeholder.com/150" alt="Sublimation" />
                    </Link>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Link to="/laserable-leather">
                    <h2>Laserable Leather</h2>
                        <Img src="https://via.placeholder.com/150" alt="Laserable Leather" />
                    </Link>
                </Col>
            </Row>
        </Container>
        </div>
    )
}
