const sequelize = require('../config/connection');
const { User, Product, Category, Tag, ProductTag } = require('../models');
const userData = require('./user-seeds.json');
const productData = require('./product-seeds.json');
const productTagData = require('./product-tag-seeds.json');
const categoryData = require('./category-seeds.json');
const tagData = require('./tag-seeds.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    await Category.bulkCreate(categoryData);
        console.log('\n----- CATEGORIES SEEDED -----\n');
    await Tag.bulkCreate(tagData);
        console.log('\n----- TAGS SEEDED -----\n');
    await Product.bulkCreate(productData);
        console.log('\n----- PRODUCTS SEEDED -----\n');
    await ProductTag.bulkCreate(productTagData);
        console.log('\n----- PRODUCT TAGS SEEDED -----\n');

    process.exit(0);
}

seedDatabase();