import { Link } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
import Img from 'react-bootstrap/Image';

// I want to have each hyperlink of the product category to then direct the user to a page that displays all of the products within that category. This should use the product ID to display the correct products. 

export default function Products() {
    return (
        <div className='overall'>
            <div>
                <header className='pageHeader'>
                    <h2>Products</h2>
                </header>

                <p className='productParagraph'>Select a category to see additional products!</p>
            </div>
            <div className='productList'>

            <div className='productContainer'>
                    <div className='productCard'>
                        <section className="productImage">
                            <Link className='productLink' to="/categories/1">
                                <h2 className="cardTitle">Drinkware</h2>
                                <Img className="cardImage" src="/images/products/tumblers/Teal30oz.png" alt="Drinkware" />
                            </Link>
                        </section>
                    </div>
                </div>
                <div className='productContainer'>
                    <div className='productCard'>
                        <section className="productImage">
                            <Link className='productLink' to="/categories/2">
                                <h2 className="cardTitle">Personalized Gifts</h2>
                                <Img className="cardImage" src="/images/products/tumblers/DarkGray30oz.png" alt="Personalized Gifts" />
                            </Link>
                        </section>
                    </div>
                </div>

                    <div className='productContainer'>
                        <div className='productCard'>
                            <section className="productImage">
                                <Link className='productLink' to="/categories/3">
                                <h2 className='cardTitle'>Glass and Acrylics</h2>
                                    <Img className='cardImage' src="/images/products/tumblers/Orange30oz.png" alt="Glass and Acrylics" />
                                </Link>
                            </section>
                        </div>
                    </div>
                </div>
                <div className='productList'>
                    <div className='productContainer'>
                        <div className='productCard'>
                            <section className="productImage">
                                <Link className='productLink' to="/categories/4">
                                <h2 className='cardTitle'>Engraveable Metals</h2>
                                    <Img className='cardImage' src="/images/products/tumblers/White30oz.png" alt="Engraveable Metals" />
                                </Link>
                            </section>
                        </div>
                    </div>

                    <div className='productContainer'>
                        <div className='productCard'>
                            <section className="productImage">
                                <Link className='productLink' to="/categories/5">
                                <h2 className='cardTitle'>Sublimation</h2>
                                    <Img className='cardImage' src="/images/products/tumblers/Red30oz.png" alt="Sublimation" />
                                </Link>
                            </section>
                        </div>
                    </div>

                    <div className='productContainer'>
                        <div className='productCard'>
                            <section className="productImage">
                                <Link className='productLink' to="/categories/6">
                                <h2 className='cardTitle'>Laserable Leather</h2>
                                    <Img className='cardImage' src="/images/products/tumblers/Maroon30oz.png" alt="Laserable Leather" />
                                </Link>
                            </section>
                        </div>
                    </div>
            </div>
        </div>
    )
}
