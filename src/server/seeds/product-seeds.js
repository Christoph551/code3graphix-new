const Product = require('../models/Product');

const productData = [
    {
        product_name: 'Tumbler',
        price: 24.99,
        stock: 25,
        category_id: 1,
    },
    {
        product_name: 'Christmas Ornament',
        price: 10.99,
        stock: 10,
        category_id: 2,
    },
    {
        product_name: 'Gaming PC Glass Panel',
        price: 99.99,
        stock: 1,
        category_id: 3,
    },
    {
        product_name: 'Knife',
        price: 34.99,
        stock: 5,
        category_id: 4,
    },
    {
        product_name: 'Sublimated Coffee Mug',
        price: 29.99,
        stock: 2,
        category_id: 5,
    },
    {
        product_name: 'Card Protector For Poker Players',
        price: 19.99,
        stock: 1,
        category_id: 6,
    }
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;

// Product tags should be the sizes and colors of the tumblers, etc.
// Explore adding additional file to account for product colors.


// Tumblers 10oz, 20ox, 30oz
// Water Bottles 20oz, 32oz, 40oz
// Beverage Holder (Standard) 
// Beverage Holder (Slim)