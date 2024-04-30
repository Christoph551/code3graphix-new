import React, { useState, useEffect } from 'react';
import Img from 'react-bootstrap/Image';

function Drinkware() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/products')
            .then(response => response.json())
            .then(data => {
                // Filter products that belong to the drinkware category for standard users
                const filteredProducts = data.filter(product => product.category_id === 1);
                setProducts(filteredProducts);
            })
            .catch(error => console.error('Error fetching product data:', error));
    }, []);

    return (
        <div>
            <h2>Drinkware</h2>
            <div className="product-cards">

                {products.map(product => (
                    <div className='overall'>
                        <div className='productContainer'>
                            <div key={product.id} className="productCard">
                                <h3>{product.product_name}</h3>
                                <Img className='cardImage' src={`/images/${product.image}`} alt={product.product_name} />

                                {/* Find dropdown component in bootstrap and allow users to select a size */}
                                {/* Add additional dropdowns to select font style, color, etc... Would need to integrate into database models */}
                                <button className='productBtn'>Add to Cart</button>
                            </div>
                        </div>
                        <div className='productInfo'>
                            <div className='productPrice'>
                                <p>Price: ${product.price}</p>
                            </div>
                            <div>
                                <p> | </p>
                            </div>
                            <div className='productStock'>
                                <p>Stock: {product.stock}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Drinkware;
