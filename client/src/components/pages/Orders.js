import React from 'react';
import { Link } from 'react-router-dom';
import Img from 'react-bootstrap/Image';


export default function ContactUs() {
    return (
        <div className='container'>

            <section className="contact-us">
                <div>
                    <header className='pageHeader'>
                        <h2>Products</h2>
                    </header>

                    <p className='productParagraph'>Select a category to see additional products!</p>
                </div>
                <div className='left-side'>

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
                <div>
                    <h1>Contact Us</h1>
                    <p>We are here to assist you. Please fill out the form below.</p>
                </div>
                <div className="right-side">
                    <form>
                        <div className="form-group">
                            <label htmlFor="partNumber">Part Number:</label>
                            <input type="text" id="partNumber" name="partNumber" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description:</label>
                            <input type="text" id="description" name="description" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="quantity">Quantity:</label>
                            <input type="number" id="quantity" name="quantity" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="size">Size:</label>
                            <input type="text" id="size" name="size" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="personalArtwork">Including Personal Artwork?</label>
                            <input type="checkbox" id="personalArtwork" name="personalArtwork" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="file">Upload File:</label>
                            <input type="file" id="file" name="file" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Tell us a bit more about your concept:</label>
                            <textarea id="message" name="message" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="urgency">Needed By:</label>
                            <input type="text" id="urgency" name="urgency" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}
