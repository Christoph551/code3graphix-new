import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import BeverageHolder from '../../assets/images/beverage_holder.png';
import BottleOpener from '../../assets/images/bottle_openers.png';
import Coaster from '../../assets/images/coaster.png';
import Flask from '../../assets/images/flask.png';
import Ornament from '../../assets/images/ornament.png';
import Plaque from '../../assets/images/plaque.png';
import Sign from '../../assets/images/sign.png';
import TravelMug from '../../assets/images/travel_mug.png';
import Tumbler from '../../assets/images/tumbler.png';
import WaterBottle from '../../assets/images/water_bottle.png';

const products = [
    {
        name: 'Beverage Holder',
        image: BeverageHolder,
        alt: 'Beverage Holder'
    },
    {
        name: 'Bottle Opener',
        image: BottleOpener,
        alt: 'Bottle Opener'
    },
    {
        name: 'Coaster',
        image: Coaster,
        alt: 'Coaster'
    },
    {
        name: 'Flask',
        image: Flask,
        alt: 'Flask'
    },
    {
        name: 'Ornament',
        image: Ornament,
        alt: 'Ornament'
    },
    {
        name: 'Plaque',
        image: Plaque,
        alt: 'Plaque'
    },
    {
        name: 'Sign',
        image: Sign,
        alt: 'Sign'
    },
    {
        name: 'Travel Mug',
        image: TravelMug,
        alt: 'Travel Mug'
    },
    {
        name: 'Tumbler',
        image: Tumbler,
        alt: 'Tumbler'
    },
    {
        name: 'Water Bottle',
        image: WaterBottle,
        alt: 'Water Bottle'
    }
];

export default function Home() {
    return (
        <Container>
            <div>
                <header className="pageHeader">
                    <h2>Home</h2>
                </header>

                <div className="homeParagraph">
                    <p>Welcome to Code 3 Graphix. We are a family owned business all started from a retired Firefighter and Paramedic of 37 years. We take pride in our workmanship in order to ensure the satisfaction of our customers.</p>
                    <p>Take a look through our gallery of images, or simply check out our previous work on Instagram. If you have a custom project in mind, feel free to contact us for a quote. We look forward to working with you!</p>
                </div>
            </div>
            
            <Row className='homeGallery'>
                {products.map((product, index) => (
                    <Col key={index}>
                        <Image alt={product.alt} src={product.image} rounded />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}
