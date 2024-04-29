import React, { useState, useEffect } from 'react';

function PersonalizedGifts() {
    
        const [products, setProducts] = useState([]);
        const [isAdmin, setIsAdmin] = useState(false); // Assuming isAdmin state represents the user's role
    
        useEffect(() => {
            fetch('http://localhost:3001/api/products')
                .then(response => response.json())
                .then(data => {
                    // Filter products that belong to the personalized gifts category for standard users
                    const filteredProducts = isAdmin ? data : data.filter(product => product.category_id === 2);
                    setProducts(filteredProducts);
                })
                .catch(error => console.error('Error fetching product data:', error));
        }, [isAdmin]);
    
        return (
            <div>
                <h2>Personalized Gifts</h2>
                <div className="product-cards">
    
                    {/* If isAdmin is true, display a button to add a new product */}
                    {isAdmin && <button>Add New Product</button>}
    
                    {products.map(product => (
                        <div key={product.id} className="product-card">
                            <h3>{product.product_name}</h3>
                            <p>Price: ${product.price}</p>
                            <p>Stock: {product.stock}</p>
                            <img src={`../../src/images/personalizedGifts${product.image}`} alt={product.product_name} />
    
                            {/* Find dropdown component in bootstrap and allow users to select a size */}
                            <button>Add to Cart</button>
                            {/* Add additional dropdowns to select font style, color, etc... Would need to integrate into database models */}
                        </div>
                    ))}
                </div>
            </div>
        );
    }

export default PersonalizedGifts;