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
            <div className='productPage'>
                <div className='productList'>

                    <div className='productContainer'>
                        <div className='productCard'>
                        {/* Rather than the link being /drinkware, keep the path as /products and include an ID associated with different items. Explore also using tags for each category */}
                            <section className="productImage">
                                <Link to="/categories/1">
                                    <h2>Drinkware</h2>
                                    <Img src="/images/products/tumblers/Teal30oz.png" alt="Drinkware" />
                                </Link>
                            </section>
                        </div>
                    </div>

                    <div>
                        <div className='productCard'>
                            <section className="productImage">
                                <Link to="/categories/2">
                                <h2>Personalized Gifts</h2>
                                    <Img src="/images/products/tumblers/DarkGray30oz.png" alt="Personalized Gifts" />
                                </Link>
                            </section>
                        </div>
                    </div>

                    <div>
                        <div className='productCard'>
                            <section className="productImage">
                                <Link to="/categories/3">
                                <h2>Glass and Acrylics</h2>
                                    <Img src="/images/products/tumblers/Orange30oz.png" alt="Glass and Acrylics" />
                                </Link>
                            </section>
                        </div>
                    </div>
                </div>
                <div className='productList'>
                    <div>
                        <div className='productCard'>
                            <section className="productImage">
                                <Link to="/categories/4">
                                <h2>Engraveable Metals</h2>
                                    <Img src="/images/products/tumblers/White30oz.png" alt="Engraveable Metals" />
                                </Link>
                            </section>
                        </div>
                    </div>

                    <div>
                        <div className='productCard'>
                            <section className="productImage">
                                <Link to="/categories/5">
                                <h2>Sublimation</h2>
                                    <Img src="/images/products/tumblers/Red30oz.png" alt="Sublimation" />
                                </Link>
                            </section>
                        </div>
                    </div>

                    <div>
                        <div className='productCard'>
                            <section className="productImage">
                                <Link to="/categories/6">
                                <h2>Laserable Leather</h2>
                                    <Img src="/images/products/tumblers/Maroon30oz.png" alt="Laserable Leather" />
                                </Link>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
