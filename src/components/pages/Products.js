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
                                <Link to="/drinkware">
                                    <h2>Drinkware</h2>
                                    <Img src="https://via.placeholder.com/150" alt="Drinkware" />
                                </Link>
                            </section>
                        </div>
                    </div>

                    <div>
                        <div className='productCard'>
                            <section className="productImage">
                                <Link to="/personalized-gifts">
                                <h2>Personalized Gifts</h2>
                                    <Img src="https://via.placeholder.com/150" alt="Personalized Gifts" />
                                </Link>
                            </section>
                        </div>
                    </div>

                    <div>
                        <div className='productCard'>
                            <section className="productImage">
                                <Link to="/glass-and-acrylics">
                                <h2>Glass and Acrylics</h2>
                                    <Img src="https://via.placeholder.com/150" alt="Glass and Acrylics" />
                                </Link>
                            </section>
                        </div>
                    </div>
                </div>
                <div className='productList'>
                    <div>
                        <div className='productCard'>
                            <section className="productImage">
                                <Link to="/engraveable-metals">
                                <h2>Engraveable Metals</h2>
                                    <Img src="https://via.placeholder.com/150" alt="Engraveable Metals" />
                                </Link>
                            </section>
                        </div>
                    </div>

                    <div>
                        <div className='productCard'>
                            <section className="productImage">
                                <Link to="/sublimation">
                                <h2>Sublimation</h2>
                                    <Img src="https://via.placeholder.com/150" alt="Sublimation" />
                                </Link>
                            </section>
                        </div>
                    </div>

                    <div>
                        <div className='productCard'>
                            <section className="productImage">
                                <Link to="/laserable-leather">
                                <h2>Laserable Leather</h2>
                                    <Img src="https://via.placeholder.com/150" alt="Laserable Leather" />
                                </Link>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
